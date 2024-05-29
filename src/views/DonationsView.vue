<template>
    <v-container fluid class="content">
        <v-row class="my-5">
            <v-col cols="12" md="6">
                <v-select
                    v-model="sort"
                    :items="sortOptions"
                    label="Sort by"
                    rounded
                    variant="solo-filled"
                    prepend-inner-icon="mdi-sort"
                    bg-color="#FFA53A"
                ></v-select>
            </v-col>
            <v-col cols="12" md="6">
                <v-select
                    v-model="filter"
                    :items="filterOptions"
                    label="Source"
                    rounded
                    variant="solo"
                    prepend-inner-icon="mdi-filter"
                    bg-color="#FFA53A"
                ></v-select>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                v-for="(donation, index) in paginatedDonations"
                :key="index"
                cols="12"
            >
                <v-card class="mb-3" style="background-color: #25B7A1; border-radius: 50px;">
                    <v-row no-gutters>
                        <v-col cols="2" class="pa-3 d-flex align-center justify-center">
                            <div class="source-logo" :style="{ 'background-image': 'url(' + getImageUrl(donation.source) + ')' }"></div>
                        </v-col>
                        <v-col cols="7" class="pa-3">
                            <div class="donor-name">{{ donation.donor }}</div>
                            <div class="donor-comment">{{ donation.message }}</div>
                        </v-col>
                        <v-col cols="3" class="pa-3 text-right">
                            <div class="donation-date">{{ donation.date_received }}</div>
                            <div class="donation-amount">{{ donation.amount }} {{ donation.currency }}</div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-center">
                <v-pagination
                    v-model="page"
                    :length="totalPages"
                    circle
                ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios';
    import { useUserStore } from '@/stores/userStore';

    function getRandomFloat(min, max, decimalPlaces) {
        let rand = Math.random() * (max - min) + min;
        let power = Math.pow(10, decimalPlaces);
        return Math.floor(rand * power) / power;
    }

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    export default {
        data: () => ({
            donations: [],
            sort: '',
            filter: '',
            page: 1,
            perPage: 5,
            sortOptions: [
                'Date',
                'Amount'
            ],
            filterOptions: [
                'ALL',
                'REVOLUT',
                'YOUTUBE'
            ]
        }),
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
            sortedDonations() {
                return this.donations.sort((a, b) => {
                    if (this.sort === 'Date') {
                        return new Date(b.date_received) - new Date(a.date_received);
                    } else if (this.sort === 'Amount') {
                        return b.amount - a.amount;
                    }
                    return 0;
                });
            },
            filteredDonations() {
                if (!this.filter) {
                    return this.sortedDonations;
                }
                if (this.filter === 'ALL')
                    return this.sortedDonations;
                return this.sortedDonations.filter(
                    (donation) => donation.source === this.filter
                );
            },
            paginatedDonations() {
                const start = (this.page - 1) * this.perPage;
                const end = start + this.perPage;
                return this.filteredDonations.slice(start, end);
            },
            totalPages() {
                return Math.ceil(this.filteredDonations.length / this.perPage);
            },
        },
        methods: {
            generateDonations() {
                const sources = ['YouTube', 'Revolut'];
                const currencies = ['RON', 'USD'];
                let mockDonations = [];

                for (let i = 1; i <= 11; i++) {
                    mockDonations.push({
                    source: sources[i % 2],
                    donor: `Donor${i}`,
                    comment: `Comment from Donor${i}`,
                    date: randomDate(new Date(2024, 0, 1), new Date(2024, 11, 31)).toLocaleDateString(),
                    amount: getRandomFloat(5, 500, 2),
                    currency: currencies[i % 2]
                    });
                }

                return mockDonations;
            },
            getImageUrl(source) {
                return `../src/assets/${source}.png`;
            }
        }
    }

</script>

<style scoped>
    .content {
        background-image: url("../assets/background.png");
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

    .donor-name {
        font-family: "Archivo Black", sans-serif;
        font-size: large;
        color: white;
    }

    .donor-comment {
        font-family: "Archivo", sans-serif;
        font-size: medium;
        color: white;
    }

    .donation-date {
        font-family: "Archivo", sans-serif;
        font-size: medium;
        color: white;
    }

    .donation-amount {
        font-family: "Archivo Black", sans-serif;
        font-size: large;
        color: white; 
    }

    .donodash-select {
        background-color: aquamarine !important;
    }
</style>