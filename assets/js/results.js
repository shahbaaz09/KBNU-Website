/* ==========================================================
      RESULTS PAGE INTERACTIVITY (UG / PG / PhD / Entrance)
   ========================================================== */

// ----------- TOP TABS (UG / PG / PHD / ENTRANCE) -----------
document.querySelectorAll(".tile").forEach(tile => {
    tile.addEventListener("click", function() {
        const panelId = this.getAttribute("data-target");

        // Hide all panels
        document.querySelectorAll(".panel").forEach(p => p.style.display = "none");

        // Remove active from all tiles
        document.querySelectorAll(".tile").forEach(t => t.classList.remove("active-tile"));

        // Show selected panel
        document.getElementById(panelId).style.display = "block";
        this.classList.add("active-tile");

        window.scrollTo({ top: 200, behavior: "smooth" });
    });
});

// ----------- FACULTY COLLAPSIBLE EXPAND BOXES -----------
document.querySelectorAll(".faculty-card").forEach(card => {
    card.addEventListener("click", function () {
        const inner = this.querySelector(".inner");

        if (!inner) return; // For PHD simple list (no inner box)

        // Close all inner boxes except the clicked one
        document.querySelectorAll(".inner").forEach(i => {
            if (i !== inner) i.style.display = "none";
        });

        // Toggle selected one
        inner.style.display = inner.style.display === "block" ? "none" : "block";
    });
});

// --------- Entrance Results (Only One Box) ---------
const entranceTile = document.querySelector(".entrance-btn");
if (entranceTile) {
    entranceTile.addEventListener("click", () => {
        document.querySelectorAll(".panel").forEach(p => p.style.display = "none");
        document.getElementById("entrance-panel").style.display = "block";
        window.scrollTo({ top: 200, behavior: "smooth" });
    });
}
