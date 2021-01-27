// Mutations
// Return true if the string in the first element of the array contains all of the letters
//  of the string in the second element of the array

// const mutation = (arr) => {
//    let firstWord = arr[0].toLowerCase();
//    let secondWord = arr[1].toLowerCase();
//
//    for (let i=0; i<secondWord.length; i++) {
//      if (firstWord.indexOf(secondWord[i]) === -1) return false;
//    }
//    return true;
//  }
//
//  mutation(["hello", "hey"]);

 function mutation (arr) {
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();

    for (let letter of secondWord) {
      if (!firstWord.includes(letter)) return false;
    }
    return true;
  }

  console.log(mutation(["hello", "hey"]));
