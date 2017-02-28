
module.exports = {

  /**
   * json message to fit a 3D-circle with Tschebyscheff approximation
   *
   * @param {Array} points
   * @return {string} message
   */
  fitCircle3DTscheby: function(points) {
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

};
