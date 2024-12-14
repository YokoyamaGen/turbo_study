import { Controller } from "@hotwired/stimulus";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";

// Chart.jsプラグインを登録
// Chart.register(annotationPlugin);

export default class extends Controller {
  static targets = ["canvas"]; // HTMLでcanvasをターゲット指定

  connect() {
    console.log("test");
    const ctx = this.canvasTarget.getContext("2d"); // canvasターゲットを取得

    // チャートデータ
    const data = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Sample Data",
          data: [65, 59, 80, 81, 56],
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: false,
        },
      ],
    };

    // アノテーションの設定
    const annotation = {
      annotations: {
        line1: {
          type: "line",
          yMin: 70,
          yMax: 70,
          borderColor: "red",
          borderWidth: 2,
          label: {
            content: "Threshold",
            enabled: true,
            position: "end",
          },
        },
      },
    };

    // チャートの設定
    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        plugins: {
          annotation: annotation,
        },
      },
    };

    // チャートの描画
    new Chart(ctx, config);
  }
}
