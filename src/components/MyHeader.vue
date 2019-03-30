

import Vue from 'vue'

<template>
  <div id="whole-header">
    <div class="icon-div">
    </div>
    <div class="middle">
      <p id="couple-name">Jaclyn and Joseph</p>
      <p>January 18, 2020 <span class="circle"></span> St. Petersburg, FL</p>
    </div>
    <div></div>
  </div>
</template>

<script>
import { bus } from '../Events.js';
export default {
  name: 'MyHeader'
}
</script>

Vue.component('my-header', {
  data: function () {
    return {
      count: 0
    }
  },
  template: `<div id="whole-header">
              <div class="icon-div">
              </div>
              <div class="middle">
                <p id="couple-name">Jaclyn and Joseph</p>
                <p>January 18, 2020 <span class="circle"></span> St. Petersburg, FL</p>
              </div>
              <div></div>
            </div>`,
});