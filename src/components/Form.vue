<template>
    <div class="container">
        <form ref="form1" @submit.prevent="sendEmail">
            <label>Pickup Location</label>
          <input 
            type="pickup" 
            v-model="pickup"
            name="pickup"
            placeholder="Where should we pick you up?"
            required
          >
          <label>Destination</label>
          <input 
            type="destination" 
            v-model="destination"
            name="destination"
            placeholder="Enter your destination"
            required
          >
          <label>Pickup Time</label>
          <input 
            type="datetime-local" 
            v-model="date"
            name="date"
            placeholder="Enter date and time"
            required
          >
          <p></p>
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
            required
          >
          <label>Phone</label>
          <input 
            type="phone" 
            v-model="phone"
            name="phone"
            placeholder="Your Phone no."
            required
            >
          <b-form-group id="input-group-4" label="Taxi Type:" label-for="input-4" >
                <b-form-select name="tip"  v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
             </b-form-group>
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message (Optional)">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
</template>


<script>
import {db} from "@/firebase.js";
import {addDoc, collection} from "firebase/firestore";
import Swal from "sweetalert2";


export default {
  data() {
    return {
       selected: 'a',
        options: [
          { value: 'a', text: 'Regular 4 passengers' },
          { value: 'b', text: 'Van up to 8 passengers' },
        ],
      pickup: '',
      destination: '',
      date: '',
      name: '',
      phone: '',
      tip: '',
      message: ''
    }
  },
  methods: {
    sendEmail(evt){
      evt.preventDefault();
          addDoc(collection(db, "Form"),{
           pickup: this.pickup,
          destination: this.destination,
          date: this.date,
          name: this.name,
          phone: this.phone,
          tip: this.selected,
          message: this.message
          
             }).then
                Swal.fire("Good job!","success");
                this.$bvModal.hide("modal-2");
       
    
                       
      this.pickup = ''
      this.destination = ''
      this.date = ''
      this.name = ''
      this.phone = ''
      this.tip = ''
      this.message = ''

      },
 
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #93c6d7;
  padding: 20px;
  width: 80%;
}

label {
  float: left;
}

input[type=pickup], [type=destination], [type=date], [type=text], [type=phone], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>