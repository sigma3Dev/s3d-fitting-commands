module.exports = {

  /**
   * fitCircle3DTscheby - generates the json request to fit a 3D-circle
   * with Tschebyscheff approximation
   *
   * @param  {Array} points the points used to fit the circle
   * @param  {number} id an identifier for the generated request
   * @return {string} the json request representation
   */
  fitCircle3DTscheby: function(points, id) {
    // check input points
    if (points == null || !points.isArray()) {
      return null;
    }
    // set up observations
    var observations = [];
    for (int i = 0; i < points.length; i++) {
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
    let message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id: id,
        method: 'fitCircle3DTscheby',
        params: {
          observations: observations,
        },
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
  fitPlaneL2: function(points, id) {
    // check input points
    if (points == null || !points.isArray()) {
      return null;
    }
    // set up observations
    var observations = [];
    for (int i = 0; i < points.length; i++) {
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
    let message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id: id,
        method: 'fitPlaneL2',
        params: {
          observations: observations,
        },
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
  registerPointsInPlane: function(plane, points, id) {
    // check input points
    if (points == null || !points.isArray()) {
      return null;
    }
    // check input plane
    if (plane == null || plane.x == null || plane.y == null || plane.z == null
      || plane.i == null || plane.j == null || plane.k == null) {
      return null;
    }
    // set up observations
    var observations = [];
    for (int i = 0; i < points.length; i++) {
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
    let message = JSON.stringify(
      {
        jsonrpc: '2.0',
        id: id,
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
          }
        },
      },
      undefined,
      4
    );
    return message;
  },

};
