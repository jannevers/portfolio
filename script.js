// script.js
document.addEventListener("DOMContentLoaded", function() {
    const filter = document.getElementById("categoryFilter");
    const recipes = document.querySelectorAll(".recipe");

    filter.addEventListener("change", function() {
        const selectedCategory = filter.value;

        recipes.forEach(recipe => {
            // Wenn "all" ausgewählt ist, zeige alle Rezepte
            if (selectedCategory === "all") {
                recipe.style.display = "block";
            } else {
                // Überprüfen, ob das Rezept die entsprechende Kategorie-Klasse hat
                if (recipe.classList.contains(selectedCategory)) {
                    recipe.style.display = "block";
                } else {
                    recipe.style.display = "none";
                }
            }
        });
    });
});


// script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarMenu = document.querySelector(".navbar ul");

    menuToggle.addEventListener("click", () => {
        navbarMenu.classList.toggle("show");
    });
});

