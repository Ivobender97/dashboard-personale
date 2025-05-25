
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


// Gestione generazione app AI
document.getElementById('newAppForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('appName').value.trim();
    const problem = document.getElementById('problem').value.trim();
    const target = document.getElementById('target').value.trim();
    const aiType = document.getElementById('aiType').value.trim();

    const output = `
        <div class="card">
            <h3>${name}</h3>
            <p><strong>Problema che risolve:</strong> ${problem}</p>
            <p><strong>Target utenti:</strong> ${target}</p>
            <p><strong>Tipo di AI:</strong> ${aiType}</p>
            <p><em>Strategia suggerita: inizia con un MVP basato su ${aiType}, testalo con un piccolo gruppo di ${target} e raccogli feedback entro 2 settimane.</em></p>
        </div>
    `;
    document.getElementById('generatedApp').innerHTML = output;
});
