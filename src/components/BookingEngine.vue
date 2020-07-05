<template>
    <div class="mt-8 mx-auto max-w-6xl bg-white bg-gray-100 rounded px-8 pt-6 pb-8 mb-4">
        <booking-search-bar />
        <booking-room-list />
    </div>
</template>

<script>
import BookingSearchBar from "@/components/BookingSearchBar";
import BookingRoomList from "@/components/BookingRoomList";

export default {
    name: 'BookingEngine',
    
    components: {
        BookingSearchBar,
        BookingRoomList
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
