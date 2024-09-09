// Base URL for The Cat API (Insert your API key)
const baseURL = " https://api.thecatapi.com/v1/images/search?limit=10";

window.onload = () => {
    const fetchButton = document.getElementById("fetchButton1");
    const catImage = document.getElementById("catImage1");
    const loading = document.getElementById("loading1");

    fetchButton.addEventListener("click", async () => {
        loading.style.display = "block";
        catImage.style.display = "none";

        try {
            const response = await fetch(baseURL);
            const data = await response.json();

            // Display the image
            if (data.length > 0) {
                catImage.src = data[0].url;
                catImage.style.display = "block";
            }
        } catch (error) {
            console.error("Error fetching the cat image from GutHub:", error);
            loading.textContent = "Failed to load image. Try again.";
        } finally {
            // Hide loading message after image loads
            loading.style.display = "none";
        }
    });
};
