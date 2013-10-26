<script>

var map = function (list, iterator) {
 for (var i = 0, n = list.length; i < n; i++)
  iterator(list[i]);
}

var pluck = function (list, key) {
  var output = [];
  map(list, function (obj) {
    output.push(obj[key]);
  });
  return output;
};

var input = [{x: 1}, {x: 2}]
var actualResult = pluck(input, 'x');
var expectedResult = [1, 2]

var input = [
	{name: 'moe', age: 40},
	{name: 'larry', age: 50},
	{name: 'curly', age: 60}
];
var actualResult = pluck(input, 'name');
var expectedResult = ["moe", "larry", "curly"]



</script>
