<template>
<div id="aplication">
  <b-card
    id="appli"
    overlay
    img-src="https://picsum.photos/900/250/?image=3" 
    img-alt="Card Image"
    text-variant="white"
    title="Download our official application"
    
  >
    <b-card-text id="and">
      Avaliable on Google Store and Apple Store 
    </b-card-text>
  </b-card>
  <p></p>
  <p></p>
  <div id="gumb">
    <b-button href="https://play.google.com/store/apps/details?id=hr.intendanet.adriataxi" size="lg" id="and" variant="warning">Download for Android</b-button>
    <p></p>
    <b-button href="https://apps.apple.com/pe/app/adriataxi/id1484448610?l=en" size="lg" id="ios" variant="success">Download for Iphone</b-button>
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style>
#appli{
    font-size: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
}
#and{
    font-size: 15px;
    text-align: center;
    justify-content: center;
    align-items: center;
}
#ios{
    font-size: 20px;
    text-align: center;
    justify-content: center;
    align-items: center
}
#gumb{
    text-align: center;
    justify-content: center;
    align-items: center
}
</style>