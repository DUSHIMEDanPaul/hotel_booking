/**
 * Node 26+ compatibility shim — must be the FIRST import in src/index.ts.
 *
 * Node removed `buffer.SlowBuffer`, but `jsonwebtoken` → `jws` → `jwa` →
 * `buffer-equal-constant-time` still reads `SlowBuffer.prototype` at load time
 * (no upstream fix). Aliasing it to `Buffer` restores the old behaviour.
 * No-op on Node 20/22, where SlowBuffer still exists.
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bufferModule = require("buffer");

if (!bufferModule.SlowBuffer) {
  bufferModule.SlowBuffer = bufferModule.Buffer;
}

export {};
