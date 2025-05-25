
let aiChart = null;

function navigate(view) {
    const content = document.getElementById('content');
    if (view === 'home') {
        content.innerHTML = '<h1>Dashboard Panoramica</h1><p>Benvenuto nella tua area amministrativa.</p>';
    } else if (view === 'utenti') {
        renderUtenti();
    } else if (view === 'ai') {
        renderUtilizzoAI();
    } else if (view === 'tools') {
        content.innerHTML = '<h1>AI Intelligenti</h1><p>Strumenti avanzati per il controllo e l’analisi.</p>';
    } else if (view === 'export') {
        content.innerHTML = '<h1>Esporta dati</h1><p>Download CSV utenti, report mensili.</p>';
    } else if (view === 'settings') {
        content.innerHTML = '<h1>Impostazioni</h1><p>Accesso, sicurezza, modalità debug.</p>';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
}

function renderUtenti() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Utenti</h1>
        <p>Gestione utenti e piani attivi.</p>
        <table>
            <thead><tr><th>Email</th><th>App</th><th>Piano</th><th>Azioni</th></tr></thead>
            <tbody>
                <tr>
                    <td>utente1@email.com</td>
                    <td>UniFocus</td>
                    <td><span class="plan plan-pro">Pro</span></td>
                    <td>
                        <button class="action">Upgrade</button>
                        <button class="action">Reset AI</button>
                    </td>
                </tr>
                <tr>
                    <td>utente2@email.com</td>
                    <td>EcoWise</td>
                    <td><span class="plan plan-base">Base</span></td>
                    <td>
                        <button class="action">Upgrade</button>
                        <button class="action">Reset AI</button>
                    </td>
                </tr>
                <tr>
                    <td>utente3@email.com</td>
                    <td>FixMe</td>
                    <td><span class="plan plan-trial">Prova gratuita</span></td>
                    <td>
                        <button class="action">Upgrade</button>
                        <button class="action">Reset AI</button>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}

function renderUtilizzoAI() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Utilizzo AI</h1>
        <label for="filtro">Filtro tempo:</label>
        <select id="filtro" onchange="disegnaGraficoAI()">
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

    setTimeout(() => {
        disegnaGraficoAI();
    }, 100);
}

function disegnaGraficoAI() {
    const filtro = document.getElementById("filtro").value;
    const ctx = document.getElementById('aiChart').getContext('2d');

    const dataSets = {
        oggi: [320, 150, 210],
        "7giorni": [780, 540, 690],
        mese: [1200, 1050, 1100]
    };

    const selected = dataSets[filtro];

    if (aiChart) aiChart.destroy();

    aiChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['UniFocus', 'EcoWise', 'FixMe'],
            datasets: [{
                label: 'Messaggi AI',
                data: selected,
                backgroundColor: ['#2B6CB0', '#38A169', '#A0AEC0']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });

    if (Math.max(...selected) > 400) {
        alert("⚠️ Uno dei servizi ha superato i 400 messaggi AI!");
    }
}
