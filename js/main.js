// New Vue instance template
new Vue({
	// Ties our instance to the element with id="app"
	el: '#app',
	data: {
		// The array of src filepaths that we populate into our created <img> elements
		imageURLs: [
			"img/dog0.jpg",
			"img/dog1.jpeg",
			"img/dog2.jpeg",
			"img/dog3.jpeg",
			"img/dog4.jpeg",
			"img/dog5.jpg",
			"img/dog6.jpg"
		],
		// The array of answers that we compare to our input values for each instance that's created by the v-for directive
		answers: [
			"beagle",
			"boxer",
			"german shepherd",
			"corgi",
			"golden retriever",
			"greyhound",
			"weimaraner"
		],
		// Our counter variables that are updated during the course of the calculate function
		correct: 0,
		incorrect: 0
	},
	methods: {
		calculate: function() {
			// Grabs our variables from the data property
			this.correct = 0;
			this.incorrect= 0;
			for( i = 0; i < this.answers.length; i++) {
				// Grabs the value of the element with id="input" with each iteration
				var input = document.getElementById("input" + i).value
				// Transforms input value to lower case
				var guess = input.toLowerCase()
				// Grabs the indexed value from the answers array with each interation
				var answer = this.answers[i]
				// Grabs the <h2>Answer:</h2> element and updates the class for each iteration depending on the outcome of the if/else statement evaluation
				var answerColor = document.getElementById("answer" + i)
				if (answer == guess) {
					answerColor.className = "correct"
					this.correct++
				} else {
					answerColor.className = "incorrect"
					this.incorrect++
				}
			};

			// Updates the text content of the h3 with id="correct" with our correct counter value at the end of the loop
			document.getElementById("correct").textContent = "Correct: " + this.correct;

			// Updates the text content of the h3 with id="incorrect" with our incorrect counter value at the end of the loop
			document.getElementById("incorrect").textContent = "Incorrect: " + this.incorrect;
		}
	}
})