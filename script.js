
function navigate(section) {
    const content = document.getElementById('content');
    if (section === 'home') {
        content.innerHTML = '<h1>Dashboard Panoramica</h1><p>Benvenuto nella tua area amministrativa.</p>';
    } else if (section === 'utenti') {
        content.innerHTML = '<h1>Gestione Utenti</h1><p>Visualizza e gestisci gli utenti registrati.</p>';
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
