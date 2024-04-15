console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    console.log('%c HI', 'color: firebrick'); // Existing console.log statement

    // Challenge 1: Fetch images and render them to the DOM
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                document.getElementById("dog-image-container").appendChild(img);
            });
        })
        .catch(error => console.error("Error fetching dog images:", error));

    // Challenge 2: Fetch dog breeds and render them to the DOM
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            const breedList = document.getElementById("dog-breeds");
            breeds.forEach(breed => {
                const li = document.createElement("li");
                li.textContent = breed;
                breedList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching dog breeds:", error));

    // Challenge 3: Change font color when <li> is clicked
    document.getElementById("dog-breeds").addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change color to blue
        }
    });

    // Challenge 4: Filter breeds by selected letter
    document.getElementById("breed-dropdown").addEventListener("change", function(event) {
        const selectedLetter = event.target.value;
        const breedList = document.getElementById("dog-breeds");
        const breedItems = breedList.getElementsByTagName("li");
        for (let i = 0; i < breedItems.length; i++) {
            const breedName = breedItems[i].textContent;
            if (breedName.startsWith(selectedLetter)) {
                breedItems[i].style.display = "list-item"; // Show breeds starting with selected letter
            } else {
                breedItems[i].style.display = "none"; // Hide breeds not starting with selected letter
            }
        }
    });
});

