
// Mostra il contenuto della sezione Dashboard
function renderDashboard() {
    document.getElementById('content').innerHTML = `
        <h1>Dashboard Panoramica</h1>
        <p>Benvenuto nella tua area amministrativa.</p>
    `;
}

// Sezione Utenti con colori personalizzati
function renderUtenti() {
    document.getElementById('content').innerHTML = `
        <h1>Utenti</h1>
        <p>Gestione utenti e piani attivi.</p>
        <ul>
            <li><strong style="color:#4e73df;">utente1@email.com</strong> — UniFocus — <span style="color:#1cc88a;">Piano: Pro</span></li>
            <li><strong style="color:#4e73df;">utente2@email.com</strong> — EcoWise — <span style="color:#f6c23e;">Piano: Base</span></li>
            <li><strong style="color:#4e73df;">utente3@email.com</strong> — FixMe — <span style="color:#e74a3b;">Piano: Prova gratuita</span></li>
        </ul>
    `;
}

// Sezione Utilizzo AI con filtro e grafico Chart.js
function renderUtilizzoAI() {
    document.getElementById('content').innerHTML = `
        <h1>Utilizzo AI</h1>
        <p>Grafico e statistiche sui messaggi AI.</p>
        <label for="timeFilter">Filtro tempo:</label>
        <select id="timeFilter" onchange="updateChart()">
            <option>Oggi</option>
            <option>Ultimi 7 giorni</option>
            <option>Ultimi 30 giorni</option>
        </select>
        <canvas id="aiChart" width="400" height="150"></canvas>
        <h3>Top utenti per uso AI</h3>
        <table>
            <tr><th>Email</th><th>Messaggi AI</th></tr>
            <tr><td>utente1@email.com</td><td>320</td></tr>
            <tr><td>utente3@email.com</td><td>210</td></tr>
            <tr><td>utente2@email.com</td><td>150</td></tr>
        </table>
        <button onclick="exportCSV()">Esporta CSV</button>
    `;
    renderChart();
}

function renderChart() {
    const ctx = document.getElementById('aiChart').getContext('2d');
    if (window.aiChart) window.aiChart.destroy();
    window.aiChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['utente1', 'utente3', 'utente2'],
            datasets: [{
                label: 'Messaggi AI',
                data: [320, 210, 150],
                backgroundColor: ['#4e73df', '#36b9cc', '#f6c23e']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function exportCSV() {
    const csv = "Email,Messaggi AI\nutente1@email.com,320\nutente3@email.com,210\nutente2@email.com,150";
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ai_usage.csv";
    link.click();
}

// Placeholder per sezioni successive
function renderAIIntelligenti() {
    document.getElementById('content').innerHTML = `
        <h1>AI Intelligenti</h1>
        <p>Strumenti avanzati per il controllo e l’analisi.</p>
    `;
}

function renderEsportaDati() {
    document.getElementById('content').innerHTML = `
        <h1>Esporta dati</h1>
        <p>Download CSV utenti, report mensili.</p>
    `;
}

function renderImpostazioni() {
    document.getElementById('content').innerHTML = `
        <h1>Impostazioni</h1>
        <p>Accesso, sicurezza, modalità debug.</p>
    `;
}
