<template>
  <v-container fluid class="content">
    <v-row>
      <v-col>
        <LineChart v-if="loaded" :data="data" :options="options" />
        <div v-else>Loading chart data...</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card
          class="pa-4"
          style="height: 300px; background-color: #25b7a1; border-radius: 50px"
        >
          <h3 class="some-text">Top sources:</h3>
          <div
            v-for="(source, index) in topSources"
            :key="index"
            class="source-item"
          >
            <v-row align="center">
              <v-col cols="2">
                <div
                  class="source-logo"
                  :style="{
                    'background-image':
                      'url(' + getSourceIcon(source.source) + ')',
                  }"
                ></div>
              </v-col>
              <v-col cols="7">
                <span>{{ source.source }}</span>
              </v-col>
              <v-col cols="3">
                <span>{{ source.amount.toFixed(2) + ' RON' }}</span>
              </v-col>
            </v-row>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          class="pa-4"
          style="height: 300px; background-color: #25b7a1; border-radius: 50px"
        >
          <h3 class="some-text">Milestones:</h3>
          <div
            style="
              height: 200px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              margin-top: 25px;
            "
          >
            <div class="milestone-item">
              <span>Best month:</span>
              <span>{{ bestMonth.month }} {{ bestMonth.year }}</span>
            </div>
            <div class="milestone-item">
              <span>Best day:</span>
              <span>{{ bestDay.date }}</span>
            </div>
            <div class="milestone-item">
              <span>Highest donation:</span>
              <span>{{ highestDonation.amount.toFixed(2) + ' RON' }}</span>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios';
  import { useUserStore } from '@/stores/userStore';
  import LineChart from '@/components/LineChart.vue';

  export default {
    name: 'AnalyticsView',
    components: {
      LineChart,
    },
    data() {
      return {
        donations: [],
        data: null,
        loaded: false,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: {
                color: 'black',
              },
              grid: {
                color: '#25B7A1',
              },
            },
            y: {
              ticks: {
                color: 'black',
              },
              grid: {
                color: '#25B7A1',
              },
            },
          },
        },
        topSources: [],
        bestMonth: { month: '', year: '', amount: 0 },
        bestDay: { date: '', amount: 0 },
        highestDonation: { amount: 0, date: '' },
      };
    },
    setup() {
      const userStore = useUserStore();
      return { userStore };
    },
    async mounted() {
      try {
        const response = await axios.get(
          `http://localhost:8080/donodash/donations/${this.userStore.id}`,
          {
            withCredentials: true,
          }
        );
        this.donations = response.data;
        this.calculateChartData();
        this.calculateTopSources();
        this.calculateMilestones();
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    },
    methods: {
      calculateChartData() {
        const monthlyData = Array(12).fill(0);
        this.donations.forEach((donation) => {
          const month = new Date(donation.date_received).getMonth();
          monthlyData[month] += donation.amount;
        });
        this.data = {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          datasets: [
            {
              label: 'Donations (Year 2024)',
              backgroundColor: '#FFA53A',
              borderColor: '#FFA53A',
              data: monthlyData,
            },
          ],
        };
        this.loaded = true;
      },
      calculateTopSources() {
        const sourceTotals = this.donations.reduce((acc, donation) => {
          if (!acc[donation.source]) {
            acc[donation.source] = 0;
          }
          acc[donation.source] += donation.amount;
          return acc;
        }, {});

        this.topSources = Object.entries(sourceTotals)
          .map(([source, amount]) => ({ source, amount }))
          .sort((a, b) => b.amount - a.amount)
          .slice(0, 3);
      },
      calculateMilestones() {
        const monthlyTotals = {};
        let bestDay = { date: '', amount: 0 };
        let highestDonation = { amount: 0, date: '' };

        this.donations.forEach((donation) => {
          const month = new Date(donation.date_received).toLocaleString(
            'default',
            { month: 'long' }
          );
          if (!monthlyTotals[month]) {
            monthlyTotals[month] = 0;
          }
          monthlyTotals[month] += donation.amount;

          if (donation.amount > bestDay.amount) {
            bestDay = { date: donation.date_received, amount: donation.amount };
          }

          if (donation.amount > highestDonation.amount) {
            highestDonation = { amount: donation.amount, date: donation.date };
          }
        });

        const bestMonth = Object.entries(monthlyTotals).reduce(
          (best, [month, amount]) =>
            amount > best.amount ? { month, amount } : best,
          { month: '', amount: 0 }
        );

        this.bestMonth = { ...bestMonth, year: 2024 };
        this.bestDay = bestDay;
        this.highestDonation = highestDonation;
      },
      getSourceIcon(source) {
        return `../src/assets/${source}.png`;
      },
    },
  };
</script>

<style scoped>
  .content {
    padding-top: 20px;
    background-image: url('../assets/background.png');
    background-size: cover;
    overflow-x: auto;
    height: 100vh;
    min-height: 100vh;
  }

  .source-logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
  }

  .some-text {
    font-family: 'Archivo Black', sans-serif;
    font-size: large;
    color: white;
    text-align: center;
    margin-bottom: 10px;
  }

  .source-item {
    font-family: 'Archivo Black', sans-serif;
    font-size: medium;
    color: white;
    margin-bottom: 10px;
  }

  .milestone-item {
    font-family: 'Archivo Black', sans-serif;
    font-size: medium;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 5px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
</style>
