<template>
<div class="mx-auto hidden lg:block">
    <form class="">
        <div class="flex flex-wrap -mx-3 mb-6 space">
            <div class="w-auto px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nr-adults">
                    Adults
                </label>
                <el-input-number :value="search.nr_adults" @input="updateSearch($event, 'nr_adults')" :min="1"></el-input-number>
            </div>
            <div class="w-auto px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nr-children">
                    Children
                </label>
                <el-input-number :value="search.nr_child" @input="updateSearch($event, 'nr_child')" :min="0"></el-input-number>
            </div>
            <div class="w-auto px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nr-children">
                    Booking Date
                </label>
                <el-date-picker
                    size="large"
                    :value="[search.arrival_date, search.departure_date]"
                    @input="updateSearch($event, 'bookingDate')"
                    type="daterange"
                    range-separator="To"
                    start-placeholder="Check-In"
                    end-placeholder="Check-Out">
                </el-date-picker>
            </div>
            <div class="w-auto flex-grow px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2 hidden md:block" for="grid-checkout">
                    .
                </label>
                <el-button :loading="searching" class="w-full" :disabled="!valid" type="primary" @click="searchRooms">Search</el-button>
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
            searching: false,
            bookingDate: '',
        }
    },
    methods: {
        searchRooms: function () {
            this.searching = true

            this.$store.dispatch('booking/searchRooms', {
                nr_adults: this.search.nr_adults,
                nr_child: this.search.nr_child,
                arrival_date: moment(this.search.arrival_date).format('YYYY-MM-DD'),
                departure_date: moment(this.search.departure_date).format('YYYY-MM-DD')
            })
                .then((response) => {
                    this.searching = false
                    this.$store.dispatch('booking/updateRooms', Object.values(response.data.data))
                }).catch(() => this.searching = false)
        },
        updateSearch: function (value, field) {
            if (field === 'bookingDate') {
                this.bookingDate = value
                this.search.arrival_date = value[0]
                this.search.departure_date = value[1]
            } else {
                this.search[field] = value
            }

            this.$store.dispatch('booking/updateSearch', this.search)
        }
    },
    computed: {
        search () {
            return this.$store.getters['booking/search']

            // return {
            //     nr_adults: search.nr_adults,
            //     nr_child: search.nr_child,
            //     arrival_date: moment(search.arrival_date, 'YYYY-MM-DD').toDate(),
            //     departure_date: moment(search.departure_date, 'YYYY-MM-DD').toDate()
            // }
        },
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
