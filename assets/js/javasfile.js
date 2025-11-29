// FILTER DOWNLOADS
function filterDownloads(category, event) {
    let items = document.querySelectorAll(".download-card");
    let tabs = document.querySelectorAll(".tab");

    if (event) {
        tabs.forEach(t => t.classList.remove("active"));
        event.target.classList.add("active");
    }

    items.forEach(item => {
        if (category === "all" || item.dataset.category === category) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// SEARCH DOWNLOADS
document.addEventListener("DOMContentLoaded", () => {
    let searchInput = document.getElementById("downloadSearch");

    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            let value = this.value.toLowerCase();
            let items = document.querySelectorAll(".download-card");

            items.forEach(item => {
                let title = item.querySelector("h3").innerText.toLowerCase();
                item.style.display = title.includes(value) ? "block" : "none";
            });
        });
    }
});
