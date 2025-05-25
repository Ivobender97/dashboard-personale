
let aiUsageChart = null;

const datasets = {
    week: {
        labels: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'],
        UniFocus: [120, 135, 160, 175, 180, 140, 130],
        EcoWise:   [85, 100, 95, 110, 120, 105, 90],
        FixMe:     [40, 50, 45, 60, 55, 48, 42]
    },
    month: {
        labels: Array.from({length: 30}, (_, i) => `Giorno ${i+1}`),
        UniFocus: Array.from({length: 30}, () => Math.floor(Math.random() * 200) + 100),
        EcoWise: Array.from({length: 30}, () => Math.floor(Math.random() * 150) + 80),
        FixMe: Array.from({length: 30}, () => Math.floor(Math.random() * 100) + 30)
    },
    quarter: {
        labels: ['Gen', 'Feb', 'Mar'],
        UniFocus: [4300, 5100, 4900],
        EcoWise: [3100, 3900, 3700],
        FixMe: [1500, 2100, 1950]
    },
    year: {
        labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
        UniFocus: [4300, 5100, 4900, 5200, 6100, 5800, 6000, 5900, 6200, 7000, 6800, 7200],
        EcoWise: [3100, 3900, 3700, 4200, 4400, 4600, 4300, 4500, 4700, 5000, 4900, 5100],
        FixMe: [1500, 2100, 1950, 2000, 2300, 2250, 2400, 2600, 2700, 2800, 2950, 3000]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    switchChart('week');
});


function updateChartApp() {
    const selectedApp = document.getElementById("appSelect").value;
    switchChart(currentRange, selectedApp);
}

let currentRange = 'week';

function switchChart(range, app = 'all') {
    currentRange = range;
    const ctx = document.getElementById('aiUsageChart').getContext('2d');
    if (aiUsageChart) aiUsageChart.destroy();

    const data = datasets[range];
    const chartData = [];
    const chartLabels = data.labels;

    if (app === 'all') {
        chartData.push(
            {
                label: 'UniFocus',
                data: data.UniFocus,
                borderColor: '#007bff',
                backgroundColor: 'rgba(0,123,255,0.1)',
                fill: true
            },
            {
                label: 'EcoWise',
                data: data.EcoWise,
                borderColor: '#28a745',
                backgroundColor: 'rgba(40,167,69,0.1)',
                fill: true
            },
            {
                label: 'FixMe',
                data: data.FixMe,
                borderColor: '#6c757d',
                backgroundColor: 'rgba(108,117,125,0.1)',
                fill: true
            }
        );
    } else {
        const colors = {
            UniFocus: '#007bff',
            EcoWise: '#28a745',
            FixMe: '#6c757d'
        };
        chartData.push({
            label: app,
            data: data[app],
            borderColor: colors[app],
            backgroundColor: colors[app].replace('1)', '0.1)').replace(')', ', 0.1)'),
            fill: true
        });
    }

    aiUsageChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: chartData
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function exportCSV() {
    const app = document.getElementById("appSelect").value;
    const range = currentRange;
    const data = datasets[range];
    const labels = data.labels;
    let rows = [["Giorno", "UniFocus", "EcoWise", "FixMe"]];

    labels.forEach((label, i) => {
        rows.push([
            label,
            data.UniFocus[i],
            data.EcoWise[i],
            data.FixMe[i]
        ]);
    });

    let csv = rows.map(r => r.join(",")).join("\n");
    const blob = new Blob([csv], {type: "text/csv"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "utilizzo_ai.csv";
    a.click();
    URL.revokeObjectURL(url);
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

// Sidebar toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    sidebar.classList.toggle('collapsed');
    main.classList.toggle('collapsed');
    setTimeout(() => {
        if (window.Chart) {
            Object.values(Chart.instances || {}).forEach(instance => {
                instance.resize();
            });
        }
    }, 310);
}

// Navigation
function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    const selected = document.getElementById(id);
    if (selected) selected.classList.add('active');
}


function addNotification(text, type = "info") {
    const ul = document.getElementById("notificationList");
    const li = document.createElement("li");
    li.textContent = text;
    if (type === "warning") li.style.color = "darkorange";
    if (type === "success") li.style.color = "green";
    if (type === "error") li.style.color = "red";
    ul.prepend(li);
}

// Evento: CSV esportato
function exportCSV() {
    const app = document.getElementById("appSelect").value;
    const range = currentRange;
    const data = datasets[range];
    const labels = data.labels;
    let rows = [["Giorno", "UniFocus", "EcoWise", "FixMe"]];

    labels.forEach((label, i) => {
        rows.push([
            label,
            data.UniFocus[i],
            data.EcoWise[i],
            data.FixMe[i]
        ]);
    });

    let csv = rows.map(r => r.join(",")).join("\n");
    const blob = new Blob([csv], {type: "text/csv"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "utilizzo_ai.csv";
    a.click();
    URL.revokeObjectURL(url);
    addNotification("📤 CSV dei dati AI esportato con successo", "success");
}

// Evento: verifica uso AI
document.addEventListener("DOMContentLoaded", () => {
    const maxToday = datasets.week.UniFocus[6]; // Domenica
    if (maxToday > 150) {
        addNotification("⚠️ UniFocus ha superato 150 messaggi AI oggi", "warning");
    }
    const fixMeToday = datasets.week.FixMe[6];
    if (fixMeToday < 10) {
        addNotification("🔕 FixMe ha meno di 10 interazioni AI oggi", "error");
    }
});

// Evento: task completato (simulato)
document.addEventListener("DOMContentLoaded", () => {
    addNotification("✅ Task 'Test export CSV da grafici' completato", "success");
});


// Salvataggio locale delle notifiche
function saveNotification(text, type) {
    const stored = JSON.parse(localStorage.getItem("notifications")) || [];
    stored.unshift({ text, type });
    localStorage.setItem("notifications", JSON.stringify(stored));
}

function addNotification(text, type = "info") {
    const ul = document.getElementById("notificationList");
    const li = document.createElement("li");
    li.textContent = text;
    if (type === "warning") li.style.color = "darkorange";
    if (type === "success") li.style.color = "green";
    if (type === "error") li.style.color = "red";
    ul.prepend(li);
    saveNotification(text, type);
}

document.addEventListener("DOMContentLoaded", () => {
    const saved = JSON.parse(localStorage.getItem("notifications")) || [];
    saved.forEach(n => addNotification(n.text, n.type));
});


function updateCredentials(e) {
    e.preventDefault();
    const email = document.getElementById("userEmail").value;
    const pwd = document.getElementById("newPassword").value;
    localStorage.setItem("loginEmail", email);
    if (pwd) localStorage.setItem("loginPassword", pwd);
    document.getElementById("credsStatus").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("loginEmail")) {
        document.getElementById("userEmail").value = localStorage.getItem("loginEmail");
    }
});
