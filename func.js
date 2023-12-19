// Wait for the DOMContentLoaded event before executing the code inside the function
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'skill' followed by 'i' tags inside
    const icons = document.querySelectorAll('.skill i');
    // Select all elements with the class 'content' followed by 'p' tags inside
    const contentItems = document.querySelectorAll('.content p');

    // For each icon selected
    icons.forEach((icon, index) => {
        // Add a click event listener to each icon
        icon.addEventListener('click', function() {
            // Hide all content items initially
            contentItems.forEach(item => item.style.display = 'none');

            // Show the corresponding content based on the index of the clicked icon
            contentItems[index].style.display = 'block';
        });
    });
});
