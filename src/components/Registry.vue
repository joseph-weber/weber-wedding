






import Vue from 'vue'

<template>
  <div id="registry-div">
    <h1 class="title">Registry</h1>
    <div v-for="item in items" class="large-card card w-60">
      <div class="registry">
        <img class="registry-img" :src="item.logo" />
        <p>{{item.info}}</p>
        <a class="registry-link" target="_blank" :href="item.link">{{item.name}}</a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: [
        {
          logo: '../../static/bloomingdales.svg',
          link: 'https://www.bloomingdales.com/registry/wedding/guest/?perfectProxy=true&registryId=2400758&cm_sp=BWEDD_Find_Registry-_-View_GVR-_-n',
          name: 'Bloomingdales'
        },
        {
          logo: '../../static/crate.png',
          link: 'https://www.crateandbarrel.com/gift-registry/jaclyn-frumkin-and-joseph-weber/r5966597/',
          name: 'Crate and Barrel'
        },
        {
          logo: '../../static/casa.jpg',
          link: 'https://www.casa-stpete.org/',
          name: 'Casa',
          info: 'Please consider contributing to our donation to Casa St. Pete. Together we can help end domestic abuse while empowering survivors.'
        }
      ]
    }
  }
}
</script>