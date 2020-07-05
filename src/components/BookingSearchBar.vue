<template>
<div class="mx-auto hidden lg:block">
    <form class="">
        <div class="flex flex-wrap -mx-3 mb-6 space">
            <div class="w-2/12 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nr-adults">
                    Adults
                </label>
                <el-input-number :value="search.nr_adult" @input="updateSearch($event, 'nr_adult')" :min="1"></el-input-number>
            </div>
            <div class="w-2/12 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nr-children">
                    Children
                </label>
                <el-input-number :value="search.nr_child" @input="updateSearch($event, 'nr_child')" :min="0"></el-input-number>
            </div>
            <div class="w-5/12 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nr-children">
                    Booking Date
                </label>
                <el-date-picker
                    size="large"
                    :value="bookingDate"
                    @input="updateSearch($event, 'bookingDate')"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Check-In"
                    end-placeholder="Check-Out">
                </el-date-picker>
            </div>
            <div class="w-3/12 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2 hidden md:block" for="grid-checkout">
                    .
                </label>
                <button type="button" :disabled="!valid" @click="searchRooms" class="appearance-none block w-full bg-teal-500 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-teal-900">
                    Search
                </button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'BookingSearchBar',
    data: function () {
        return {
            search: {
                nr_adult: 2,
                nr_child: 0,
                arrival_date: '',
                departure_date: ''
            },
            bookingDate: '',
        }
    },
    methods: {
        searchRooms: function () {
            this.$store.dispatch('booking/searchRooms')
                .then((response) => {
                    this.$store.dispatch('booking/updateRooms', Object.values(response.data.data))
                })
        },
        updateSearch: function (value, field) {
            if (field === 'bookingDate') {
                this.bookingDate = value
                this.search.arrival_date = moment(value[0]).format('YYYY-MM-DD')
                this.search.departure_date = moment(value[1]).format('YYYY-MM-DD')
            } else {
                this.search[field] = value
            }

            this.$store.dispatch('booking/updateSearch', this.search)
        }
    },
    computed: {
        valid: function () {
            if (this.nr_adult <= 0) {
                return false
            }

            if (this.bookingDate.length !== 2) {
                return false
            }

            return true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
