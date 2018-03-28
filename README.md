[![Build Status](https://travis-ci.org/sigma3Dev/s3d-fitting-commands.svg?branch=master)](https://travis-ci.org/sigma3Dev/s3d-fitting-commands)

# s3d-fitting-commands
module with all available fitting commands (json) to communicate with the s3DFittingService (c++ websocket service)

## Installation

  ```npm install s3d-fitting-commands --save```

## Testing

  ```npm test```

## Overview

```js
/**
 * fitCircle3DTscheby - generates the json request to fit a 3D-circle
 * with Tschebyscheff approximation
 *
 * @param  {Array} points the points used to fit the circle
 * @param  {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
fitCircle3DTscheby: function(points, id)

/**
 * fitPlaneL2 - generates the json request to fit a plane
 * with Gauss approximation
 *
 * @param  {Array} points the points used to fit the plane
 * @param  {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
fitPlaneL2: function(points, id)

/**
 * registerPointsInPlane - generates the json request to register
 * points into a plane
 *
 * @param  {Object} plane the plane that the points are registered into
 * @param  {Array} points the points that are going to be registered
 * @param  {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
registerPointsInPlane: function(plane, points, id)

/**
 * transformation3D6W - generates the json request to transform 3D coordinates
 * 
 * @param  {Array} startPoints the coordinates of the start system
 * @param  {Array} targetPoints the coordinates of the target system
 * @param  {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
transformation3D6W: function(startPoints, targetPoints, id)

/**
 * invertTransformationParameters - generates the json request to invert transformation parameters
 * 
 * @param {Object} transformation transformation parameters to be inverted
 * @param {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
invertTransformationParameters: function(transformation, id)

/**
 * applyTransformation - generates the json request to apply a transformation
 * 
 * @param {object} point point to apply transformation to
 * @param {object} transformation  transformation to apply to the point
 * @param {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
applyTransformation: function(point, transformation, id)
```