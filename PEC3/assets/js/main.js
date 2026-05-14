const steps = document.querySelectorAll(".step");
const chartTitle = document.getElementById("chart-title");
const chartCaption = document.getElementById("chart-caption");
const chartFrame = document.getElementById("chart-frame");

const chartTexts = {
    donut_cancelaciones: {
        title: "Reservas que desaparecen",
        caption: "El gráfico compara las reservas que siguieron adelante con las que se cancelaron.",
        file: "chartsv2/donut_cancelaciones.html"
    },
    precio_mes: {
        title: "Precio medio por habitación",
        caption: "La línea muestra cómo cambia el precio medio por habitación según el mes de llegada.",
        file: "chartsv2/precio_mes.html"
    },
    cancelacion_hotel: {
        title: "Cancelaciones por tipo de hotel",
        caption: "Las barras comparan qué tipo de hotel pierde más reservas antes de la llegada.",
        file: "chartsv2/cancelacion_hotel.html"
    },
    antelacion_cancelacion: {
        title: "Antelación de la reserva",
        caption: "El violin plot muestra cómo se distribuyen los días entre la reserva y la llegada.",
        file: "chartsv2/antelacion_cancelacion.html"
    },
    bubble_paises: {
        title: "Países: valor y riesgo",
        caption: "Cada burbuja representa un país: derecha = más precio medio, arriba = más cancelaciones y tamaño = más reservas.",
        file: "chartsv2/bubble_paises.html"
    }
};

function activateStep(step) {
    const chartName = step.dataset.chart;
    const chart = chartTexts[chartName];

    if (!chart) return;

    steps.forEach(s => s.classList.remove("is-active"));
    step.classList.add("is-active");

    chartTitle.textContent = chart.title;
    chartCaption.textContent = chart.caption;
    chartFrame.src = chart.file;
}

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activateStep(entry.target);
            }
        });
    },
    { threshold: 0.45 }
);

steps.forEach(step => observer.observe(step));

activateStep(steps[0]);