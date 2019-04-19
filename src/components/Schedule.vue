import Vue from 'vue'

<template>
  <div id="schedule-div">
    <h1 class="title">Schedule</h1>
    <div class="card w-60 large-card" v-for="(item, i) in items">
      <h1 class="pac">{{item.date}}</h1>
      <div class="event" v-for="(event, index) in item.events">
        <img v-show="index == 0" style="border: 1px solid black; border-radius: 1rem" class="accomodation-img" v-bind:src="event.img" />
        <img v-show="index != 0" style="width: 200%" class="accomodation-img" src="static/line.png" />
        <h2 class="pac">{{event.event}}</h2>
        <p class="pac">Time: {{event.time}}</p>
        <p class="pac">Where: {{event.where}}</p>
        <p class="pac">Address: {{event.address}}</p>
        <p v-show="event.what != '' " style="margin-bottom:0" class="pac">{{event.what}}</p>
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
          date: 'Friday, January 17',
          events: 
            [
              {
                time: '8 pm',
                event: 'Out of Town Guest Reception',
                where: 'Pinellas Ale Works (PAW)',
                address: '1962 1st Ave S, St. Petersburg, FL',
                what: 'Please join us for beer, wine, soft drinks and desserts at a local dog-themed brewery.',
                img: '../../static/paw.jpg'
              }
            ] 
        },
        {
          date: 'Saturday, January 18',
          events: 
            [
              {
                time: '5:30pm',
                event: 'Galleries Open for Guests',
                where: 'James Museum',
                address: '150 Central Ave, St. Petersburg, FL',
                img: '../../static/james.jpg',
              },
              {
                time: '6:30 pm',
                event: 'Wedding Ceremony',
                where: 'James Museum',
                address: '150 Central Ave, St. Petersburg, FL'
              },
              {
                time: '7:00 pm',
                event: 'Wedding Reception',
                where: 'James Museum',
                address: '150 Central Ave, St. Petersburg, FL'
              }
            ]
        },
        {
          date: 'Sunday, January 19',
          events: 
            [
              {
                time: '9:30 am',
                event: 'Brunch',
                where: 'Urban Brew & BBQ',
                address: '2601 Central Ave, St Petersburg, FL',
                img: '../../static/urban.jpg'
              }
            ]
        }
      ]
    }
  }
}
</script>