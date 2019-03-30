"use strict";


import Vue from 'vue'

<template>
  <div class="carousel-container">
    <div class="custom-carousel">
      <div id="image-container">
        <img id="da-img" class="custom-img" :src="pic"/>
      </div>
    </div>
    <div class="carousel-buttons">
      <p class="side-arrow" v-on:click="click('left')"><</p>
      <p class="side-arrow" v-on:click="click('right')">></p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'ImagesCarousel',
  data () {
    return {
      index: 0,
      pic: '../../static/new_years.png',
      images: [
        {
          src: '../../static/new_years.png'
        },
        {
          src: '../../static/bulldog.jpg'
        },
        {
          src: '../../static/rowdies.jpg'
        },
        {
          src: '../../static/the_couple.jpg'
        },
        {
          src: '../../static/toledo.jpg'
        },
        {
          src: '../../static/mahaffey.jpg'
        },
        {
          src: '../../static/boys.jpg'
        },
        {
          src: '../../static/safety.jpg'
        }
      ]
    }
  },
  created() {
  },
  methods: {
    click(direction) {
      let last_index = this.$data.images.length - 1;
      if(direction == 'right'){
        $('#da-img').addClass('mySlides w3-animate-left');
        if(this.$data.index == last_index){
          this.$data.index = 0
        } else {
          this.$data.index = this.$data.index + 1
        }
      } else {
        $('#da-img').addClass('mySlides w3-animate-right');
        if(this.$data.index == 0){
          this.$data.index = last_index
        } else {
          this.$data.index = this.$data.index - 1
        }
      }
      let i = this.$data.index
      let images = this.$data.images
      this.$data.pic = images[i].src
      setTimeout(
        function(){
          $('#da-img').removeClass("mySlides w3-animate-right");
          $('#da-img').removeClass("mySlides w3-animate-left");
        }, 500);
    },
    whatPic() {
      $('#da-img').removeClass('mySlides w3-animate-top');
    }
  },
}
</script>