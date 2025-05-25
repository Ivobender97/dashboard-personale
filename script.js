
function navigate(section) {
    const content = document.getElementById('content');
    if (section === 'home') {
        content.innerHTML = '<h1>Dashboard Panoramica</h1><p>Benvenuto nella tua area amministrativa.</p>';
    } else if (section === 'utenti') {
        renderUtenti();
    } else if (section === 'ai') {
        content.innerHTML = '<h1>Utilizzo AI</h1><p>Grafico e statistiche sui messaggi AI.</p>';
    } else if (section === 'tools') {
        content.innerHTML = '<h1>AI Intelligenti</h1><p>Accesso a strumenti avanzati come ricerca app e FixBot.</p>';
    } else if (section === 'export') {
        content.innerHTML = '<h1>Esporta Dati</h1><p>Scarica i dati degli utenti in CSV.</p>';
    } else if (section === 'settings') {
        content.innerHTML = '<h1>Impostazioni</h1><p>Gestisci sicurezza, debug e preferenze.</p>';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
}

function renderUtenti() {
    const content = document.getElementById('content');
    const utenti = [
        { email: "utente1@email.com", app: "UniFocus", piano: "Pro" },
        { email: "utente2@email.com", app: "EcoWise", piano: "Base" },
        { email: "utente3@email.com", app: "FixMe", piano: "Prova gratuita" }
    ];

    let html = '<h1>Gestione Utenti</h1>';
    html += '<table><thead><tr><th>Email</th><th>App</th><th>Piano</th><th>Azioni</th></tr></thead><tbody>';

    utenti.forEach(utente => {
        const className = 'plan-' + utente.piano.toLowerCase().replace(' ', '-');
        html += `<tr>
            <td>${utente.email}</td>
            <td>${utente.app}</td>
            <td><span class="plan ${className}">${utente.piano}</span></td>
            <td>
                <button class="action" onclick="alert('Upgrade per ${utente.email}')">Upgrade</button>
                <button class="action" onclick="alert('Reset AI per ${utente.email}')">Reset AI</button>
            </td>
        </tr>`;
    });

    html += '</tbody></table>';
    content.innerHTML = html;
}

function renderUtilizzoAI() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Utilizzo AI</h1>
        <label for="filtro">Filtro tempo: </label>
        <select id="filtro" onchange="aggiornaGraficoAI()">
            <option value="oggi">Oggi</option>
            <option value="7giorni">Ultimi 7 giorni</option>
            <option value="mese">Questo mese</option>
        </select>
        <canvas id="aiChart" width="600" height="300" style="margin-top: 20px;"></canvas>
        <h2 style="margin-top:30px;">Top utenti per uso AI</h2>
        <table>
            <thead><tr><th>Email</th><th>Messaggi AI</th></tr></thead>
            <tbody>
                <tr><td>utente1@email.com</td><td>320</td></tr>
                <tr><td>utente3@email.com</td><td>210</td></tr>
                <tr><td>utente2@email.com</td><td>150</td></tr>
            </tbody>
        </table>
        <button onclick="alert('CSV esportato!')" class="action" style="margin-top:20px;">Esporta CSV</button>
    `;

    disegnaGraficoAI('oggi');
}

function disegnaGraficoAI(filtro) {
    const ctx = document.getElementById('aiChart').getContext('2d');
    const dati = {
        oggi: [320, 150, 210],
        "7giorni": [780, 540, 690],
        mese: [1200, 1050, 1100]
    };
    const datiCorrenti = dati[filtro];

    if (window.aiChart) window.aiChart.destroy();
    window.aiChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['UniFocus', 'EcoWise', 'FixMe'],
            datasets: [{
                label: 'Messaggi AI',
                data: datiCorrenti,
                backgroundColor: ['#2B6CB0', '#38A169', '#A0AEC0']
            }]
        },
        options: {
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.raw;
                        }
                    }
                }
            }
        }
    });

    if (Math.max(...datiCorrenti) > 400) {
        alert("⚠️ Uno dei servizi ha superato i 400 messaggi AI!");
    }
}

function aggiornaGraficoAI() {
    const filtro = document.getElementById('filtro').value;
    disegnaGraficoAI(filtro);
}


function renderUtenti() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Utenti</h1>
        <p>Gestione utenti e piani attivi.</p>
        <ul>
            <li><strong>utente1@email.com</strong> — UniFocus — Piano: Pro</li>
            <li><strong>utente2@email.com</strong> — EcoWise — Piano: Base</li>
            <li><strong>utente3@email.com</strong> — FixMe — Piano: Prova gratuita</li>
        </ul>
    `;
}

function renderUtilizzoAI() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Utilizzo AI</h1>
        <p>Grafico e statistiche sui messaggi AI.</p>
        <canvas id="aiChart" width="600" height="300"></canvas>
        <label for="timeFilter">Filtro tempo:</label>
        <select id="timeFilter" onchange="updateChart()">
            <option>Oggi</option>
            <option>Ultimi 7 giorni</option>
            <option>Ultimi 30 giorni</option>
        </select>
        <h3>Top utenti per uso AI</h3>
        <table>
            <thead>
                <tr><th>Email</th><th>Messaggi AI</th></tr>
            </thead>
            <tbody>
                <tr><td>utente1@email.com</td><td>320</td></tr>
                <tr><td>utente3@email.com</td><td>210</td></tr>
                <tr><td>utente2@email.com</td><td>150</td></tr>
            </tbody>
        </table>
        <button onclick="exportCSV()">Esporta CSV</button>
    `;

    setTimeout(() => {
        const ctx = document.getElementById('aiChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['UniFocus', 'EcoWise', 'FixMe'],
                datasets: [{
                    label: 'Messaggi AI',
                    data: [320, 150, 210],
                    backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: true }
                }
            }
        });
    }, 100); // attende il DOM visibile
}

function navigate(view) {
    if (view === 'home') {
        document.getElementById('content').innerHTML = '<h1>Dashboard Panoramica</h1><p>Benvenuto nella tua area amministrativa.</p>';
    } else if (view === 'utenti') {
        renderUtenti();
    } else if (view === 'ai') {
        renderUtilizzoAI();
    } else if (view === 'tools') {
        document.getElementById('content').innerHTML = '<h1>AI Intelligenti</h1><p>Strumenti personali per assistenza e automazioni.</p>';
    } else if (view === 'export') {
        document.getElementById('content').innerHTML = '<h1>Esporta dati</h1><p>Download dei dati in formato CSV o PDF.</p>';
    } else if (view === 'settings') {
        document.getElementById('content').innerHTML = '<h1>Impostazioni</h1><p>Gestione accessi e sicurezza.</p>';
    }
}
