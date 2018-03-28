var comm = require('../index');
var assert = require('assert');

describe('fitCircle3DTscheby', function() {
  it('fitCircle3DTscheby', function() {
    var observations = [
      {
        x: 1,
        y: 2,
        z: 3
      }, {
        x: 4,
        y: 5,
        z: 6
      }
    ];
    var testRequest = comm.fitCircle3DTscheby(observations, 1);
    var expected = {
      jsonrpc: '2.0',
      id: 1,
      method: 'fitCircle3DTscheby',
      params: {
        observations,
      },
    };
    assert.deepEqual(expected, JSON.parse(testRequest));
  });
});

describe('fitPlaneL2', function() {
  it('fitPlaneL2', function() {
    var observations = [
      {
        x: 1,
        y: 2,
        z: 3
      }, {
        x: 4,
        y: 5,
        z: 6
      }
    ];
    var testRequest = comm.fitPlaneL2(observations, 1);
    var expected = {
      jsonrpc: '2.0',
      id: 1,
      method: 'fitPlaneL2',
      params: {
        observations,
      },
    };
    assert.deepEqual(expected, JSON.parse(testRequest));
  });
});

describe('registerPointsInPlane', function() {
  it('registerPointsInPlane', function() {
    var points = [
      {
        x: 1,
        y: 2,
        z: 3
      }, {
        x: 4,
        y: 5,
        z: 6
      }
    ];
    var plane = {
      x: 0.00,
      y: 0.00,
      z: 0.00,
      i: 0.00000,
      j: 0.00000,
      k: 1.00000
    }
    var testRequest = comm.registerPointsInPlane(plane, points, 1);
    var expected = {
      jsonrpc: '2.0',
      id: 1,
      method: 'registerPointsInPlane',
      params: {
        points,
        plane
      },
    };
    assert.deepEqual(expected, JSON.parse(testRequest));
  });
});

describe('transformation3D6W', function() {
  it('transformation3D6W', function() {
    var startPoints = [
      {
        x: 1,
        y: 2,
        z: 3
      }
    ];
    var targetPoints = [
      {
        x: 4,
        y: 5,
        z: 6,
        useX: true,
        useY: true,
        useZ: false
      }
    ];
    var testRequest = comm.transformation3D6W(startPoints, targetPoints, 1);
    var expected = {
      jsonrpc: '2.0',
      id: 1,
      method: 'transformation3D6W',
      params: {
        startPoints,
        targetPoints
      },
    };
    assert.deepEqual(expected, JSON.parse(testRequest));
  });
});

describe('invertTransformationParameters', function() {
  it('invertTransformationParameters', function() {
    var transformation = {
      tx: 10.0,
      ty: 10.0,
      tz: 10.0,
      q0: 1.000000,
      q1: 0.000000,
      q2: 0.000000,
      q3: 0.000000,
      m: 1.0
    };
    var testRequest = comm.invertTransformationParameters(transformation, 1);
    var expected = {
      jsonrpc: '2.0',
      id: 1,
      method: 'invertTransformationParameters',
      params: {
        transformation,
      },
    };
    assert.deepEqual(expected, JSON.parse(testRequest));
  });
});

describe('applyTransformation', function() {
  it('applyTransformation', function() {
    var point = {
      x: 1,
      y: 2,
      z: 3
    };
    var transformationObject = {
      tx: 10.0,
      ty: 10.0,
      tz: 10.0,
      q0: 1.000000,
      q1: 0.000000,
      q2: 0.000000,
      q3: 0.000000,
      m: 1.0
    };
    var transformationArray = [
      10.0,
      10.0,
      10.0,
      1.000000,
      0.000000,
      0.000000,
      0.000000
    ];
    var testRequest = comm.applyTransformation(point, transformationArray, 1);
    var expected = {
      jsonrpc: '2.0',
      id: 1,
      method: 'applyTransformation',
      params: {
        point,
        transformation: transformationObject,
      },
    };
    assert.deepEqual(expected, JSON.parse(testRequest));
  });
});