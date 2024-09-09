const baseURL = "https://api.thecatapi.com/v1/images/search";

window.onload = () => {
    const fetchButton = document.getElementById("fetchButton");
    const catImage = document.getElementById("catImage");
    const loading = document.getElementById("loading");
    const signupForm = document.getElementById("signupForm");

    // Fetch Random Cat Image
    fetchButton.addEventListener("click", async () => {
        loading.style.display = "block";
        catImage.style.display = "none";

        try {
            const response = await fetch(baseURL);
            const data = await response.json();

            if (data.length > 0) {
                catImage.src = data[0].url;
                catImage.style.display = "block";
            }
        } catch (error) {
            console.error("Error fetching the cat image:", error);
            loading.textContent = "Failed to load image. Try again.";
        } finally {
            loading.style.display = "none";
        }
    });


    
    // Validate Sign-up Form
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Clear previous error messages
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("passwordError").textContent = "";

    // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;

        // Validate Name
        if (name === "") {
            document.getElementById("nameError").textContent = "Name is required.";
            isValid = false;
        }

        // Validate Email 
        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (email === "" || !emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Enter a valid email.";
            isValid = false;
        }

        // Validate Password
        if (password.length < 8) {
            document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
            isValid = false;
        }

        // If all validations pass
        if (isValid) {
            alert("Sign-up successful!");
        }
    });
};
