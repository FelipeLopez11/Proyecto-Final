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
                factorAhorro = 0.25;
                break;
            case "eolica":
                factorAhorro = 0.20;
                break;
            case "hidrogeno":
                factorAhorro = 0.10;
                break;
            default:
                factorAhorro = 0;
        }

        const ahorroEnergetico = consumo * factorAhorro;
        const reduccionCo2 = ahorroEnergetico * 0.18; // kg CO2
        const ahorroEconomico = ahorroEnergetico * 650; // pesos COP

        ahorroKwhSpan.textContent = ahorroEnergetico.toFixed(2);
        ahorroCo2Span.textContent = reduccionCo2.toFixed(2);
        ahorroCopSpan.textContent = ahorroEconomico.toLocaleString('es-CO');

        resultadosSection.classList.remove("hidden");
    });
});
