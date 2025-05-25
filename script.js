
document.getElementById("toggleBtn").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("closed");
});

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
    if (sectionId === "aiUsage") setTimeout(() => disegnaGraficoAI(), 100);
}

let aiChart = null;
function disegnaGraficoAI() {
    const filtro = document.getElementById("filtro").value;
    const ctx = document.getElementById("aiChart").getContext("2d");
    const dataSets = {
        oggi: [320, 210, 150],
        "7giorni": [780, 690, 540],
        mese: [1200, 1100, 1050]
    };
    const selected = dataSets[filtro];

    if (aiChart) aiChart.destroy();
    aiChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["utente1", "utente3", "utente2"],
            datasets: [{
                label: "Messaggi AI",
                data: selected,
                backgroundColor: ["#4e73df", "#36b9cc", "#f6c23e"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function exportCSV() {
    const csv = "Email,Messaggi AI\nutente1@email.com,320\nutente3@email.com,210\nutente2@email.com,150";
    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ai_usage.csv";
    link.click();
}
