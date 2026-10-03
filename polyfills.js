/**
 * Global polyfill for btoa and atob in Node.js / JavaScript environments.
 * Uses the Node.js built-in Buffer API.
 */
if (typeof globalThis !== 'undefined') {
  if (typeof globalThis.btoa === 'undefined') {
    globalThis.btoa = function (str) {
      return Buffer.from(String(str), 'binary').toString('base64');
    };
  }
  if (typeof globalThis.atob === 'undefined') {
    globalThis.atob = function (b64Encoded) {
      return Buffer.from(String(b64Encoded), 'base64').toString('binary');
    };
  }
}

if (typeof global !== 'undefined') {
  if (typeof global.btoa === 'undefined') {
    global.btoa = globalThis.btoa;
  }
  if (typeof global.atob === 'undefined') {
    global.atob = globalThis.atob;
  }
}

export const btoa = globalThis.btoa;
export const atob = globalThis.atob;
export default { btoa, atob };
