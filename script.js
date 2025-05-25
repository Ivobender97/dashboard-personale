
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
        <h1>Gestione Utenti</h1>
        <table>
            <thead><tr><th>Email</th><th>App</th><th>Piano</th><th>Azioni</th></tr></thead>
            <tbody>
                <tr>
                    <td>utente1@email.com</td>
                    <td>UniFocus</td>
                    <td><span class="plan plan-pro">Pro</span></td>
                    <td>
                        <button class="action" onclick="alert('Upgrade per utente1')">Upgrade</button>
                        <button class="action" onclick="alert('Reset AI per utente1')">Reset AI</button>
                    </td>
                </tr>
                <tr>
                    <td>utente2@email.com</td>
                    <td>EcoWise</td>
                    <td><span class="plan plan-base">Base</span></td>
                    <td>
                        <button class="action" onclick="alert('Upgrade per utente2')">Upgrade</button>
                        <button class="action" onclick="alert('Reset AI per utente2')">Reset AI</button>
                    </td>
                </tr>
                <tr>
                    <td>utente3@email.com</td>
                    <td>FixMe</td>
                    <td><span class="plan plan-trial">Prova gratuita</span></td>
                    <td>
                        <button class="action" onclick="alert('Upgrade per utente3')">Upgrade</button>
                        <button class="action" onclick="alert('Reset AI per utente3')">Reset AI</button>
                    </td>
                </tr>
            </tbody>
        </table>
    `;
}
