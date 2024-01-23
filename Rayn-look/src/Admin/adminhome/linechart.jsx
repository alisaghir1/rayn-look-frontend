import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useState, useEffect } from "react";
import axios from "axios";

const BasicLineChart = () => {
  const [orderData, setOrderData] = useState([]);
  
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/Order");
        setOrderData(response.data);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };

    fetchOrderData();
  }, []);

  // Function to generate an array of dates from the order data
  const generateDateArray = () => {
    const today = new Date();
    const dateArray = Array.from({ length: 9 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);
      return date.toISOString().split('T')[0]; // Use ISO string without time for comparison
    });
    return dateArray;
  };

  // Function to generate series data based on order dates
  const generateSeriesData = (dateArray, orderData) => {
    const seriesData = dateArray.map(date => {
      const ordersOnDate = orderData.filter(order => order.date.split('T')[0] === date);
      return ordersOnDate.length;
    });
    return seriesData;
  };

  const dateArray = generateDateArray();
  const seriesData = generateSeriesData(dateArray, orderData);

  return (
    <LineChart
      xAxis={[{ key: 'date', type: 'time', data: dateArray }]}
      series={[
        {
          data: seriesData, 
        },
      ]}
      width={1300}
      height={400}
      options={{
        xAxisKey: 'date',
        xAxisTicks: { maxTicks: 9 },
      }}
    />
  );
}

export default BasicLineChart;