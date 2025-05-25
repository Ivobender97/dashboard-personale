
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// Simulazione caricamento dati da "backend"
document.addEventListener("DOMContentLoaded", () => {
    const userData = [
        { email: "utente1@email.com", app: "UniFocus", piano: "Pro" },
        { email: "utente2@email.com", app: "EcoWise", piano: "Base" },
        { email: "utente3@email.com", app: "FixMe", piano: "Prova gratuita" },
    ];

    const badgeClass = {
        "Pro": "pro",
        "Base": "base",
        "Prova gratuita": "free"
    };

    let tableHTML = `
        <table>
            <thead><tr><th>Email</th><th>App</th><th>Piano</th><th>Azioni</th></tr></thead>
            <tbody>
    `;

    userData.forEach(user => {
        tableHTML += `
            <tr>
                <td>${user.email}</td>
                <td>${user.app}</td>
                <td><span class="badge ${badgeClass[user.piano]}">${user.piano}</span></td>
                <td>
                    <button onclick="alert('Upgrade ${user.email}')">Upgrade</button>
                    <button onclick="alert('Reset AI ${user.email}')">Reset AI</button>
                    <button onclick="alert('Sospendi ${user.email}')">Sospendi</button>
                </td>
            </tr>
        `;
    });

    tableHTML += "</tbody></table>";

    document.getElementById("userTableContainer").innerHTML = tableHTML;
});
