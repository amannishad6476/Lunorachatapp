/**
 * Base64 encoding and decoding utilities compatible with Node.js and Browser environments.
 * Uses Buffer.from(...) in Node.js and falls back to btoa / atob.
 */

/**
 * Encodes a string to Base64 using Buffer.from() or btoa()
 */
export function encodeBase64(input: string): string {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(input, 'utf-8').toString('base64');
  }
  if (typeof btoa === 'function') {
    return btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, (_, p1) => String.fromCharCode(parseInt(p1, 16))));
  }
  throw new Error('Base64 encoding is not supported in this environment.');
}

/**
 * Decodes a Base64 string using Buffer.from() or atob()
 */
export function decodeBase64(encoded: string): string {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(encoded, 'base64').toString('utf-8');
  }
  if (typeof atob === 'function') {
    const binary = atob(encoded);
    const bytes = Array.from(binary, char => '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2)).join('');
    return decodeURIComponent(bytes);
  }
  throw new Error('Base64 decoding is not supported in this environment.');
}
