/*
https://adventofcode.com/2021/day/1
https://adventofcode.com/2021/day/1#part2
*/

function depthChange(depths) {
	depths = depths || [];
	let increases = 0;

	if (Array.isArray(depths) && depths.length > 1) {
		increases = depths.reduce(function (result, item, index, arr) {
			if (arr[index + 1] && item < arr[index+1]) {
				result += 1;
			}
			return result;
		}, 0);
	}
	return increases;
}

function rollingDepthChange(depths) {
	depths = depths || [];
	let rollingDepths = [];

	if (Array.isArray(depths) && depths.length > 3) {
		rollingDepths = depths.reduce(function (result, item, index, arr) {
			if (arr[index + 1] && arr[index + 2]) {
				result.push(item + arr[index + 1] + arr[index + 2]);
			}
			return result;
		}, []);
	}

	return depthChange(rollingDepths);
}

module.exports = {
	depthChange: depthChange,
	rollingDepthChange: rollingDepthChange,
};
