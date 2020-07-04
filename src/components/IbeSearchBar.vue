<template>
<div class="mx-auto hidden lg:block">
    <form class="">
        <div class="flex flex-wrap -mx-3 mb-6 space">
            <div class="w-2/12 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nr-adults">
                    Adults
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nr-adults" type="number" name="nr_adults" placeholder="2">
            </div>
            <div class="w-2/12 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nr-children">
                    Children
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nr-children" type="number" name="nr_children" placeholder="0">
            </div>
            <div class="w-5/12 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nr-children">
                    Booking Date
                </label>
                <el-date-picker
                size="large"
                    v-model="value1"
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
                <button class=" appearance-none block w-full bg-teal-500 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-teal-900">
                    Search
                </button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'IbeSearchBar',
    data: function () {
        return {
             value1: '',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
