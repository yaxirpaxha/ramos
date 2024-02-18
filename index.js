window.addEventListener("scroll", () => {
  if (isVisible("transactionsCounter")) {
    startCounterWithAnimation("transactionsCounter", 43);
  }
  if (isVisible("visitorCounter")) {
    startCounterWithAnimation("visitorCounter", 43);
  }
  if (isVisible("visitorRateCounter")) {
    startCounterWithAnimation("visitorRateCounter", 43);
  }
  if (isVisible("visitStatsChart")) {
    loadChartVisitorRateGraph();
  }
  if (isVisible("insightsStatsChart")) {
    loadChartInsightsStatsGraph();
  }
});

const startCounterWithAnimation = (elementId, targetNumber) => {
  var counterElement = document.getElementById(elementId);
  var duration = 4000; // Duration of the animation in milliseconds
  var interval = duration / targetNumber;
  var currentNumber = 30;

  var counterInterval = setInterval(function () {
    counterElement.textContent = ++currentNumber;
    if (currentNumber >= targetNumber) {
      clearInterval(counterInterval);
    }
  }, interval);
};

const loadChartVisitorRateGraph = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep"],
    datasets: [
      {
        label: "Visit statistics",
        data: [100, 400, 1400, 1450, 1500, 1600, 1800, 1850, 2000],
        fill: false,
        borderColor: "rgb(255, 165, 0)",
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          display: false,
        },
      },
      plugins: {
        legend: false,
      },
    },
  };

  const ctx = document.getElementById("visitStatsChart").getContext("2d");
  const visitStatsChart = new Chart(ctx, config);
};

const loadChartInsightsStatsGraph = () => {
  const data = {
    labels: ["2021", "2020", "2019", "2018", "2017"],
    datasets: [
      {
        label: "insights",
        data: [100, 400, 100, 300, 200],
        backgroundColor: [
          "rgb(229 231 235)",
          "rgb(255, 165, 0)",
          "rgb(229 231 235)",
          "rgb(229 231 235)",
          "rgb(229 231 235)",
        ],
        borderWidth: 0,
        barPercentage: 0.5,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          display: false,
        },
      },
      plugins: {
        legend: false,
      },
    },
  };

  const ctx = document.getElementById("insightsStatsChart").getContext("2d");
  const insightsStatsChart = new Chart(ctx, config);
};

const isVisible = (elementId) => {
  var element = document.getElementById(elementId);
  var position = element.getBoundingClientRect();

  if (
    position.top >= 0 &&
    position.bottom <= window.innerHeight &&
    !element.classList.contains("already-animated")
  ) {
    element.classList.add("already-animated");
    return true;
  }
  return false;
};
