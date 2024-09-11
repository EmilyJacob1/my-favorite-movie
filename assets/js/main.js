function showMoreplot() {
    var moreText = document.getElementById("morePlot");
    var btnText = document.getElementById("morePlotBtn");

    if (moreText.style.display === "none") {
        btnText.innerHTML = "read less";
        moreText.style.display = "inline"; // Show the element
        setTimeout(function() {
            moreText.classList.add("show"); // Add the class to trigger the fade-in
        }, 10); // Small delay to allow display to apply
    } else {
        btnText.innerHTML = "read more";
        moreText.classList.remove("show"); // Remove the class for fade-out
        setTimeout(function() {
            moreText.style.display = "none"; // Hide after the fade-out transition
        }, 500); // Wait for the fade-out to finish before hiding
    }
}
