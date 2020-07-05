<template>
    <div class="mt-0 lg:mt-8 mx-auto max-w-6xl bg-white bg-gray-100 rounded px-2 lg:px-8 pt-6 pb-8 mb-4">
        <div class="w-10/12 mx-auto flex items-center">
            <div class="w-3/12">
                <i class="el-icon-back cursor-pointer" @click="resetReservation"> Back</i>
            </div>
            <div class="w-6/12">
                <h3 class="text-center text-base sm:text-xl lg:text-3xl mb-4">Your Booking Summary</h3>
            </div>
        </div>
        <div class="w-fluss lg:w-10/12 mx-auto p-4 lg:p-8 bg-white booking-summary shadow-sm">
            <div class="flex flex-wrap booking-summary__header">
                <div class="w-full lg:w-3/12">
                    <img :src="reservation.room.image" :alt="reservation.room.title">
                </div>
                <div class="pr-2 lg:pr-0 mt-4 lg:mt-0 w-8/12 lg:w-6/12 lg:px-4">
                    <div class="text-xs sm:text-sm lg:text-base">Selected Room: <strong>{{reservation.room.title}}</strong></div>
                    <div class="text-xs sm:text-sm lg:text-base"><strong>{{reservation.nr_adults}} adults</strong> and {{reservation.nr_child}} child</div>
                    <div class="text-xs sm:text-sm lg:text-base">Stay From: <strong>{{reservation.arrival_date}} > {{reservation.departure_date}} ({{noOfNights}} nights)</strong></div>
                </div>
                <div class="pr-2 lg:pr-0 mt-4 lg:mt-0 w-4/12 lg:w-3/12 text-right">
                    <div class="text-xl lg:text-3xl"><strong>{{total}} €</strong></div>
                    <div class="text-xs sm:text-sm lg:text-base">For the {{noOfNights}} nights</div>
                    <div class="text-xs sm:text-sm lg:text-base">Including Taxes &amp; Fees</div>
                </div>
            </div>
            <div class="booking-summary__body mt-8">
                <el-form :model="reservationForm" :rules="rules" ref="ruleForm" class="reservation-form">
                    <div class="booking-summary_personal-details">
                        <h3 class="mb-4"><strong>YOUR PERSONAL DETAILS</strong></h3>
                        <div class="flex flex-wrap">
                            <div class="w-full sm:w-6/12 sm:pr-2">
                                <el-form-item prop="firstname">
                                    <el-input placeholder="First Name" v-model="reservationForm.firstname"></el-input>
                                </el-form-item>
                            </div>
                            <div class="w-full sm:w-6/12 sm:pl-2">
                                <el-form-item prop="lastname">
                                    <el-input placeholder="Last Name" v-model="reservationForm.lastname"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                        <div class="flex">
                            <el-form-item prop="address" class="flex-grow">
                                <el-input placeholder="Your Address" v-model="reservationForm.address"></el-input>
                            </el-form-item>
                        </div>
                        <div class="flex flex-wrap">
                            <div class="w-full sm:w-6/12 sm:pr-2">
                                <el-form-item prop="zipcode">
                                    <el-input placeholder="Zip Code" v-model="reservationForm.zipcode"></el-input>
                                </el-form-item>
                            </div>
                            <div class="w-full sm:w-6/12 sm:pl-2">
                                <el-form-item prop="city">
                                    <el-input placeholder="City" v-model="reservationForm.city"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="w-full sm:w-6/12 sm:pr-2">
                                <el-form-item prop="country">
                                    <el-input placeholder="Country" v-model="reservationForm.country"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                        <div class="flex flex-wrap">
                            <div class="w-full sm:w-6/12 sm:pr-2">
                                <el-form-item prop="email">
                                    <el-input placeholder="Email Address" v-model="reservationForm.email"></el-input>
                                </el-form-item>
                            </div>
                            <div class="w-full sm:w-6/12 sm:pl-2">
                                <el-form-item prop="phone">
                                    <el-input placeholder="Phone Number" v-model="reservationForm.phone"></el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </div>
                    <div class="booking-summary_payment-details">
                        <h3 class="mb-4"><strong>YOUR PAYMENT DETAILS</strong></h3>
                        <div class="flex flex-wrap">
                            <div class="w-full sm:w-8/12">
                                <div>
                                    <el-form-item prop="creditCard.name">
                                        <el-input placeholder="Credit Card Name" v-model="reservationForm.creditCard.name"></el-input>
                                    </el-form-item>
                                </div>
                                <div>
                                    <el-form-item prop="creditCard.number">
                                        <el-input placeholder="Credit Card Number" v-model="reservationForm.creditCard.number"></el-input>
                                    </el-form-item>
                                </div>
                                <div class="flex flex-wrap">
                                    <div class="w-full sm:w-6/12 sm:pr-2">
                                        <el-form-item class="flex-grow" prop="creditCard.expiryDate">
                                            <el-date-picker v-model="reservationForm.creditCard.expiryDate" type="date" placeholder="Expiry Date"></el-date-picker>
                                        </el-form-item>
                                    </div>
                                    <div class="w-full sm:w-6/12 sm:pl-2">
                                        <el-form-item prop="creditCard.cvv">
                                            <el-input placeholder="CVV" v-model="reservationForm.creditCard.cvv"></el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full sm:w-6/12 sm:pl-4">
                            </div>
                        </div>
                    </div>
                    <div class-="booking-summary_actions">
                        <el-button class="w-full" type="primary" @click="submitForm('reservationForm')">Complete Reservation</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            reservationForm: {
                firstname: '',
                lastname: '',
                address: '',
                zipcode: '',
                city: '',
                country: '',
                email: '',
                phone: '',
                creditCard: {
                    name: '',
                    number: '',
                    expiryDate: '',
                    cvv: ''
                }
            },
            rules: {
                firstname: [
                    { required: true, message: 'Please enter First Name', trigger: 'blur' },
                ],
                lastname: [
                    { required: true, message: 'Please enter Last Name', trigger: 'blur' },
                ],
                address: [
                    { required: true, message: 'Please enter Address', trigger: 'blur' },
                ],
                zipcode: [
                    { required: true, message: 'Please enter Zip Code', trigger: 'blur' },
                ],
                city: [
                    { required: true, message: 'Please enter City', trigger: 'blur' },
                ],
                country: [
                    { required: true, message: 'Please enter Country', trigger: 'blur' },
                ],
                email: [
                    { required: true, message: 'Please enter Email Address', trigger: 'blur' },
                ],
                phone: [
                    { required: true, message: 'Please enter Phone Number', trigger: 'blur' },
                ],
                'creditCard.name' : [
                    { required: true, message: 'Please enter Your Credit Card Name', trigger: 'blur' },
                ],
                'creditCard.number' : [
                    { required: true, message: 'Please enter Your Credit Card Name', trigger: 'blur' },
                ],
                'creditCard.expiryDate' : [
                    { required: true, message: 'Please enter Your Credit Card Name', trigger: 'blur' },
                ],
                'creditCard.cvv' : [
                    { required: true, message: 'Please enter Your Credit Card Name', trigger: 'blur' },
                ],
            }
        }
    },
    methods: {
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        resetReservation () {
            this.$store.dispatch('booking/resetReservation')
        }
    },
    computed: {
        reservation () {
            return this.$store.getters['booking/reservation']
        },
        noOfNights () {
            return this.reservation.nr_nights
        },
        total () {
            return this.reservation.amount_per_night * this.noOfNights
        }
    }
}
</script>

<style lang="scss">
.reservation-form {
    .el-date-editor.el-input {
        width: 100%;
    }
}
</style>