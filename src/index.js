///addeventListener event to the Dom to check if has loaded.
document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "http://localhost:3000";
  console.log("API base URL:", baseUrl);

  // Function to fetch and populate details of the beer that is its name,description& image
  const fetchAndDisplayBeer = (beerId) => {
      fetch(`${baseUrl}/beers/${beerId}`)
          .then((response) => response.json())
          .then((beerData) => {
              const beerName = document.getElementById("beer-name");
              const beerDescription = document.getElementById("beer-description");
              const beerImage = document.getElementById("beer-image");
              const reviewList = document.getElementById("review-list");

              beerName.textContent = beerData.name;
              beerDescription.textContent = beerData.description;
              beerImage.src = beerData.image_url;

              // Create an "li" element for the customer care submitted from the reviews.
              reviewList.innerHTML = "";
              beerData.reviews.forEach((review) => {
                  const li = document.createElement("li");
                  li.textContent = review;
                  reviewList.appendChild(li);
              });
          });
  };

  // Using the call() Function callback to fetch and display the beer menu.
  const fetchAndDisplayBeerMenu = () => {
      fetch(`${baseUrl}/beers`)
          .then((response) => response.json())
          .then((beers) => {
              const beerList = document.getElementById("beer-list");
              beerList.innerHTML = "";

              // Assuming each beer has a 'name' attribute, you can display the list of beers in the 'beer-list' element.
              beers.forEach((beer) => {
                  const listItem = document.createElement("li");
                  listItem.textContent = beer.name;
                  beerList.appendChild(listItem);
              });

              // Automatically select and display the first beer when the menu is loaded.
              if (beers.length > 0) {
                  fetchAndDisplayBeer(beers[0].id);
              }
          })
          .catch((error) => {
              console.error("Error fetching beer menu:", error);
          });
  };

  // Linking the textarea input to populate in the Customer reviews li elements
  const reviewForm = document.getElementById("review-form");
  reviewForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const newReview = document.getElementById("review").value;
      const reviewList = document.getElementById("review-list");
      const li = document.createElement("li");
      li.textContent = newReview;
      reviewList.appendChild(li);
      document.getElementById("review").value = "";
  });

  fetchAndDisplayBeerMenu();
});
