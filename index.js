// function addingEventListener() {
//     const input = document.getElementById('input');
//     input.addEventListener('click', function(event) {
//       alert('I was clicked!');
// });
// }
// addingEventListener();


// function exerciseDog(dogName, dogBreed) {
//     console.log(`Wake ${dogName} the ${dogBreed.length}`);
//     console.log(`Leash ${dogName} the ${dogBreed}`);
//     // console.log(`Walk to the park ${dogName} the ${dogBreed}`);
//     // console.log(`Throw the fribsee for ${dogName} the ${dogBreed}`);
//     // console.log(`Walk home with ${dogName} the ${dogBreed}`);
//     // console.log(`Unleash ${dogName} the ${dogBreed}`);
//   }

// exerciseDog("Boo");



let weatherToday = "Rainy";
 
function exerciseDog(dogName, dogBreed) {
  if (weatherToday === "Rainy") {
    return `${dogName} did not exercise due to rain`;
  }
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the fribsee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `${dogName} is happy and tired!`
}
 
let result = exerciseDog("Byron", "poodle");
console.log(result); // => "Byron did not exercise due to rain"
