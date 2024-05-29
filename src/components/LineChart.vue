<template>
    <Line class="donodash-chart" :data="data" :options="options" />
  </template>
  
  <script>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)
  
  export default {
    name: 'LineChart',
    components: { Line },
    props: {
      data: {
        type: Object,
        required: true
      },
      options: {
        type: Object,
        default: () => ({
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
            ticks: {
              color: 'black'
            },
            grid: {
              color: '#25B7A1'
            }
          },
          y: {
            ticks: {
              color: 'black'
            },
            grid: {
              color: '#25B7A1'
            }
          }
          }
        })
      }
    }
  }
  </script>
  
  <style scoped>

    .donodash-chart {
        height: 350px;
    }
  </style>
  