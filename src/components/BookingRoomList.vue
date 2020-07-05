<template>
    <div class="w-full">
        <booking-room v-for="(room, index) in rooms" :key="index" :room=room></booking-room>
    </div>
</template>

<script>
import BookingRoom from "@/components/BookingRoom";

export default {
    name: 'BookingRoomList',
    components: {
        BookingRoom
    },
    computed: {
        rooms () {
            return this.$store.getters['booking/rooms'] || []
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
