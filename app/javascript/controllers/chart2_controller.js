import { Controller } from "@hotwired/stimulus";
import {
  Chart,
  BarController,
  BarElement,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

// import Chart from "chart.js/auto";
// import annotationPlugin from "chartjs-plugin-annotation";

// import Chart from "chart.js";
// import annotationPlugin from "chartjs-plugin-annotation";
// Chart.register(annotationPlugin);

// Connects to data-controller="chart2"
export default class extends Controller {
  static targets = ["canvas"];

  connect() {
    Chart.register(
      annotationPlugin,
      BarController,
      BarElement,
      LinearScale,
      LineController,
      LineElement,
      PointElement,
      CategoryScale
    );

    // Chart.register(annotationPlugin);

    const ctx = this.canvasTarget.getContext("2d");

    this.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            fill: false,
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },
      options: {
        plugins: {
          annotation: {
            annotations: {
              line1: {
                type: "line",
                yMin: 60,
                yMax: 60,
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 2,
              },
            },
          },
        },
        // scales: {
        //   y: {
        //     beginAtZero: true,
        //   },
        // },
      },
    });
  }

  // チャートを破棄する必要がある場合のメソッド例
  // disconnect() {
  //   if (this.chart) {
  //     this.chart.destroy();
  //   }
  // }
}
