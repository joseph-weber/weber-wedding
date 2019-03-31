import Vue from 'vue'

<template>
  <nav>
    <div id="navigation-bar">
      <div class="nav-div"><p v-on:click="pageChange('home')" class="nav-p">Home</p></div>
      <p class="nav-p">|</p>
      <div class="nav-div"><p v-on:click="pageChange('schedule')" class="nav-p">Schedule</p></div>
      <p class="nav-p">|</p>
      <div class="nav-div"><p v-on:click="pageChange('photos')" class="nav-p">Photos</p></div>
      <p class="nav-p">|</p>
      <div class="nav-div"><p v-on:click="pageChange('destination')" class="nav-p">Destination</p></div>
      <p class="nav-p">|</p>
      <div class="nav-div"><p v-on:click="pageChange('registry')"  class="nav-p">Registry</p></div>
      <p class="nav-p">|</p>
      <div class="nav-div">
        <p v-on:click="pageChange('accomodations')"  class="nav-p">
          Accomodations
        </p>
      </div>
    </div>
    <div id="hamburger-div" class="disappear">
      <img v-on:click="dropItDown()" src="../assets/images/hamburger_menu.png" style="width: 2rem; height: 90%; margin: 0 3px;"/>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery';
import { bus } from '../Events.js';
export default {
  name: 'NavBar',
  data () {
    return {
      dropDown: false
    }
  },
  updated: function() {
    this.sizeCheck()
  },
  mounted: function() {
    this.sizeCheck()
  },
  created: function() {
    this.sizeCheck()
  },
  methods: {
    pageChange: function (page) {
      bus.$emit('changePage', page);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    dropItDown: function () {
      bus.$emit('hamburgerClick');
      this.$data.dropDown = true;
    },
    sizeCheck: function (){
      if ($(window).width() > 700) {
      this.$data.dropDown = false;
      } else {
        this.$data.dropDown = true;
      }
      if ($(window).width() > 500) {
        $('#navigation-bar').addClass('exper-nav');
        $('#navigation-bar').removeClass('disappear');
        $('#hamburger-div').addClass('disappear');
        $('#hamburger-div').removeClass('hamburger-nav');
      }
      else {
        $('#navigation-bar').removeClass('exper-nav');
        $('#navigation-bar').addClass('disappear');
        $('#hamburger-div').removeClass('disappear');
        $('#hamburger-div').addClass('hamburger-nav');
      }
    }
  }
}
</script>







