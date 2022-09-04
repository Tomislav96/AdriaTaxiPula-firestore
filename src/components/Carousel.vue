<template>
  <div>
  <b-carousel ref="carousel1"
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    controls
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>

  </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
        prev(){
            this.$refs.carousel1.prev()
        },
        next() {
            this.$refs.carousel1.next()
        },
    }
  }
</script>
<style>
#carousel-fade{
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  text-align: center;
  display: flex;
}

</style>