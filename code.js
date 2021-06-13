// Follow the Instructions on my.kenzie.academy for this assignment.
// Those instructions will give you details on each step.

// STEP ONE - Create your Data Model.
let dataModel = [ // Assign your data model here, instead of null. This should be an array of "dog" objects.
  {
    name: "Scooby-Doo",
    breed: "Great Dane and Sheepdog",
    age: 5,
    likesTreats: true
  },

  {
    name: "Snoopy",
    breed: "Beagle",
    age: 4,
    likesTreats: false
  },

  {
    name: "Astro",
    breed: "Great Dane",
    age: 3,
    likesTreats: true
  }
]



// When this function is run, it is meant to use the user input to build
// a dog object, and add the dog object to the data model array.


function onSubmitDog(event) {
  event.preventDefault();

  let nameInput = document.querySelector("#name_input");  // We provide a CSS selector, as a string, to identify which HTML element we want querySelector to find for us.
  let breedInput = document.querySelector("#breed_input");
  let ageInput = document.querySelector("#age_input");
  let treatsCheckbox = document.querySelector("#treats_input");

  let name = nameInput.value;
  let breed = breedInput.value;
  let age = ageInput.value;
  let likesTreats = treatsCheckbox.checked;




  if (name === "" || breed === "" || age === "") {  // If any of these text boxes are empty...
    alert("Please fill out all of the fields!");
    return;  // Exit the function early if the above condition is true.
  }



  // STEP TWO - Create a "dog" variable. What piece of data will we assign
  // to this variable? A new "dog" object, containing the values from above:
  // name, breed, age, likeTreats. Add this object to your data model array.
  // How can you insert this dog object into the dogs array?

  // YOUR CODE HERE

  let newDog = { name: name, breed: breed, age: age, likesTreats: likesTreats }
  dataModel.push(newDog)






  renderDogList()

  // The following lines reset the form, so that it is ready for information
  // on a new dog:
  nameInput.value = "";
  breedInput.value = "";
  ageInput.value = "";
  treatsCheckbox.checked = false;

}

// This function is run, it is meant to keep the dog list which the user
// sees on the page in sync with the data model containing all of our 
// dog objects.
function renderDogList() {
  let list = document.querySelector("#dog_list");
  list.innerHTML = "";

  // First, CLEAR the whole list.

  // STEP THREE - Render the dog list from scratch. See "Step Three"
  // instructions.
  // If there are no dogs, then render "No Dogs!" Otherwise, render all 
  // of the dogs in your data model.
  // Remember to copy the "Send Home" button code into your loop. This
  // code is in the instructions.

  // YOUR CODE HERE

  for (let index = 0; index < dataModel.length; index++) {
    let currentDog = dataModel[index];
    let dogElement = document.createElement('li');
    if (currentDog.likesTreats === true) {
      dogElement.innerText = `${currentDog.name} A ${currentDog.age} year old ${currentDog.breed} who likes treats. `
    } else {
      dogElement.innerText = `${currentDog.name} A ${currentDog.age} year old ${currentDog.breed}. `
    }

    
    let button = document.createElement('button');
    button.innerText = 'Send Home';
    button.addEventListener("click", function () {
      removeDog(currentDog)
    });

    dogElement.append(button);
    list.append(dogElement);
  }
     
    

}




// The function below is already completed for you. It removes a given 
// dog from the data model. It finds the index of the dog, and then uses
// that index to splice (cut) it out of the array. Then it re-renders
// the dog list, so that it no longer displays on the page.
function removeDog(currentDog) {
  let dogIndex = dataModel.indexOf(currentDog);
  dataModel.splice(dogIndex, 1);
  if (dataModel.length !== null) {
    renderDogList();
  }else if (dataModel.length === null) {
  let noDog = dataModel[index]
   noDog.innerText = "No Dog!"
} 
} 




// We need to tell the Submit button on the page what to do:
// Run the onSubmitDog function when the button is clicked.
let button = document.querySelector("#submit_button");
button.addEventListener("click", onSubmitDog);



// This function call will take place when the page loads, in order
// to render the dog list for the very first time.
renderDogList();
