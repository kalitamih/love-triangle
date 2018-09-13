/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount( preferences = [] ) {

var count = 0;
  
for (var i = 1; i <= preferences.length; i++)
	{
		
  var b = preferences[i - 1];
  var c = preferences[b - 1];
  if (  preferences[c - 1] == i  ) count = count + 1;
  
}
 return  Math.floor( count / 3 );
  
};
