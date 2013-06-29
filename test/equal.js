
function absoluteEqual(s) {
  for (var i = 0, l = s.map.length; i < l; i++) {
    if (Number.isFinite(s.map[i][1])) {
      s.test.ok(
        Math.abs( s.fn(s.map[i][0]) - s.map[i][1] ) < s.limit,
        'almost absolute equal'
      );
    } else {
      s.test.equal(
        s.fn(s.map[i][0]), s.map[i][1],
        'infinity equal'
      );
    }
  }
}
exports.absoluteEqual = absoluteEqual;

function relativeEqual(s) {
  for (var i = 0, l = s.map.length; i < l; i++) {
    if (Number.isFinite(s.map[i][1])) {
      s.test.ok(
        Math.abs( s.fn(s.map[i][0]) - s.map[i][1] ) / s.map[i][1] < s.limit,
        'almost relative equal'
      );
    } else {
      s.test.equal(
        s.fn(s.map[i][0]), s.map[i][1],
        'infinity equal'
      );
    }
  }
}
exports.relativeEqual = relativeEqual;
