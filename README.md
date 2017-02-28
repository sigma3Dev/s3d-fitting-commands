# s3d-fitting-commands
module with all available fitting commands (json) to communicate with the s3DFittingService (c++ websocket service)

## Installation

  npm install s3d-fitting-commands --save

## overview

```js
/**
 * json message to fit a 3D-circle with Tschebyscheff approximation
 *
 * @param {Array} points
 * @return {string} message
 */
fitCircle3DTscheby: function(points)
```
