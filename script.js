
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

// Dark mode
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('darkToggle').addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
    });

    // Sezione utenti
    const userData = [
        { email: "utente1@email.com", app: "UniFocus", piano: "Pro" },
        { email: "utente2@email.com", app: "EcoWise", piano: "Base" },
        { email: "utente3@email.com", app: "FixMe", piano: "Prova gratuita" },
    ];
    const badgeClass = { "Pro": "pro", "Base": "base", "Prova gratuita": "free" };
    let tableHTML = `<table>
        <thead><tr><th>Email</th><th>App</th><th>Piano</th><th>Azioni</th></tr></thead><tbody>`;
    userData.forEach(user => {
        tableHTML += `<tr>
            <td>${user.email}</td>
            <td>${user.app}</td>
            <td><span class="badge ${badgeClass[user.piano]}">${user.piano}</span></td>
            <td>
                <button onclick="alert('Upgrade ${user.email}')">Upgrade</button>
                <button onclick="alert('Reset AI ${user.email}')">Reset AI</button>
                <button onclick="alert('Sospendi ${user.email}')">Sospendi</button>
            </td></tr>`;
    });
    tableHTML += "</tbody></table>";
    document.getElementById("userTableContainer").innerHTML = tableHTML;

    // Grafico AI
    const ctx = document.getElementById('aiUsageChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['UniFocus', 'EcoWise', 'FixMe'],
                datasets: [{
                    label: 'Messaggi AI (Ultimi 7 giorni)',
                    data: [120, 75, 30],
                    backgroundColor: ['#007bff', '#28a745', '#6c757d']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
