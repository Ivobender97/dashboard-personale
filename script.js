
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");
    const toggle = document.getElementById("toggleSidebar");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.getAttribute("href").substring(1);

            sections.forEach(section => {
                section.style.display = section.id === target ? "block" : "none";
            });

            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    toggle.addEventListener("click", function () {
        document.querySelector("nav").classList.toggle("collapsed");
    });

    // Mostra la prima sezione di default
    sections.forEach((section, index) => {
        section.style.display = index === 0 ? "block" : "none";
    });
});
