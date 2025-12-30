import { describe, it, expect } from 'vitest';
import { validateBitcoinAddress, sanitizeBitcoinAddress } from './bitcoin-validation';

describe('validateBitcoinAddress', () => {
  describe('valid addresses', () => {
    it('should accept valid P2PKH address', () => {
      const result = validateBitcoinAddress('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa');
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should accept valid P2SH address', () => {
      const result = validateBitcoinAddress('3J98t1WpEZ73CNmYviecrnyiWrnqRhWNLy');
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should accept valid Bech32 (SegWit) address', () => {
      const result = validateBitcoinAddress('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq');
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should accept valid Taproot address', () => {
      const result = validateBitcoinAddress('bc1p5cyxnuxmeuwuvkwfem96lqzszd02n6xdcjrs20cac6yqjjwudpxqkedrcr');
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });
  });

  describe('invalid addresses', () => {
    it('should reject empty string', () => {
      const result = validateBitcoinAddress('');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Address is required');
    });

    it('should reject null/undefined', () => {
      const result = validateBitcoinAddress(null as any);
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Address is required');
    });

    it('should reject address that is too short', () => {
      const result = validateBitcoinAddress('1A1zP1eP5QGefi2DM');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Address is too short');
    });

    it('should reject address that is too long', () => {
      const veryLongAddress = 'bc1' + 'a'.repeat(100);
      const result = validateBitcoinAddress(veryLongAddress);
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Address is too long');
    });

    it('should reject Base58 address with invalid characters', () => {
      const result = validateBitcoinAddress('1A1zP1eP5QGefi2DMPTfTL5SLmv7Divf0O'); // Contains 0 and O
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Invalid characters for Base58 address');
    });

    it('should reject Bech32 address with invalid characters', () => {
      const result = validateBitcoinAddress('bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq!@#');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Invalid characters for Bech32 address');
    });

    it('should reject address with invalid prefix', () => {
      const result = validateBitcoinAddress('abc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Address must start with 1, 3, or bc1');
    });

    it('should reject address starting with 2', () => {
      const result = validateBitcoinAddress('2A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Address must start with 1, 3, or bc1');
    });

    it('should reject potential XSS attempts', () => {
      const result = validateBitcoinAddress('<script>alert("xss")</script>');
      expect(result.isValid).toBe(false);
    });

    it('should reject SQL injection attempts', () => {
      const result = validateBitcoinAddress("1' OR '1'='1");
      expect(result.isValid).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle addresses with leading/trailing whitespace', () => {
      const result = validateBitcoinAddress('  1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa  ');
      expect(result.isValid).toBe(true);
    });
  });
});

describe('sanitizeBitcoinAddress', () => {
  it('should trim whitespace from address', () => {
    expect(sanitizeBitcoinAddress('  1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa  ')).toBe('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa');
  });

  it('should handle empty string', () => {
    expect(sanitizeBitcoinAddress('')).toBe('');
  });

  it('should handle null/undefined', () => {
    expect(sanitizeBitcoinAddress(null as any)).toBe('');
  });
});
