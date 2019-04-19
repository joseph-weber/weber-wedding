import Vue from 'vue'
<template>
  <div id="accomodations-div">
    <h1 class="title">Accomodations</h1>
    <div v-for="(group, index) in items">
      <h1 class="hotel-group" v-show="index == 0">Hotel Blocks</h1>
      <h1 class="hotel-group" v-show="index == 1">Other Recommended Hotels</h1>
      <div v-for="item in group" class="large-card card w-60">
        <div class="accomodation">
          <h1 class="accomodation-item" style="text-align: center">{{item.name}}</h1>
          <img class="accomodation-img" v-bind:src="item.image" />
          <p class="accomodation-item">{{item.description}}</p>
          <p class="accomodation-item">{{item.discount}}</p>
          <a class="registry-link accomodation-item" target="_blank" :href="item.link">Website</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Accomodations',
    data () {
      return {
        items: [
           [
            {
              image: '../static/hyatt.jpg',
              link: '#',
              name: 'Hyatt Place St. Pete',
              description: 'Right across from the James Museum and in the heart of downtown. Walking distance from dozens of restaurants and bars. Not far from the Dali, Museum of Fine Arts and Chihuly Collection. Brand new construction.',
              block: 'X rooms',
              link: 'https://www.hyatt.com/en-US/hotel/florida/hyatt-place-st-petersburg-downtown/piezd'
            },
            {
              image: '../static/indigo.jpg',
              link: '#',
              name: 'Hotel Indigo',
              description: "A relaxed, boutique-style hotel in downtown St. Pete. Short walking distance to the Sundial, James Museum and various shops and restaurants. 5 suites included in block.",
              discount: "Use code FWW when booking to be a part of the wedding room block.",
              block: '25 rooms',
              link: 'https://www.hotelindigo.com'
            }
          ],
          [
            {
              image: '../static/hilton.jpg',
              link: '#',
              name: 'Hilton St. Pete',
              description: 'A minute walk from the water, this hotel gives you access to downtown St. Pete like no other. This hotel includes a pool, some wonderful views and a number of food/drink options.',
              block: 'Maybe None',
              link: 'https://www3.hilton.com/en/hotels/florida/hilton-st-petersburg-bayfront-SPTSHHF/index.html'
            },
            {
              image: '../static/vinoy_accom.jpg',
              link: '#',
              name: 'The Vinoy Resort & Golf Club',
              description: 'Luxurious resort in the Northern part of downtown. Filled with plenty of activities and amenities, this is a great place if you want to take a mini-vacation while in St. Pete.',
              block: 'None',
              link: 'https://www.marriott.com/hotels/travel/tpasr-the-vinoy-renaissance-st-petersburg-resort-and-golf-club/'
            }
          ]
        ]
      }
    }
  }
</script>

<style lang="scss">
  div{
  }
</style>