var createCounter = function (init) {
	let actual_value = init;
	return {
	increment: function() {
		actual_value++;
		return actual_value;
	},
	reset: function() {
		actual_value = init;
		return actual_value;
	},
	decrement: function() {
		actual_value--;
		return actual_value;
	}
	};
};