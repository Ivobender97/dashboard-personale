
// === TOGGLE SIDEBAR ===
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    sidebar.classList.toggle('collapsed');
    setTimeout(() => {
        if (window.Chart) {
            Object.values(Chart.instances || {}).forEach(instance => {
                instance.resize();
            });
        }
    }, 310); // tempo per completare l'animazione
    main.classList.toggle('collapsed');
}

// === SHOW SECTIONS ===
function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    const selected = document.getElementById(id);
    if (selected) selected.classList.add('active');
}

// === DARK MODE TOGGLE ===
document.addEventListener("DOMContentLoaded", () => {
    const darkToggle = document.getElementById('darkToggle');
    if (darkToggle) {
        darkToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode', this.checked);
        });
    }

    // === TABELLA UTENTI ===
    const userData = [
        { email: "utente1@email.com", app: "UniFocus", piano: "Pro" },
        { email: "utente2@email.com", app: "EcoWise", piano: "Base" },
        { email: "utente3@email.com", app: "FixMe", piano: "Prova gratuita" }
    ];
    const badgeClass = { "Pro": "pro", "Base": "base", "Prova gratuita": "free" };
    const userContainer = document.getElementById("userTableContainer");
    if (userContainer) {
        let tableHTML = "<table><thead><tr><th>Email</th><th>App</th><th>Piano</th><th>Azioni</th></tr></thead><tbody>";
        userData.forEach(user => {
            tableHTML += `<tr>
                <td>${user.email}</td>
                <td>${user.app}</td>
                <td><span class="badge ${badgeClass[user.piano]}">${user.piano}</span></td>
                <td>
                    <button onclick="alert('Upgrade ${user.email}')">Upgrade</button>
                    <button onclick="alert('Reset AI ${user.email}')">Reset AI</button>
                    <button onclick="alert('Sospendi ${user.email}')">Sospendi</button>
                </td>
            </tr>`;
        });
        tableHTML += "</tbody></table>";
        userContainer.innerHTML = tableHTML;
    }

    // === GRAFICO UTILIZZO AI ===
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
                    legend: { display: true }
                },
                scales: { y: { beginAtZero: true } }
            }
        });
    }

    // === CREA APP AI (manuale) ===
    const newAppForm = document.getElementById("newAppForm");
    if (newAppForm) {
        newAppForm.addEventListener('submit', function(e) {
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
                </div>`;
            document.getElementById('generatedApp').innerHTML = output;
        });
    }
});

// === RICERCA AI LUNGA ===
function startAISearch() {
    const progress = document.getElementById('progressBar');
    const container = document.getElementById('progressContainer');
    const status = document.getElementById('statusMessage');
    const results = document.getElementById('aiResults');
    container.style.display = 'block';
    results.innerHTML = '';
    let percent = 0;
    const messages = [
        "Analisi trend globali in corso...",
        "Esame dei modelli AI attuali...",
        "Verifica validità dei modelli di business...",
        "Controllo app esistenti simili...",
        "Valutazione potenziale di mercato...",
        "Finalizzazione proposta app AI..."
    ];
    let msgIndex = 0;
    const interval = setInterval(() => {
        percent += Math.floor(Math.random() * 3) + 1;
        if (percent > 100) percent = 100;
        progress.value = percent;
        if (percent >= (msgIndex + 1) * 15 && msgIndex < messages.length) {
            status.textContent = messages[msgIndex];
            msgIndex++;
        }
        if (percent >= 100) {
            clearInterval(interval);
            status.textContent = "Ricerca completata!";
            showAIResults();
        }
    }, 500);
}

function showAIResults() {
    const results = document.getElementById('aiResults');
    results.innerHTML = `
        <div class="card">
            <h3>MindMatch AI</h3>
            <p><strong>Target:</strong> HR managers in tech companies</p>
            <p><strong>Problem:</strong> Difficult to match job candidates with team dynamics</p>
            <p><strong>AI Used:</strong> Personality profiling + skill mapping</p>
            <p><strong>Monetization:</strong> Subscription + API access</p>
            <p><strong>Positioning:</strong> No direct competitor with behavioral AI</p>
            <p style="color:green;"><strong>✅ Recommended: High market demand + low competition</strong></p>
        </div>
        <div class="card">
            <h3>EcoRoute Planner</h3>
            <p><strong>Target:</strong> Delivery companies</p>
            <p><strong>Problem:</strong> Inefficient routes cause fuel waste</p>
            <p><strong>AI Used:</strong> Real-time traffic + emissions optimizer</p>
            <p><strong>Monetization:</strong> Per vehicle license/month</p>
            <p><strong>Positioning:</strong> GreenTech meets logistics</p>
        </div>
        <div class="card">
            <h3>StudyBuddy Vision</h3>
            <p><strong>Target:</strong> High school & university students</p>
            <p><strong>Problem:</strong> Struggles with conceptual diagrams</p>
            <p><strong>AI Used:</strong> Image-to-concept recognition + spaced repetition</p>
            <p><strong>Monetization:</strong> Freemium with Pro features</p>
            <p><strong>Positioning:</strong> Visual-first learning AI</p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const pieConfigs = [
        {
            id: "chartUniFocus",
            data: [100, 600, 550],
            labels: ["Free", "Base", "Pro"]
        },
        {
            id: "chartEcoWise",
            data: [120, 480, 380],
            labels: ["Free", "Base", "Pro"]
        },
        {
            id: "chartFixMe",
            data: [200, 220, 100],
            labels: ["Free", "Base", "Pro"]
        }
    ];
    pieConfigs.forEach(cfg => {
        const el = document.getElementById(cfg.id);
        if (el) {
            new Chart(el, {
                type: "pie",
                data: {
                    labels: cfg.labels,
                    datasets: [{
                        data: cfg.data,
                        backgroundColor: ["#6c757d", "#28a745", "#007bff"]
                    }]
                },
                options: {
                    plugins: {
                        legend: { position: 'bottom' }
                    }
                }
            });
        }
    });
});
