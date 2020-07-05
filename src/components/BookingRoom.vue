<template>
    <div class="shadow-sm min-w-full bg-white border border-gray-400 rounded mb-6">
        <div class="lg:flex">
            <div class="m-2 rounded h-48 lg:h-auto lg:w-1/4 flex-none bg-cover text-center overflow-hidden">
                <img :src="room.image" :alt="room.title">
            </div>
            <div class="w-full lg:w-3/4 p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                    <p class="text-sm text-gray-600 flex items-center">
                        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Members only
                    </p>
                    <div class="text-gray-900 font-bold text-xl mb-2">{{room.title}}</div>
                    <p class="text-gray-700 text-base">{{room.summary}}</p>
                </div>
                <div class="flex items-center">
                    <div class="text-sm">
                        <ul class="text-gray-600 leading-none">
                            <li v-for="card_amenity in room.card_amenities" :key="card_amenity.label" class="inline-block mr-2"><span class="font-bold">{{card_amenity.label}}</span>
                                {{card_amenity.value}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-none lg:flex">
            <div class=" lg:h-auto lg:w-1/4 flex-none bg-cover text-center overflow-hidden" >
            </div>
            <div class="p-4 w-full lg:w-3/4  lg:p-4 lg:px-8 lg:flex lg:flex-col justify-between leading-normal">
                <!-- rates -->
                <div v-for="rate in room.rates" :key="rate.code" class="lg:flex mb-4">
                    <div class="w-full lg:w-3/4">
                        <h2 class="text-gray-700 text-md lg:text-lg  mb-2">{{rate.title}}</h2>
                        <p class="text-sm text-gray-700 lg:text-base">{{rate.summary}}</p>
                    </div>
                    <div class="w-full mt-4  text-center lg:text-right lg:w-1/4 text-right">
                        <p class="text-gray-900 font-bold text-2xl ">{{rate.from}} €</p>
                        <p class="text-sm">Per night</p>
                        <p class="text-sm text-gray-700">Including Taxes &amp; Fees</p>
                        <el-button size="medium" :loading="reserving === rate.code" class="w-full bg-gray-900 focus:bg-gray-900 active:bg-gray-900 hover:bg-gray-900 border-gray-900 focus:border-gray-900 active:border-gray-900 hover:border-gray-900 text-white rounded my-2 uppercase" type="primary" @click="bookNow(rate)">Book Now</el-button>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'BookingRoom',
    props: {
        room: Object,
        title: String,
        image: String,
    },
    data () {
        return {
            reserving: ''
        }
    },
    methods: {
        bookNow (rate) {
            let data = {
                nr_adults: this.search.nr_adults,
                nr_child: this.search.nr_child,
                arrival_date: moment(this.search.arrival_date).format('YYYY-MM-DD'),
                departure_date: moment(this.search.departure_date).format('YYYY-MM-DD'),
                selected_room_code: this.room.code,
                selected_rate_code: rate.code
            }

            this.reserving = rate.code

            this.$store.dispatch('booking/reserveRoom', data)
                .then((response) => {
                    this.reserving = ''
                    this.$store.dispatch('booking/reserveRoomSuccess', response.data)
                }).catch(() =>this.reserving = '')
        }
    },
    computed: {
        search () {
            return this.$store.getters['booking/search']
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
