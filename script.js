
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('collapsed');
}

function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

// Tema scuro
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('darkToggle').addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
    });
});
