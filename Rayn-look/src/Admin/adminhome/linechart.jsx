import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const BasicLineChart = () => {
  // Function to generate an array of dates starting from today till 9 days later
  const generateDateArray = () => {
    const today = new Date();
    const dateArray = Array.from({ length: 9 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);
      return date;
    });
    return dateArray;
  };

  const dateArray = generateDateArray();

  return (
    <LineChart
      xAxis={[{ key: 'date', type: 'time', data: dateArray }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5, 3, 6, 7], 
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
