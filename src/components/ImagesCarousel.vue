"use strict";


import Vue from 'vue'

<template>
  <div class="carousel-container">
    <div class="custom-carousel">
      <div id="image-container">
        <p class="side-arrow" v-on:click="click('left')"><</p>
        <img class="da-img custom-img" style="margin-bottom: 50px" :src="pic" :id="id"/>
        <p class="side-arrow" v-on:click="click('right')">></p>
      </div>
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
      pic: '../../static/newyears.jpg',
      id: '',
      images: [
        {
          src: '../../static/newyears.jpg'
        },
        {
          src: '../../static/bulldog_copy.jpg',
          id: 'bulldog'
        },
        {
          src: '../../static/green_hats.jpg'
        },
        {
          src: '../../static/the_couple.jpg'
        },
        {
          src: '../../static/toledo.jpg'
        },
        {
          src: '../../static/mahaffey.jpg',
          id: 'mahaffey'
        },
        {
          src: '../../static/boys.jpg'
        },
        {
          src: '../../static/helping_jeffrey.jpg',
          id: 'jeffrey'
        },
        {
          src: '../../static/shoot1.jpg'
        },
        {
          src: '../../static/engagement.jpg'
        },
        {
          src: '../../static/madeline_does_diners.jpg'
        },
        {
          src: '../../static/ski.jpg',
          id: 'ski'
        },
        {
          src: '../../static/shoot2.jpg',
          id: 'shoot2'
        },
        {
          src: '../../static/crazy_hats.jpg',
          id: 'crazy_hats'
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
        $('.da-img').addClass('mySlides w3-animate-left');
        if(this.$data.index == last_index){
          this.$data.index = 0
        } else {
          this.$data.index = this.$data.index + 1
        }
      } else {
        $('.da-img').addClass('mySlides w3-animate-right');
        if(this.$data.index == 0){
          this.$data.index = last_index
        } else {
          this.$data.index = this.$data.index - 1
        }
      }
      let i = this.$data.index
      let images = this.$data.images
      this.$data.pic = images[i].src
      this.$data.id = images[i].id
      setTimeout(
        function(){
          $('.da-img').removeClass("mySlides w3-animate-right");
          $('.da-img').removeClass("mySlides w3-animate-left");
        }, 500);
    },
    whatPic() {
      $('.da-img').removeClass('mySlides w3-animate-top');
    }
  },
}
</script>