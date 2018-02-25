new Vue({
	el: '#images',
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
		]
	},
	methods: {
		calculate: function(event) {
			var correct = 0
			var incorrect = 0
			for( i = 0; i < answers.length; i++) {
				var input = document.getElementById("input" + [i]).value
				var guess = input.toLowerCase()
				var answer = answers[i]
				var answerColor = document.getElementById("answer" + [i])
				if (answer == guess) {
					answerColor.className = "correct"
					correct++
				} else {
					answerColor.className = "incorrect"
					incorrect++
				}
			}document.getElementById("correct").innerHTML = "Correct: " + correct
			document.getElementById("incorrect").innerHTML = "Incorrect: " + incorrect
			document.getElementById("form").reset();
		}
	}
})