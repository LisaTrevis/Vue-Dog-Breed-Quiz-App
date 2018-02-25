new Vue({
	el: '#app',
	data: {
		imageURLs: [
			"img/dog0.jpg",
			"img/dog1.jpeg",
			"img/dog2.jpeg",
			"img/dog3.jpeg",
			"img/dog4.jpeg",
			"img/dog5.jpg",
			"img/dog6.jpg"
		],
		answers: [
			"beagle",
			"boxer",
			"german shepherd",
			"corgi",
			"golden retriever",
			"greyhound",
			"weimaraner"
		],
		correct: 0,
		incorrect: 0
	},
	methods: {
		calculate: function() {
			for( i = 0; i < this.answers.length; i++) {
				var input = document.getElementById("input" + i).value
				var guess = input.toLowerCase()
				var answer = this.answers[i]
				var answerColor = document.getElementById("answer" + i)
				if (answer == guess) {
					answerColor.className = "correct"
					this.correct++
				} else {
					answerColor.className = "incorrect"
					this.incorrect++
				}
			};

			document.getElementById("correct").textContent = "Correct: " + this.correct;

			document.getElementById("incorrect").textContent = "Incorrect: " + this.incorrect;
		}
	}
})