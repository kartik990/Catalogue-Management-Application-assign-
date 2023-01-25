import React from "react";
import { Chart } from "react-google-charts";
import "./chartModel.css";

export default function ChartModel({ setChart, products, categories }) {
  //creating a new object to store intinal number of products for each category
  const obj = { Category: "number of products" };
  for (const key of categories) {
    obj[key] = 0;
  }

  //updating number of products in each category in oject
  products.forEach((element) => {
    obj[element.category]++;
  });

  //putting object in data as an array to pass into pie chart
  const data = Object.entries(obj);

  //Pre-defined chart properties
  const options = {
    title: "Products in each category",
    pieHole: 0.2,
    is3D: true,
  };

  return (
    <div className="chartModel">
      <div className="chartContainer">
        <div className="closeChart" onClick={() => setChart(false)}>
          X
        </div>
        <Chart
          chartType="PieChart"
          width="100%"
          height="100%"
          className="piechart"
          data={data}
          options={options}
        />
        <div className="chart Details">
          <div className="a"></div>
        </div>
      </div>
    </div>
  );
}
