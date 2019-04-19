"use strict";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
var x = import './styles/app.css';
console.log(x)

<template>
  <div>
    <Modal />
    <div v-show="!dropDown">
      <div class="sticky">
        <MyHeader></MyHeader>
        <NavBar></NavBar>
      </div>
      <img id="egggif" style="display:none; position:fixed;
    width:500px;
    height:600px;
    margin:-300px auto auto -250px;
    top:50%;
    left:50%;
    text-align:center; z-index: 1000000;" src="../static/puppy.gif">
      <div class="content">
        <Couple v-show="page == 'home'"></Couple>
        <Destination v-show="page == 'destination'"></Destination>
        <div id="wedding-party" style="display: flex; flex-direction: column; text-align: center">
          <h1 v-show="page == 'home'">Wedding Party</h1>
          <br/>
          <div id="party-cards" style="display: flex; margin: 0 auto;">
          <Groomsmen v-show="page == 'home'"></Groomsmen>
          <Bridesmaids v-show="page == 'home'"></Bridesmaids>
          </div>
          <div class="card white" style="width: 18rem;" v-show="page == 'home'">
            <div class="card-body">
              <div class="avatar" id="geoff">
              </div>
              <div>
                <h5 style="text-align: center; margin-top: 5px; margin-bottom: 0;" class="card-title">Geoff Pierret</h5>
                <p style="text-align: center; margin-top: 5px; margin-top: 0;"class="card-text">Officiant</p>
              </div>
            </div>
          </div>
        </div>
        <Schedule v-show="page == 'schedule'" />
        <ImagesCarousel v-show="page == 'photos'"></ImagesCarousel>
        <Registry v-show="page == 'registry'"></Registry>
        <Accomodations v-show="page == 'accomodations'"></accomodations>
        <h1 style="display: none">{{windowWidth}}</h1>
        <MyFooter></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import './egg.js'
import { bus } from './Events.js';
export default {
  name: 'App',
  data () {
    return {
      hello: 'hello world',
      page: 'home',
      dropDown: false,
      windowWidth: 0
    }
  },
  mounted: function() {
  // we can implement any method here like
   this.checkWidth()
   this.sticky()
  },
  destroyed: function() {
    this.handleResize();
    window.removeEventListener('resize', this.handleResize)
  },
  created: function() {
      console.log('Are you a dev? Try the konami code')
      window.addEventListener('resize', this.handleResize)
      bus.$on('changePage', (data)=>{
          this.$data.page = data;
        })
      bus.$on('hamburgerClick', (data)=>{
        this.$data.dropDown = !this.$data.dropDown;
      })
      bus.$on('tooBig', (result)=>{
        this.$data.page = this.$data.page;
        this.$data.dropDown = false;
      })
      this.sticky()
      this.checkWidth()
      this.handleResize();
    },
    updated: function() {
      bus.$on('tooBig', (result)=>{
        this.$data.page = this.$data.page;
      })
      this.checkWidth()
      this.sticky()
      this.handleResize();
    },
    methods: {
      handleResize: function() {
      this.windowWidth = window.innerWidth;
      },
      checkWidth: function(init) {
        /*If browser resized, check width again */
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
      },
      sticky: function() {
        $(window).bind('scroll', function () {
          if ($(window).scrollTop() > 320) {
              $('#navigation-bar').removeClass('navbar-top');
              $('#navigation-bar').addClass('navbar-fixed-top');
              $('#hamburger-div').removeClass('navbar-top');
              $('#hamburger-div').addClass('navbar-fixed-top');
              $('#modal-container').removeClass('modal-dialog modal-lg');
              $('#modal-container').addClass('disappear');
          } else {
              $('#navigation-bar').removeClass('navbar-fixed-top');
              $('#navigation-bar').addClass('navbar-top');
              $('#hamburger-div').removeClass('navbar-fixed-top');
              $('#hamburger-div').addClass('navbar-top');
              $('#modal-container').removeClass('disappear');
              $('#modal-container').addClass('modal-dialog modal-lg');
          }
        });
      }
    },
}
</script>





var headerHeight = 320;
$(window).bind('scroll', function () {
if ($(window).scrollTop() > headerHeight) {
    $('#navigation-bar').removeClass('navbar-top');
    $('#navigation-bar').addClass('navbar-fixed-top');
    $('#hamburger-div').removeClass('navbar-top');
    $('#hamburger-div').addClass('navbar-fixed-top');
    $('#modal-container').removeClass('modal-dialog modal-lg');
    $('#modal-container').addClass('disappear');
} else {
    $('#navigation-bar').removeClass('navbar-fixed-top');
    $('#navigation-bar').addClass('navbar-top');
    $('#hamburger-div').removeClass('navbar-fixed-top');
    $('#hamburger-div').addClass('navbar-top');
    $('#modal-container').removeClass('disappear');
    $('#modal-container').addClass('modal-dialog modal-lg');
}
});  



function checkWidth(init)
{
    /*If browser resized, check width again */
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

$(document).ready(function() {
    checkWidth(true);
    $(window).resize(function() {
        checkWidth(false);
    });
    var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function() {
      console.log('You did it!')
      jQuery('#egggif').fadeIn(500, function() {
        window.setTimeout(function() { jQuery('#egggif').hide(); }, 5000);
      });
    }).listen();
});
