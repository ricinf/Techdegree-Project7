const lineChart = document.getElementById("traffic-chart");
const barChart = document.getElementById("daily-chart");
const doughnutChart = document.getElementById("mobile-chart");
const alertBar = document.getElementById("alert");
const bellIcon = document.getElementById("bell");
const bellIconContainer = document.querySelector(".bell-icon");
const dropdownContainer = document.querySelector(".bell-dropdown");
const bellNotification = document.querySelector(".bell-notification");
const sidebarNav = document.querySelector(".nav");
const sidebarNavLinks = document.querySelectorAll(".nav-link");
const trafficNav = document.querySelector(".traffic-nav");
const trafficNavLinks = document.querySelectorAll(".traffic-nav-link");
const userSearch = document.getElementById("user-field");
const userMessage = document.getElementById("message-field");
const sendButton = document.getElementById("send-button");
const emailToggle = document.getElementById("email-switch");
const profileToggle = document.getElementById("profile-switch");
const timezone = document.querySelector(".timezone");
let counter = 0;


// Alert Bar
alertBar.innerHTML = `<div class="alert-banner">
    <p><strong>Alert:</strong> &nbsp; You have <strong>6</strong> overdue tasks
    to complete</p>
    <p class="alert-banner-close">x</p>
  </div>`;

alertBar.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBar.style.display = "none";
  }
});
// Line Chart
const lineChartData = {
  Hourly: [50, 80, 120, 140, 300, 350, 280, 100, 400, 340, 400, 290],
  Daily: [75, 115, 175, 125, 225, 200, 100],
  Weekly: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
  Monthly: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 3500, 3000, 2500],
};

const lineChartLabels = {
  Hourly: [
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
  ],
  Daily: ["S", "M", "T", "W", "T", "F", "S"],
  Weekly: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
  Monthly: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

const chartDataset = [
  {
    backgroundColor: ["rgba(116, 119, 191, .3)"],
    borderColor: ["rgba(133, 132, 138, 1)"],
    borderWidth: 1,
    lineTension: 0,
    pointRadius: 5,
    pointBorderColor: "rgba(133, 132, 138, 1)",
    pointBackgroundColor: "rgb(255, 255, 255)",
  },
];

const myLineChart = new Chart(lineChart, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
    ],
    datasets: [
      {
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: ["rgba(116, 119, 191, .3)"],
        borderColor: ["rgba(133, 132, 138, 1)"],
        borderWidth: 1,
        lineTension: 0,
        pointRadius: 5,
        pointBorderColor: "rgba(116, 119, 191, 1)",
        pointBackgroundColor: "rgb(255, 255, 255)",
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 10,
        right: 20,
        top: 0,
        bottom: 0,
      },
    },
    animation: {
      duration: 0,
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawTicks: false,
          },
          ticks: {
            padding: 15,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawTicks: false,
          },
          ticks: {
            beginAtZero: true,
            padding: 15,
          },
        },
      ],
    },
  },
});

// Bar Chart

const myBarChart = new Chart(barChart, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: "#7477BF",
        borderWidth: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 10,
        right: 20,
        top: 0,
        bottom: 0,
      },
    },
    animation: {
      duration: 0,
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawTicks: false,
          },
          ticks: {
            padding: 15,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawTicks: false,
          },
          ticks: {
            stepSize: 50,
            padding: 15,
          },
        },
      ],
    },
  },
});

// Doughnut Chart

const myDoughnutChart = new Chart(doughnutChart, {
  type: "doughnut",
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [
      {
        data: [500, 550, 2000],
        backgroundColor: ["#51B6C8", "#78CF82", "#7477BF"],
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 0,
        right: 25,
        top: 0,
        bottom: 0,
      },
    },
    animation: {
      duration: 0,
    },
    legend: {
      position: "right",
      labels: {
        boxWidth: 20,
        padding: 15,
      },
    },
  },
});

// Local Storage
if (localStorage.length > 0) {
  let storageEmailValue = localStorage.getItem("Email-Notifications");
  let storageProfileValue = localStorage.getItem("Profile-Public");

  if (storageEmailValue) {
    if (storageEmailValue === "off") {
      emailToggle.checked = false;
    } else {
      emailToggle.checked = true;
    }
  }

  if (storageProfileValue) {
    if (storageProfileValue === "off") {
      profileToggle.checked = false;
    } else {
      profileToggle.checked = true;
    }
  }

  if (localStorage.getItem("Timezone")) {
    timezone.value = localStorage.getItem("Timezone");
  }
}

emailToggle.addEventListener("click", () => {
  if (emailToggle.checked) {
    localStorage.setItem("Email-Notifications", "on");
  } else {
    localStorage.setItem("Email-Notifications", "off");
  }
});

profileToggle.addEventListener("click", () => {
  if (profileToggle.checked) {
    localStorage.setItem("Profile-Public", "on");
  } else {
    localStorage.setItem("Profile-Public", "off");
  }
});

timezone.addEventListener("change", () => {
  localStorage.setItem("Timezone", timezone.value);
});

// Update Chart
function lineChartRender(chart, label, data) {
  chart.data.datasets.pop();
  chart.data.labels = label;
  chart.data.datasets.push(data);
  chart.update();
}

//Nav Event Listener
sidebarNav.addEventListener("click", (event) => {
  const elementClicked = event.target;
  if (elementClicked.parentElement.classList.contains("nav-link")) {
    sidebarNavLinks.forEach((element) => {
      if (element.classList.contains("nav-active")) {
        element.classList.remove("nav-active");
      }
    });

    elementClicked.parentElement.classList.add("nav-active");
  }
});

// Line Graph Hourly/Daily/Weekly/Monthly Event Listener
trafficNav.addEventListener("click", (event) => {
  trafficNavLinks.forEach((element) => {
    if (
      element.classList.contains("traffic-nav-link-active") &&
      event.target.classList.contains("traffic-nav-link")
    ) {
      element.classList.remove("traffic-nav-link-active");
    }

    if (event.target.innerHTML === element.innerHTML) {
      element.classList.add("traffic-nav-link-active");
      chartDataset[0].data = lineChartData[element.innerHTML];
      let label = lineChartLabels[element.innerHTML];

      lineChartRender(myLineChart, label, chartDataset[0]);
    }
  });
});

// Close Bell Content
bellIconContainer.addEventListener("click", (event) => {
  const elementClicked = event.target;
  if (elementClicked === bellIcon) {
    if (dropdownContainer.style.display === "") {
      dropdownContainer.style.display = "block";
    } else {
      dropdownContainer.style.display = "";
    }
  }

  if (elementClicked.classList.contains("close")) {
    const eventTargetPreviousElement = elementClicked.previousElementSibling;
    eventTargetPreviousElement.parentElement.remove();
    counter++;

    if (counter === 4) {
      dropdownContainer.style.boxShadow = "none";
      bellNotification.style.display = "none";
    }
  }
});

// Array for Autocomplete
const members = [
  "Victoria Chambers",
  "Dale Byrd",
  "Dawn Wood",
  "Dan Oliver",
  "Richard",
  "John",
  "Jonathan",
  "Alex",
  "Franklin",
  "Doug",
  "Jessica",
  "Amanda",
  "Tiffany",
];
// Autocomplete
$("#user-field").autocomplete({
  source: members,
});

// Alert if fields are empty and message successful.
sendButton.addEventListener("click", () => {
  if (userSearch.value === "" && userMessage.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (userSearch.value === "") {
    alert("Please fill out user field before sending");
  } else if (userMessage.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${userSearch.value}`);
    userSearch.value = "";
    userMessage.value = "";
  }
});
