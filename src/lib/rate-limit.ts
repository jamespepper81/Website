// src/lib/rate-limit.ts
/**
 * Simple in-memory rate limiter for API endpoints
 * For production, consider using Redis or a dedicated service like Upstash
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory store for rate limit tracking
const rateLimitStore = new Map<string, RateLimitEntry>();

// Cleanup old entries periodically (every 5 minutes)
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
      if (now > entry.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

interface RateLimitConfig {
  /**
   * Maximum number of requests allowed within the window
   */
  maxRequests: number;
  
  /**
   * Time window in milliseconds
   */
  windowMs: number;
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

/**
 * Check if a request should be rate limited
 * 
 * @param identifier - Unique identifier for the client (e.g., IP address, user ID)
 * @param config - Rate limit configuration
 * @returns Rate limit result with success status and metadata
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // If no entry exists or the window has expired, create a new one
  if (!entry || now > entry.resetTime) {
    const resetTime = now + config.windowMs;
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime,
    });

    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - 1,
      reset: resetTime,
    };
  }

  // Increment the counter
  entry.count += 1;

  // Check if limit is exceeded
  if (entry.count > config.maxRequests) {
    return {
      success: false,
      limit: config.maxRequests,
      remaining: 0,
      reset: entry.resetTime,
    };
  }

  return {
    success: true,
    limit: config.maxRequests,
    remaining: config.maxRequests - entry.count,
    reset: entry.resetTime,
  };
}

/**
 * Get client identifier from request
 * Uses multiple headers to identify the client
 * 
 * @param request - Next.js request object
 * @returns Client identifier string
 */
export function getClientIdentifier(request: Request): string {
  // Try to get real IP from various headers (for proxied requests)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip'); // Cloudflare
  
  // Use the first available IP
  const ip = forwardedFor?.split(',')[0].trim() || 
             realIp || 
             cfConnectingIp || 
             'unknown';
  
  return ip;
}

/**
 * Preset configurations for common rate limiting scenarios
 */
export const RateLimitPresets = {
  /**
   * Strict limit: 5 requests per minute
   */
  STRICT: {
    maxRequests: 5,
    windowMs: 60 * 1000, // 1 minute
  },
  
  /**
   * Moderate limit: 10 requests per minute
   */
  MODERATE: {
    maxRequests: 10,
    windowMs: 60 * 1000, // 1 minute
  },
  
  /**
   * Lenient limit: 30 requests per minute
   */
  LENIENT: {
    maxRequests: 30,
    windowMs: 60 * 1000, // 1 minute
  },
  
  /**
   * API limit: 100 requests per hour
   */
  API: {
    maxRequests: 100,
    windowMs: 60 * 60 * 1000, // 1 hour
  },
} as const;
