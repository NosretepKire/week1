The second argument/parameter is expected to be a function
function findWaldo(arrayOfNames, found) {
  for (var i = 0; i < arrayOfNames.length; i++) {
    if (arrayOfNames[i] === "Waldo") {
      found(i);   // this will send i into foundIndex
    }
  }
}
function actionWhenFound(foundIndex) {
   console.log("Found Waldo at index " + foundIndex + "!");
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);







