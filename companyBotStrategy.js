/* Description: Each CodeSignal Company Bot is trained by engineers from that specific company. 
The way it works is that a representative group of engineers from each company is identified as trainers before the bot goes live, 
and they CodeFight against the bot during a training phase. 
The current training algorithm is definitely more complex, but let's assume it works this way:

For each trainer we collect two pieces of information per task [answerTime, correctness], 
where correctness is 1 if the answer was correct, -1 if the answer was wrong, and 0 if no answer was given. 
In this case, the bot's correct answer time for a given task would be the average of the answer times from the trainers who answered correctly. 
Given all of the training information for a specific task, calculate the bot's answer time.  */


function solution(trainingData) {
    // bot's answer time is the average answer time of all those that answered correctly

    let correctAnswerTimes = []
    let average

	for(let row = 0; row<trainingData.length; row++){

		let subMatrix = trainingData[row]

		for(let column = 0; column<subMatrix.length; column++){

			if(subMatrix[1] === 1) correctAnswerTimes.push(subMatrix[0])

		}
	}
	
		if(correctAnswerTimes.length > 0) {
		average = correctAnswerTimes.reduce((a,b)=> a+b) / correctAnswerTimes.length
	} else return 0.0

return average 
}

// test cases:
solution([[3, 1],[6, 1],[4, 1],[5, 1]])  // good
solution([[4,-1],[0,0],[5,-1]])  // good
solution([[3,1],[6,1],[4,-1],[5,1]])  // should return about 4.66666666667