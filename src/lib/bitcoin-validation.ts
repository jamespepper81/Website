/**
 * Bitcoin address validation utilities
 * Validates Bitcoin addresses for basic length and character set constraints
 * to prevent abuse through oversized or malformed input values
 */

// Valid Bitcoin address character sets
const BASE58_CHARSET = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;
const BECH32_CHARSET = /^[a-z0-9]+$/;

// Address length constraints
const MIN_ADDRESS_LENGTH = 26;
// Maximum address length: Accounts for future Bitcoin address formats beyond current standards
// - Current P2TR (Taproot) addresses: 62 characters
// - Current P2WSH (SegWit v0): up to 90 characters
// - Reserve headroom for potential future address types
const MAX_ADDRESS_LENGTH = 90;

export interface AddressValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates a Bitcoin address for basic security constraints
 * @param address - The Bitcoin address to validate
 * @returns Validation result with error message if invalid
 */
export function validateBitcoinAddress(address: string): AddressValidationResult {
  // Check if address is empty
  if (!address || typeof address !== 'string') {
    return {
      isValid: false,
      error: 'Address is required',
    };
  }

  // Trim whitespace
  const trimmedAddress = address.trim();

  // Check length constraints
  if (trimmedAddress.length < MIN_ADDRESS_LENGTH) {
    return {
      isValid: false,
      error: 'Address is too short',
    };
  }

  if (trimmedAddress.length > MAX_ADDRESS_LENGTH) {
    return {
      isValid: false,
      error: 'Address is too long',
    };
  }

  // Check for Bech32 addresses (SegWit and Taproot)
  if (trimmedAddress.toLowerCase().startsWith('bc1')) {
    if (!BECH32_CHARSET.test(trimmedAddress.toLowerCase())) {
      return {
        isValid: false,
        error: 'Invalid characters for Bech32 address',
      };
    }
  }
  // Check for Base58 addresses (Legacy and P2SH)
  else if (trimmedAddress.startsWith('1') || trimmedAddress.startsWith('3')) {
    if (!BASE58_CHARSET.test(trimmedAddress)) {
      return {
        isValid: false,
        error: 'Invalid characters for Base58 address',
      };
    }
  }
  // Unknown address format
  else {
    return {
      isValid: false,
      error: 'Address must start with 1, 3, or bc1',
    };
  }

  return {
    isValid: true,
  };
}

/**
 * Sanitizes a Bitcoin address by trimming whitespace
 * @param address - The Bitcoin address to sanitize (may be null/undefined)
 * @returns Sanitized address or empty string if input is null/undefined
 */
export function sanitizeBitcoinAddress(address: string | null | undefined): string {
  return address?.trim() || '';
}
