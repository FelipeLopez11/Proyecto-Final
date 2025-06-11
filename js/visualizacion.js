document.addEventListener('DOMContentLoaded', function () {

    const calcularBtn = document.getElementById('calcular-btn');
    const consumoInput = document.getElementById('consumo');
    const tipoEnergiaSelect = document.getElementById('tipo-energia');
    const resultadosSection = document.getElementById('resultados');
    const ahorroKwhSpan = document.getElementById('ahorro-kwh');
    const ahorroCo2Span = document.getElementById('ahorro-co2');
    const ahorroCopSpan = document.getElementById('ahorro-cop');

    calcularBtn.addEventListener('click', function () {
        const consumo = parseFloat(consumoInput.value);
        const tipoEnergia = tipoEnergiaSelect.value;

        if (isNaN(consumo) || consumo <= 0) {
            alert("Ingrese un consumo mayor a 0");
            return;
        }

        let factorAhorro;
        switch (tipoEnergia) {
            case "solar":
                factorAhorro = 0.30; // Ahorro estimado para solar en Colombia
                break;
            case "eolica":
                factorAhorro = 0.22; // Ahorro estimado para eólica en Colombia
                break;
            case "hidrogeno":
                factorAhorro = 0.12; // Ahorro estimado para hidrógeno verde en Colombia
                break;
            default:
                factorAhorro = 0;
        }

        const ahorroEnergetico = consumo * factorAhorro;
        const reduccionCo2 = ahorroEnergetico * 0.19; // kg CO2 por kWh promedio en Colombia
        const ahorroEconomico = ahorroEnergetico * 720; // Precio promedio por kWh en COP (estimado para 2025)

        ahorroKwhSpan.textContent = ahorroEnergetico.toFixed(2);
        ahorroCo2Span.textContent = reduccionCo2.toFixed(2);
        ahorroCopSpan.textContent = ahorroEconomico.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

        resultadosSection.classList.remove("hidden");
    });

    const ctx = document.getElementById('graficoComparativo').getContext('2d');
    const graficoComparativo = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Hidroeléctrica', 'Solar', 'Eólica', 'Fósil', 'Hidrógeno verde'],
            datasets: [
                {
                    label: '2020',
                    data: [63, 1.5, 1.5, 34, 0],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: '2025 (estimado)',
                    data: [58, 4, 8, 30, 0.1],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Comparativa de generación eléctrica renovable en Colombia (%)'
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 70,
                    title: {
                        display: true,
                        text: 'Participación (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Fuente de energía'
                    }
                }
            }
        }
    });
});

