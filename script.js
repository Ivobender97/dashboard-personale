
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
