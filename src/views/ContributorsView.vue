<template>
  <v-container fluid class="content">
    <!-- ... -->
    <v-row>
      <v-col
        v-for="(donor, index) in sortedDonors"
        :key="index"
        :cols="index < 3 ? 4 : 12"
      >
        <v-card
          :class="[
            'mb-3',
            'elevation-2',
            'donor-card',
            {'top-contributor': index < 3, 'gold': index === 0, 'silver': index === 1, 'bronze': index === 2, 'normal-contributor': index >= 3}
          ]"
          :style="index < 3 ? { height: `${220 - index * 30}px` } : {}"
        >
          <div :class="{'donor-content': index >= 3, 'top-donor-content': index < 3}">
            <div v-if="index < 3" class="donor-top-info">
              <div>
                <span class="donor-rank" style="flex: 1;">{{ index + 1 }}.</span> {{ donor.name }}
              </div>
              <div class="donor-amount" style="flex: 1;">{{ donor.totalAmount.toFixed(2) }} RON</div>
              <div class="donor-donations" style="flex: 1;">{{ donor.totalDonations }} total donations</div>
            </div>
            <div v-if="index >= 3" class="flex-row-layout">
              <div>
                <span class="donor-rank">{{ index + 1 }}.</span> {{ donor.name }}
              </div>
              <div class="donor-amount">{{ donor.totalAmount.toFixed(2) }} RON</div>
              <div class="donor-donations">{{ donor.totalDonations }} total donations</div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!-- ... -->
  </v-container>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '@/stores/userStore';

export default {
    data() {
      return {
        donations: []
      };
    },
    setup() {
      const userStore = useUserStore();
      return { userStore };
    },
    async created() {
      try {
        const response = await axios.get(`http://localhost:8080/donodash/donations/${this.userStore.id}`, {
          withCredentials: true
        });
        this.donations = response.data;
      } catch (error) {
        console.error('Error fetching donations:', error);
      }
    },
    computed: {
      aggregatedDonors() {
        const aggregation = this.donations.reduce((acc, donation) => {
          if (acc[donation.donor]) {
            acc[donation.donor].totalAmount += donation.amount;
            acc[donation.donor].totalDonations += 1;
          } else {
            acc[donation.donor] = {
              name: donation.donor,
              totalAmount: donation.amount,
              totalDonations: 1
            };
          }
          return acc;
        }, {});
        return Object.values(aggregation);
      },
      sortedDonors() {
        return this.aggregatedDonors.sort((a, b) => b.totalAmount - a.totalAmount);
      }
    },
    methods: {
      generateDonations() {
        const donors = ["TheGreatAly", "Joonas.r145", "Albert_153", "Razvan.Alin29", "AnuelAA24"];
        let mockDonations = [];
        for (let i = 1; i <= 30; i++) {
          mockDonations.push({
            donor: donors[Math.floor(Math.random() * donors.length)],
            amount: Math.random() * 500 + 50 // Random amount between 50 and 550
          });
        }
        return mockDonations;
      }
  }
};
</script>

<style scoped>
  .content {
    padding-top: 20px;
    background-image: url("../assets/background.png");
    background-size: cover;
    overflow-x: auto;
    height: 100vh;
    min-height: 100vh;
  }

  .elevation-2 {
    box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
  }
  
  .donor-card {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Archivo Black', sans-serif;
    border-radius: 50px;
    margin: 10px 0;
  }

  .donor-content, .top-donor-content {
    display: flex;
    padding: 15px;
    width: 100%;
  }

  .top-donor-content {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }

  .flex-row-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .normal-contributor {
    background-color: #25B7A1;
  }

  .donor-rank, .donor-name, .donor-amount, .donor-donations {
    font-size: large;
  }

  .gold, .silver, .bronze {
    height: 200px; 
  }

  .gold {
    background-color: #FFD700;
  }

  .silver {
    background-color: #C0C0C0;
  }

  .bronze {
    background-color: #CD7F32;
  }
</style>

