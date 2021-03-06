[![Build Status](https://travis-ci.org/sigma3Dev/s3d-fitting-commands.svg?branch=master)](https://travis-ci.org/sigma3Dev/s3d-fitting-commands)

# s3d-fitting-commands

module with all available fitting commands (json) to communicate with the s3DFittingService (c++ websocket service)

## Installation

`npm install s3d-fitting-commands --save`

## Testing

`npm test`

## Overview

```js
/**
 * applyTransformation - generates the json request to apply a transformation
 *
 * @param {object} point point to apply transformation to
 * @param {object} transformation  transformation to apply to the point
 * @param {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
applyTransformation: function(point, transformation, id)

/**
 * bundleAdjustment - generates the json request to perform bundle adjustment
 *
 * @param {array} points transformation parameters to be inverted
 * @param {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
bundleAdjustment: function(points, id)

/**
 * cardanToQuat - generates the json request to transform cardan rotation to quaternions
 *
 * @param {object} coords to be transformed
 * @param {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
cardanToQuat: function(coords, id)

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
 * fitCircleL2 - generates the json request to fit circle
 *
 * @param  {Array} points the points used to fit the circle
 * @param  {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
fitCircleL2: function(points, id)

/**
 * fitCylinder - generates the json request to fit cylinder
 *
 * @param  {Array} points the points used to fit the plane
 * @param  {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
fitCylinder: function(points, id)

/**
 * fitPoint - generates the json request to fit point
 *
 * @param  {Array} points the points used to fit the line
 * @param  {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
fitLineL2: function(points, id)

/**
 * fitLineRansac - generates the json request to fit a line
 * with RANSAC
 *
 * @param  {Array} points the points used to fit the line
 * @param  {number} tolerance the tolerance used to fit the line
 * @param  {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
fitLineRansac: function(points, tolerance, id)

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
 * fitPlaneRansac - generates the json request to fit a plane
 * with RANSAC
 *
 * @param  {Array} points the points used to fit the plane
 * @param  {number} tolerance the tolerance used to fit the plane
 * @param  {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
fitPlaneRansac: function(points, tolerance, id)

/**
   * fitPoint - generates the json request to fit point
   *
   * @param  {Array} points the points used to fit the plane
   * @param  {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  fitPoint: function(points, id)

/**
 * invertTransformationParameters - generates the json request to invert transformation parameters
 *
 * @param {Object} transformation transformation parameters to be inverted
 * @param {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
invertTransformationParameters: function(transformation, id)

/**
 * quatToCardan - generates the json request to transform quaternions to cardan rotation
 *
 * @param {object} coords to be transformed
 * @param {number} id an identifier for the generated request
 * @return {string} the json request representation
 */
quatToCardan: function(coords, id)

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
```
