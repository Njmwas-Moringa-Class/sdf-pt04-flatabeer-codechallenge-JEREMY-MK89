const BASE_URL = "http://localhost:3000";

const beerSurvey = (beerId) => {
  fetch(`${baseUrl}/beers/${beerId}`)
    .then((response) => response.json())
    .then((beerData) => {
      const beerName = document.getElementById("beer-name");
      const beerDescription = document.getElementById("beer-description");
      const reviewList = document.getElementById("review-list");

      beerName.textContent = beerData.name;
      beerDescription.textContent = beerData.description;


      reviewList.innerHTML = "";
      beerData.reviews.forEach((review) => {
        const li = document.createElement("li");
        li.textContent = review;
        reviewList.appendChild(li);


    });

  })

};



document.addEventListener("DOMContentLoaded", function(){


// Create a "li" element:
const newNode = document.createElement("li");

// Create a text node:
const textNode = document.createTextNode("This Beer so far so ok");
// Append text node to "li" element:
newNode.appendChild(textNode);
// Insert before existing child:
const list = document.getElementById("beer-list");
list.insertBefore(newNode, list.children[0]);


//Changing Header 2 to Oh so Flattening
function updateBeerName(Name){
    let h2 = document.querySelector('#beer-name');
    console.log(h2);
    h2.textContent='Oh So Flattening'
}
updateBeerName();


function addImage(img_url){
    let img = document.querySelector('#beer-image')
    img.src = img_url
}
addImage("https://www.wine-searcher.com/images/labels/03/48/henry-weinhards-redwood-flats-amberale-beer-oregon-10480348.jpg");

/////update beer desciption solution

descriptionFormBtn = document.getElementById("description-formBtn");
descriptionFormBtn.addEventListener("submit", myFunction)

function myFunction(event) {
    event.preventDefault();
    var Textarea = document.getElementById("description").value;
   document.getElementById("description").innerHTML = Textarea;
}

////customer review solution
function reviewForm() {
textArea = document.getElementById("review").value;	
document.getElementById("review-list").innerHTML = textArearea;
}



//const myButton = document.getElementById( 

//myButton.textContent = 'SUBMIT'

//myButton.addEventListener("click", myFunction);



//function reviewForm() {
    //Textarea = document.getElementById("review").value;	
    //document.getElementById("review-list").innerHTML = Textarea;
  
//}

});




//const BASE_URL = "http://localhost:3000";
//async function beerSurvey(){
//const beerResponse = await fetch({'$BASE_URL'}/beers);
//const beers = await beerResponse.json();

//return beerSurvey ();
//};


////const ul = document.nav.createElement("ul");







// console.log('Before Dom Loads')
   // console.log(document.querySelector('main'));
  
    

     // console.log('After Dom Loaded')
   // console.log(document.querySelector('h1'));

   
    
   //const ul = document.createElement("ul");

   //for (let i = 0; i < 3; i++) {
   //  const li = document.createElement("li");
   //  li.textContent = (i + 1).toString();
 //    ul.append(li);
  // }
   
   ////element.append(ul);

//fetch('${BASE_URL}/beers')
//.then(response => response.json())
//.then(db.beers => {
//beers = db.beers;
//populate beers();
//}