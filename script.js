
function navigate(section) {
    document.getElementById("content").innerHTML = `<h1>${section.charAt(0).toUpperCase() + section.slice(1)}</h1><p>Contenuto della sezione ${section}</p>`;
}
document.getElementById("toggleSidebar").addEventListener("click", function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = (sidebar.style.display === "none") ? "block" : "none";
});
