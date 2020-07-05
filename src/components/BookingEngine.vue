<template>
    <div class="mt-8 mx-auto max-w-6xl bg-white bg-gray-100 rounded px-2 lg:px-8 pt-6 pb-8 mb-4">
        <div class="booking-search" v-if="!reservation">
            <booking-search-bar />
            <booking-room-list />
        </div>
        <div class="booking-form" v-else>
            <booking-form />
        </div>
    </div>
</template>

<script>
import BookingSearchBar from "@/components/BookingSearchBar"
import BookingRoomList from "@/components/BookingRoomList"
import BookingForm from '@/components/BookingForm'

export default {
    name: 'BookingEngine',
    
    components: {
        BookingSearchBar,
        BookingRoomList,
        BookingForm
    },
    computed: {
        reservation () {
            return this.$store.getters['booking/reservation']
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
