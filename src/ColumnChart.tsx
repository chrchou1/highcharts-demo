import React, { useRef } from 'react';
import Highcharts, { Chart } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { DataPoint } from './DataPoint';

Highcharts.setOptions({
  colors: [
    '#00BFF8',
    '#008733',
    '#FFB618',
    '#FF4A44',
    '#64E572',
    '#FF9655',
    '#FFF263',
    '#6AF9C4',
  ],
});

export interface ColumnChartProps {
  title: string;
  totalLabel: string;
  data: Array<DataPoint>;
}

export const ColumnChart = ({
  title,
  totalLabel,
  data,
}: ColumnChartProps) => {
  const chartRef = useRef<{
    chart: Chart;
    container: React.RefObject<HTMLDivElement>;
  }>(null);

  const chartOptions = {
    chart: {
      type: 'column',
      style: {
        fontFamily: 'Overpass',
      },
    },
    plotOptions: {
      column: {
        allowPointSelect: true,
        dataLabels: {
          distance: 30, // this is the default
          format: '{point.name}<br /><b>{point.y}</b>',
          style: {
            fontSize: '12px',
            fontWeight: 300,
            textOverflow: 'clip',
          },
        },
      },
      series: {
        cursor: 'pointer',
        states: {
          hover: {
            enabled: true,
          },
          inactive: {
            opacity: 0.1,
          },
        },
      },
    },
    series: [{ data }]
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      containerProps={{ style: { width: '100%', height: '100%' } }}
      options={chartOptions}
      ref={chartRef}
    />
  );
};
