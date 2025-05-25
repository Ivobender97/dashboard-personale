
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '50px') {
        sidebar.style.width = '200px';
    } else {
        sidebar.style.width = '50px';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    showSection('dashboard');

    const ctx = document.getElementById('aiChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['UniFocus', 'EcoWise', 'FixMe'],
            datasets: [{
                label: 'Messaggi AI',
                data: [320, 150, 210],
                backgroundColor: ['#2b6cb0', '#38a169', '#718096']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
});
