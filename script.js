
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('collapsed');
}

function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

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
    }, 500); // circa 50 step → 25 sec tempo medio simulato
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
