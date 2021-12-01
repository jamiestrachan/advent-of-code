/*
https://adventofcode.com/2021/day/1
https://adventofcode.com/2021/day/1#part2
*/

function depthChange(depths) {
	var increases = 0;
	if (depths && Array.isArray(depths) && depths.length > 1) {
		for (var i = 0; i < depths.length; i ++) {
			if (depths[i] < depths[i+1]) {
				increases++;
			}
		}
	}
	return increases;
}

function rollingDepthChange(depths) {
	return false;
}

module.exports = {
	depthChange: depthChange,
	rollingDepthChange: rollingDepthChange,
};
