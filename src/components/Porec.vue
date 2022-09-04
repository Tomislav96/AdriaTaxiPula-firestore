<template>
<div>
    <b-container fluid class="bv-example-row mt-4">
        <b-row>
            <b-col>
                <b-card no-body class="overflow-hidden">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img :src="require('../assets/por.jpg')" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body class="text-primary" title="Pula" id="porec">
                                <b-card-text class="text-dark">
                                    <h2 class="mt-4">Pula --> Poreč</h2>
                                    <h6 class="mt-4">750 HRK</h6>
                                    <p class="mt-4">One way</p>
                                </b-card-text>
                                <b-button
                                    @click="modaldata('Porec',750,'success')"
                                    size="lg"
                                    class="mt-4"
                                    block
                                    variant="primary"
                                    >Book</b-button>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
  <b-modal hide-footer  id="modal-2" :title="taxi">
        <b-form ref="form" @submit.prevent="sendEmail">
             <b-form-group id="input-group-1" label="Name:" label-for="input-1">
                <b-form-input
                id="input-1"
                name="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Enter Name"
                ></b-form-input>
             </b-form-group>
             <b-form-group id="input-group-2" label="Pickup Date:" label-for="input-2">
                <b-form-input
                id="input-2"
                name="date"
                v-model="form.date"
                type="datetime-local"
                required
                placeholder="Enter pickup date and time"
                ></b-form-input>
             </b-form-group>
             <b-form-group id="input-group-3" label="Phone:" label-for="input-3">
                <b-form-input
                id="input-1"
                name="phone"
                v-model="form.phone"
                type="text"
                required
                placeholder="Enter Phone no."
                ></b-form-input>
             </b-form-group>
             <b-form-group id="input-group-4" label="Taxi Type:" label-for="input-4">
                <b-form-select name="tip" v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
             </b-form-group>
             <p></p>
             <b-form-group id="input-group-5" label="Message:" label-for="input-5">
                <b-form-textarea
                id="input-5"
                name="message"
                v-model="form.message"
                placeholder="Enter Message (optional)"
                rows="3"
                max-rows="6"
                ></b-form-textarea>
             </b-form-group>
             <b-form-group id="input-group-6" label="Price:" label-for="input-6">
                <b-form-input
                id="input-6"
                name="taxi_price"
                v-model="form.taxi_price"
                readonly
                ></b-form-input>
             </b-form-group>

             <b-button class="text-white" block type="submit" :variant="color">Book</b-button>
        </b-form>
  </b-modal>
</div>
</template>
<script>
import {db} from "@/firebase.js";
import {addDoc, collection} from "firebase/firestore";
import Swal from "sweetalert2";

export default {
    data(){
        return{
            selected: 'a',
        options: [
          { value: 'a', text: 'Regular 4 passengers' },
          { value: 'b', text: 'Van up to 8 passengers (900 HRK)' },
        ],
          taxi: "",
            form: {
                name: "",
                date: "",
                phone: "",
                tip: "",
                message: "",
                taxi_price: ""
    
            },
        };
    },
    methods: {
        sendEmail(evt) {
            evt.preventDefault();
            addDoc(collection(db, "Pula-->Porec"),{
          name: this.form.name,
          date: this.form.date,
          phone: this.form.phone,
          tip: this.selected,
          message: this.form.message,
          taxi_price: this.form.taxi_price

          
            }).then
                Swal.fire("Good job!","success");
                this.$bvModal.hide("modal-2");
               
     
    },
    modaldata(taxi,price,color) {
        this.$bvModal.show("modal-2");
        this.taxi=taxi;
        this.color=color;
        this.form.taxi_price=price;
    }
  }
}
</script>

<style scoped>
img{
    height: 300px !important;
}
#medulin{
    background-color: rgb(231, 231, 231);
}

</style>