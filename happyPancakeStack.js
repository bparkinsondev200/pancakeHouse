const flipTheCakes = (numOfRandomTestCases, manualTestCaseEntry = []) => {
    /*First set the amount of test cases*/
    const T = numOfRandomTestCases
  
    /*Then generate an array of test strings, with T limiting
    the size of the array*/
    const generateTestCases = (numOfTests) => {
      let pancakeArr = [];
      let pancakeElement;
      /*Loop the test num of cases*/
      for (let x = 0; x < numOfTests; x++) {
        /*Based on the current test case num,
        create a string with that length,
        add to locally scoped pancakeElement
        then push to functionially scoped pancakeArr*/
        pancakeElement = ''
        let S = 0
        do {
          S++
          pancakeElement += Math.round(Math.random()) ? '+' : '-';
        } while (S <= x);
        pancakeArr.push(pancakeElement);
      }
      return pancakeArr;
    };
  
    let S = manualTestCaseEntry.length && manualTestCaseEntry[0] !== '' ? manualTestCaseEntry : generateTestCases(T)
  
    //flipperFunction to take how many to flip, and the pancake stack being flipped
    const flipCakes = (numOfCakes, cakeArray) => {
      let activeVal = cakeArray[numOfCakes - 1]
      cakeArray.splice(0, numOfCakes)
      for (let x = 0; x < numOfCakes; x++) {
        cakeArray.unshift(activeVal === '-' ? '+' : '-')
      }
      return cakeArray
    }
  
    //declare object where the keys are the pancakes strings and the value is the numTimesFlipped
    let pancakesFlipped = []
    // loop through the list of testCases
    for (let x = 0; x < S.length; x++) {
      // for every string, split into array that will be later joined
      let numPancakesToBeFlipped = 0
      let flipCounter = 0
      let currentStringArr = S[x].split('')
      // loop through the string array while the number of pancakes to be flipped is less than or equal to the length of the string
      // AND while the string contains no '-'
      for (let i = 0; i < currentStringArr.length; i++) {
        // if the current string is the same as the next string, continue and add a counter for how many pancakes will be flipped
        if (currentStringArr[i] === currentStringArr[(i + 1)]) {
          numPancakesToBeFlipped++
        }
        else if (!currentStringArr.includes('-')) {
          break;
        }
        // if the current string is not the same as the next string, flip the current number of pancakes to be flipped
        else {
          numPancakesToBeFlipped++
          currentStringArr = flipCakes(numPancakesToBeFlipped, currentStringArr)
          // when pancakes are flipped, add to a flipCounter variable for each
          flipCounter++
          pancakesFlipped[x] = [currentStringArr.join(''), flipCounter]
        }
      }
      // if pancakesToBeFlipped is equal to length of string, and contains '-', flip one more time
      if (numPancakesToBeFlipped === currentStringArr.length && currentStringArr.includes('-')) {
        currentStringArr = flipCakes(currentStringArr.length, currentStringArr)
      }
      // otherwise join that array back up, and add it to a variable keeping track of the corrected pancakes. 
      currentStringArr.join('')
      // now add the flippedPancake and number of times flipped to the return object
      pancakesFlipped[x] = [S[x], flipCounter]
      //loop should start over
    }// end loop
  
    return pancakesFlipped //return object
  }

  //This will determine how many random stacks of pancakes will be created
  let numOfRandomTestCases = 5
  //This will override the random test cases
  let manualTestCaseEntry = []

  console.log(flipTheCakes(numOfRandomTestCases, manualTestCaseEntry))
  