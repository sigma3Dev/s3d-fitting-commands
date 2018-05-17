module.exports = {
  /**
   * applyTransformation - generates the json request to apply a transformation
   *
   * @param {object} point point to apply transformation to
   * @param {object} transformation  transformation to apply to the point
   * @param {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  applyTransformation(point, transformation, id) {
    // check input points
    if (
      point == null ||
      point.x == null ||
      point.y == null ||
      point.z == null ||
      transformation == null ||
      transformation[0] == null ||
      transformation[1] == null ||
      transformation[2] == null ||
      transformation[3] == null ||
      transformation[4] == null ||
      transformation[5] == null ||
      transformation[6] == null ||
      transformation.length !== 7
    ) {
      return null;
    }

    // set up observations
    const observations = {
      // add point
      point: {
        x: point.x,
        y: point.y,
        z: point.z,
      },
      // add transformation
      transformation: {
        tx: transformation[0],
        ty: transformation[1],
        tz: transformation[2],
        q0: transformation[3],
        q1: transformation[4],
        q2: transformation[5],
        q3: transformation[6],
        m: 1.0,
      },
    };

    // build up applyTransformation request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'applyTransformation',
        params: observations,
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * bundleAdjustment - generates the json request to perform bundle adjustment
   *
   * @param {array} points transformation parameters to be inverted
   * @param {number} baseStation base Station
   * @param {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  bundleAdjustment(points, baseStation, id) {
    // check input points
    if (points === null || baseStation === null) {
      return null;
    }

    // set up observations
    const observations = [
      {
        id: points[0].stationId,
        commonGeometries: [
          {
            id: points[0].geometryId,
            x: points[0].x,
            y: points[0].y,
            z: points[0].z,
            stdev: points[0].stdev,
          },
        ],
      },
    ];
    let i;
    for (i = 1; i < points.length; i++) {
      let hasBeenAdded = false;
      if (
        points[i].stationId === null ||
        points[i].geometryId === null ||
        points[i].x === null ||
        points[i].y === null ||
        points[i].z === null ||
        points[i].stdev === null
      ) {
        return null;
      }

      let j;
      for (j = 0; j < observations.length; j++) {
        if (observations[j].id === points[i].stationId) {
          observations[j].commonGeometries.push({
            id: points[i].geometryId,
            x: points[i].x,
            y: points[i].y,
            z: points[i].z,
            stdev: points[i].stdev,
          });
          hasBeenAdded = true;
        }
      }

      if (!hasBeenAdded) {
        observations.push({
          id: points[i].stationId,
          commonGeometries: [
            {
              id: points[i].geometryId,
              x: points[i].x,
              y: points[i].y,
              z: points[i].z,
              stdev: points[i].stdev,
            },
          ],
        });
      }
    }

    // build up bundleAdjustment request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'bundleAdjustment',
        params: {
          baseStationId: baseStation,
          stations: observations,
        },
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * cardanToQuat - generates the json request to transform cardan rotation to quaternions
   *
   * @param {object} coords to be transformed
   * @param {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  cardanToQuat(coords, id) {
    // check input points
    if (coords == null || coords.Rx == null || coords.Ry == null || coords.Rz == null) {
      return null;
    }

    // set up observations
    const observations = {
      rx: coords.Rx,
      ry: coords.Ry,
      rz: coords.Rz,
    };

    // build up cardanRotation2Quaternion request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'cardanRotation2Quaternion',
        params: observations,
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * fitCircle3DTscheby - generates the json request to fit a 3D-circle
   * with Tschebyscheff approximation
   *
   * @param  {Array} points the points used to fit the circle
   * @param  {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  fitCircle3DTscheby(points, id) {
    // check input points
    if (points == null) {
      return null;
    }
    // set up observations
    const observations = [];
    let i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z,
      });
    }
    // build up fitCircle3DTscheby request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'fitCircle3DTscheby',
        params: {
          observations,
        },
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * fitCircleL2 - generates the json request to fit circle
   *
   * @param  {Array} points the points used to fit the circle
   * @param  {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  fitCircleL2(points, id) {
    // check input points
    if (points == null) {
      return null;
    }
    // set up observations
    const observations = [];
    let i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z,
      });
    }
    // build up fitPlaneL2 request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'fitCircle3DL2',
        params: {
          observations,
        },
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * fitCylinder - generates the json request to fit cylinder
   *
   * @param  {Array} points the points used to fit the cylinder
   * @param  {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  fitCylinder(points, id) {
    // check input points
    if (points == null) {
      return null;
    }
    // set up observations
    const observations = [];
    let i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z,
      });
    }
    // build up fitPlaneL2 request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'fitCylinderL2',
        params: {
          observations,
          approxType: 'approxFromFirstTwoPoints',
        },
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * fitLineL2 - generates the json request to fit a line
   *
   * @param  {Array} points the points used to fit the line
   * @param  {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  fitLineL2(points, id) {
    // check input points
    if (points == null) {
      return null;
    }
    // set up observations
    const observations = [];
    let i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z,
      });
    }
    // build up fitLineL2 request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'fitLine3DL2',
        params: {
          observations,
        },
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * fitLineRansac - generates the json request to fit a line
   * with RANSAC
   *
   * @param  {Array} points the points used to fit the line
   * @param  {number} tolerance the tolerance used to fit the line
   * @param  {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  fitLineRansac(points, tolerance, id) {
    // check input points
    if (points == null || tolerance == null) {
      return null;
    }
    // set up observations
    const observations = [];
    let i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z,
      });
    }
    // build up fitLineRansac request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'fitLine3DRansac',
        params: {
          observations,
          tolerance,
        },
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * fitPlaneL2 - generates the json request to fit a plane
   * with Gauss approximation
   *
   * @param  {Array} points the points used to fit the plane
   * @param  {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  fitPlaneL2(points, id) {
    // check input points
    if (points == null) {
      return null;
    }
    // set up observations
    const observations = [];
    let i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z,
      });
    }
    // build up fitPlaneL2 request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'fitPlaneL2',
        params: {
          observations,
        },
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * fitPlaneRansac - generates the json request to fit a plane
   * with RANSAC
   *
   * @param  {Array} points the points used to fit the plane
   * @param  {number} tolerance the tolerance used to fit the plane
   * @param  {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  fitPlaneRansac(points, tolerance, id) {
    // check input points
    if (points == null || tolerance == null) {
      return null;
    }
    // set up observations
    const observations = [];
    let i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z,
      });
    }
    // build up fitPlaneRansac request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'fitPlaneRansac',
        params: {
          observations,
          tolerance,
        },
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * fitPoint - generates the json request to fit point
   *
   * @param  {Array} points the points used to fit the plane
   * @param  {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  fitPoint(points, id) {
    // check input points
    if (points == null) {
      return null;
    }
    // set up observations
    const observations = [];
    let i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z,
      });
    }
    // build up fitPlaneL2 request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'fitPointL2',
        params: {
          observations,
        },
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * invertTransformationParameters - generates the json request to invert transformation parameters
   *
   * @param {object} transformation transformation parameters to be inverted
   * @param {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  invertTransformationParameters(transformation, id) {
    // check input points
    if (
      transformation == null ||
      transformation.tx == null ||
      transformation.ty == null ||
      transformation.tz == null ||
      transformation.q0 == null ||
      transformation.q1 == null ||
      transformation.q2 == null ||
      transformation.q3 == null ||
      transformation.m == null
    ) {
      return null;
    }

    // set up observations
    const observations = {
      // add transformation
      transformation: {
        tx: transformation.tx,
        ty: transformation.ty,
        tz: transformation.tz,
        q0: transformation.q0,
        q1: transformation.q1,
        q2: transformation.q2,
        q3: transformation.q3,
        m: transformation.m,
      },
    };

    // build up invertTransformationParameters request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'invertTransformationParameters',
        params: observations,
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * quatToCardan - generates the json request to transform quaternions to cardan rotation
   *
   * @param {object} coord to be transformed
   * @param {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  quatToCardan(coords, id) {
    // check input points
    if (
      coords == null ||
      coords.q0 == null ||
      coords.q1 == null ||
      coords.q2 == null ||
      coords.q3 == null
    ) {
      return null;
    }

    // set up observations
    const observations = {
      q0: coords.q0,
      q1: coords.q1,
      q2: coords.q2,
      q3: coords.q3,
    };

    // build up quaternion2CardanRotation request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'quaternion2CardanRotation',
        params: observations,
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * registerPointsInPlane - generates the json request to register
   * points into a plane
   *
   * @param  {Object} plane the plane that the points are registered into
   * @param  {Array} points the points that are going to be registered
   * @param  {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  registerPointsInPlane(plane, points, id) {
    // check input points
    if (points == null) {
      return null;
    }
    // check input plane
    if (
      plane == null ||
      plane.x == null ||
      plane.y == null ||
      plane.z == null ||
      plane.i == null ||
      plane.j == null ||
      plane.k == null
    ) {
      return null;
    }
    // set up observations
    const observations = [];
    let i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z,
      });
    }
    // build up registerPointsInPlane request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'registerPointsInPlane',
        params: {
          points: observations,
          plane: {
            x: plane.x,
            y: plane.y,
            z: plane.z,
            i: plane.i,
            j: plane.j,
            k: plane.k,
          },
        },
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * transformation3D6W - generates the json request to transform 3D coordinates
   *
   * @param {array} startPoints the coordinates of the start system
   * @param {array} targetPoints the coordinates of the target system
   * @param {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  transformation3D6W(startPoints, targetPoints, id) {
    // check input points
    if (
      startPoints == null ||
      startPoints[0].x == null ||
      startPoints[0].y == null ||
      startPoints[0].z == null ||
      targetPoints == null ||
      targetPoints[0].x == null ||
      targetPoints[0].y == null ||
      targetPoints[0].z == null ||
      startPoints.length !== targetPoints.length
    ) {
      return null;
    }

    // set up observations
    const observations = {
      startPoints: [],
      targetPoints: [],
    };

    let i;
    for (i = 0; i < startPoints.length; i++) {
      // check point
      if (startPoints[i].x == null || startPoints[i].y == null || startPoints[i].z == null) {
        return null;
      }
      // add start point
      observations.startPoints.push({
        x: startPoints[i].x,
        y: startPoints[i].y,
        z: startPoints[i].z,
      });
      // add target point
      observations.targetPoints.push({
        x: targetPoints[i].x,
        y: targetPoints[i].y,
        z: targetPoints[i].z,
        useX: targetPoints[i].useX,
        useY: targetPoints[i].useY,
        useZ: targetPoints[i].useZ,
      });
    }

    // build up transformation3D6W request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'transformation3D6W',
        params: observations,
      },
      undefined,
      4,
    );
    return message;
  },

  /**
   * translatePointAlongAxis - generates the json request to translate point along axis
   *
   * @param {object} input point to be translated
   * @param {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  translatePointAlongAxis(input, id) {
    // check input points
    if (
      input == null ||
      input.x == null ||
      input.y == null ||
      input.z == null ||
      input.i == null ||
      input.j == null ||
      input.z == null ||
      input.amount == null
    ) {
      return null;
    }

    // set up observations
    const observations = {
      // add input
      input: {
        x: input.x,
        y: input.y,
        z: input.z,
        i: input.i,
        j: input.j,
        z: input.z,
        amount: input.amount,
      },
    };

    // build up translatePointAlongAxis request object
    const message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id,
        method: 'translatePointAlongAxis',
        params: {
          point: {
            x: input.x,
            y: input.y,
            z: input.z,
          },
          axis: {
            i: input.i,
            j: input.j,
            k: input.k,
          },
          amount: input.amount,
        },
      },
      undefined,
      4,
    );
    return message;
  },
};
