<template>
    <div class="mx-auto hidden lg:block">


        <form class="">
            <div class="flex flex-wrap -mx-3 mb-6 space">
                <div class="w-full md:w-24 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nr-adults">
                        Adults
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nr-adults" type="number" name="nr_adults" placeholder="2">
                </div>
                <div class="w-full md:w-24 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nr-children">
                        Children
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nr-children" type="number" name="nr_children" placeholder="0">
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-checkin">
                        Check-In
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-checkin" type="date" name="checkin" placeholder="">
                </div>
                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-checkout">
                        Check-Out
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-checkout" type="date" name="checkout" placeholder="">

                </div>

                <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">

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
        components: {
        },
        name: 'IbeSearchBar',
        props: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
