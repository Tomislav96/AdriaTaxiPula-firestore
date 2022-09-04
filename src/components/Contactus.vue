<template>
  <div>
  <b-card bg-variant="light" id="contact" align="center">
    <b-form-group 
      label-cols-lg="3"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label="Phone no.1:"
        label-for="nested-phone"
        label-cols-sm="3"
        label-align-sm="right"
        
      >
        <b-form-group id="nested-phone" label="+385 97 732 3458" ></b-form-group>
      </b-form-group>
      <b-form-group
        label="Phone no.2:"
        label-for="nested-phone"
        label-cols-sm="3"
        label-align-sm="right"
        
      >
        <b-form-group id="nested-phone" label="+385 99 785 6565" ></b-form-group>
      </b-form-group>

      <b-form-group
        label="E-mail:"
        label-for="nested-mail"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-group id="nested-mail" label="adriataxi.info@gmail.com"></b-form-group>
      </b-form-group>

      <b-form-group
        label="State:"
        label-for="nested-country"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-group id="nested-country" label="Croatia"></b-form-group>
      </b-form-group>

      <b-form-group
        label="Region:"
        label-for="nested-region"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-group id="nested-region" label="Istria"></b-form-group>
      </b-form-group>

      
    </b-form-group>
  </b-card>
</div>
</template>

<script>
export default {

}
</script>

<style>


</style>