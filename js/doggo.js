const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggo");

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise //function runs whenever promis is resolved - needs time to back from server (this is async)
      .then(function(response) { // it comes as a block of text to resolve it
        const processingPromise = response.json(); // parsing to object i can use (giving another promis)
        return processingPromise; // returning another promise (promise chaining)
      })
      .then(function(processedResponse) {
        const img = document.createElement("img");
        img.src = processedResponse.message; //processing api
        img.alt = "Wygenerowany piesek";
        doggos.appendChild(img);
      });
  }
  
  document.querySelector(".doggo-button").addEventListener("click", addNewDoggo);