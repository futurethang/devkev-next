"use client";
import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
  useReportWebVitals((metric) => {
    const color =
      metric.rating === "good"
        ? "green"
        : metric.rating === "poor"
        ? "red"
        : "black";

    console.log(
      `%c${metric.name}: ${metric.value.toFixed(2)}, Rating: ${
        metric.rating
      }, Navigation Type: ${metric.navigationType}`,
      `color: ${color}`
    );
  });
}
