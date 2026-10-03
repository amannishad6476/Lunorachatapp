/**
 * Polyfill for btoa and atob using Node.js Buffer API / globalThis
 * Ensures server-side and client-side scripts execute without ReferenceError.
 */

const targetScope: any =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : this;

if (typeof targetScope.btoa === 'undefined') {
  targetScope.btoa = (str: string): string => {
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(String(str), 'binary').toString('base64');
    }
    throw new Error('No base64 encoding implementation available');
  };
}

if (typeof targetScope.atob === 'undefined') {
  targetScope.atob = (b64Encoded: string): string => {
    if (typeof Buffer !== 'undefined') {
      return Buffer.from(String(b64Encoded), 'base64').toString('binary');
    }
    throw new Error('No base64 decoding implementation available');
  };
}

export const polyfilledBtoa = targetScope.btoa;
export const polyfilledAtob = targetScope.atob;
