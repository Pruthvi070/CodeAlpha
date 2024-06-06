document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter_buttons button");
    const filterableCards = document.querySelectorAll(".filterable_cards .card");

    // Define the filter cards function
    const filterCards = e => {
        const activeButton = document.querySelector(".filter_buttons .active");
        if (activeButton) {
            activeButton.classList.remove("active");
        }
        e.target.classList.add("active");

        // Iterate over each filterable card
        filterableCards.forEach(card => {
            card.classList.add("hide");
            // Check if the card matches the selected filter or "all" is selected
            if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
                card.classList.remove("hide");
            }
        });
    };

    // Add click event listener to each filter button
    filterButtons.forEach(button => button.addEventListener("click", filterCards));
});
