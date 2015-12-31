// Function to compute the intersection of two arrays

function compute_intersection(arr1, arr2, callback) {
	// let's break up the bigger of the two arrays
	var bigger = arr1.length > arr2.length ? arr1 : arr2; // if arr1 is bigger than arr2, pick arr1
	var smaller = bigger == arr1 ? arr2 : arr1; // if arr1 is bigger, pick arr2, otherwise pick arr1
	var biglen = bigger.length;
	var smlen = smaller.length;

	var sidx = 0;			// starting index of any chunk
	var size = 10;			// chunk size, can adjust!
	var results = [];		// intermediate results

	// for each chunk of "size" elements in bigger, search through smaller
	function sub_compute_intersection() {
		for (var i = sidx; i < (sidx + size) && i < biglen; i++) {
			for (var j = 0; j < smlen; j++) {
				if (bigger[i] == smaller[j]) {
					results.push(smaller[j]);
					break;
				}
			}
		}

		if (i >= biglen) {
			callback(null, results);	// no error, send back results
		} else {
			sidx += size;
			process.nextTick(sub_compute_intersection);
		}
	}

	sub_compute_intersection();
}


