module.exports = {
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
    var observations = [];
    var i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z
      });
    }
    // build up fitCircle3DTscheby request object
    var message = JSON.stringify(
      {
        jsonrpc: "2.0",
        id,
        method: "fitCircle3DTscheby",
        params: {
          observations
        }
      },
      undefined,
      4
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
    var observations = [];
    var i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z
      });
    }
    // build up fitPlaneL2 request object
    var message = JSON.stringify(
      {
        jsonrpc: "2.0",
        id,
        method: "fitPlaneL2",
        params: {
          observations
        }
      },
      undefined,
      4
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
    var observations = [];
    var i;
    for (i = 0; i < points.length; i++) {
      // check point
      if (points[i].x == null || points[i].y == null || points[i].z == null) {
        return null;
      }
      // add point
      observations.push({
        x: points[i].x,
        y: points[i].y,
        z: points[i].z
      });
    }
    // build up registerPointsInPlane request object
    var message = JSON.stringify(
      {
        jsonrpc: "2.0",
        id,
        method: "registerPointsInPlane",
        params: {
          points: observations,
          plane: {
            x: plane.x,
            y: plane.y,
            z: plane.z,
            i: plane.i,
            j: plane.j,
            k: plane.k
          }
        }
      },
      undefined,
      4
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
    var observations = {
      startPoints: [],
      targetPoints: []
    };

    var i;
    for (i = 0; i < startPoints.length; i++) {
      // check point
      if (
        startPoints[i].x == null ||
        startPoints[i].y == null ||
        startPoints[i].z == null
      ) {
        return null;
      }
      // add start point
      observations.startPoints.push({
        x: startPoints[i].x,
        y: startPoints[i].y,
        z: startPoints[i].z
      });
      // add target point
      observations.targetPoints.push({
        x: targetPoints[i].x,
        y: targetPoints[i].y,
        z: targetPoints[i].z,
        useX: targetPoints[i].useX,
        useY: targetPoints[i].useY,
        useZ: targetPoints[i].useZ
      });
    }

    // build up transformation3D6W request object
    var message = JSON.stringify(
      {
        jsonrpc: "2.0",
        id,
        method: "transformation3D6W",
        params: observations
      },
      undefined,
      4
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
    var observations = {
      // add transformation
      transformation: {
        tx: transformation.tx,
        ty: transformation.ty,
        tz: transformation.tz,
        q0: transformation.q0,
        q1: transformation.q1,
        q2: transformation.q2,
        q3: transformation.q3,
        m: transformation.m
      }
    };

    // build up invertTransformationParameters request object
    var message = JSON.stringify(
      {
        jsonrpc: "2.0",
        id,
        method: "invertTransformationParameters",
        params: observations
      },
      undefined,
      4
    );
    return message;
  },

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
    var observations = {
      //add point
      point: {
        x: point.x,
        y: point.y,
        z: point.z
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
        m: 1.0
      }
    };

    // build up applyTransformation request object
    var message = JSON.stringify(
      {
        jsonrpc: "2.0",
        id,
        method: "applyTransformation",
        params: observations
      },
      undefined,
      4
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
      coord.q1 == null ||
      coords.q2 == null ||
      coords.q3 == null
    ) {
      return null;
    }

    // set up observations
    var observations = {
      q0: coords.q0,
      q1: coords.q1,
      q2: coords.q2,
      q3: coords.q3
    };

    // build up quaternion2CardanRotation request object
    var message = JSON.stringify(
      {
        jsonrpc: "2.0",
        id,
        method: "quaternion2CardanRotation",
        params: observations
      },
      undefined,
      4
    );
    return message;
  },

  /**
   * cardanToQuat - generates the json request to transform cardan rotation to quaternions
   *
   * @param {object} coord to be transformed
   * @param {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  cardanToQuat(coords, id) {
    // check input points
    if (
      coords == null ||
      coords.Rx == null ||
      coords.Ry == null ||
      coords.Rz == null
    ) {
      return null;
    }

    // set up observations
    var observations = {
      rx: coords.Rx,
      ry: coords.Ry,
      rz: coords.Rz
    };

    // build up cardanRotation2Quaternion request object
    var message = JSON.stringify(
      {
        jsonrpc: "2.0",
        id,
        method: "cardanRotation2Quaternion",
        params: observations
      },
      undefined,
      4
    );
    return message;
  }
};
