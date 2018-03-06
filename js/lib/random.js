//random
lib.random = {
  uniform: function (m, n) {
    if(n == undefined) return Math.random() * m;
    return Math.random() * (n - m) + m;
  },
  sample: function (arr, n) {
    if(arr.length <= n) return arr;
    var indexes = arr.map(function(value, index) {
      return index;
    });
    var length = arr.length;
    for(var i = 0; i < length - n; i++){
      indexes.splice(Math.floor(lib.random.uniform(indexes.length)), 1);
    }
    return indexes.map(function (value) {
      return arr[value];
    });
  }
};