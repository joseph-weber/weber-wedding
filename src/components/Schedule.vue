import Vue from 'vue'

<template>
  <div id="schedule-div">
    <h1 class="title">Schedule</h1>
    <img id="venue-pic" src="../../static/boys.jpg" />
    <div class="card w-60 large-card" v-for="item in items">
      <h1 class="pac">{{item.date}}</h1>
      <div class="event" v-for="event in item.events">
        <h2 class="pac">{{event.event}}</h2>
        <p class="pac">Time: {{event.time}}</p>
        <p class="pac">Where: {{event.where}}</p>
        <p class="pac">Address: {{event.address}}</p>
        <p class="pac">{{event.what}}</p>
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
          date: 'Friday January 17',
          events: 
            [
              {
                time: '8 pm',
                event: 'Out of Town Guest Reception',
                where: 'Pinellas Ale Works (PAW)',
                address: '1962 1st Ave S, St. Petersburg, FL',
                what: 'Please join us for beer, wine, soft drinks and desserts at a local dog-themed brewery.'
              }
            ] 
        },
        {
          date: 'Saturday January 18',
          events: 
            [
              {
                time: '5:30pm',
                event: 'Galleries Open for Guests',
                where: 'James Museum',
                address: '150 Central Ave, St. Petersburg, FL'
              },
              {
                time: '6:30 pm',
                event: 'Wedding Ceremony',
                where: 'James Museum',
                address: '150 Central Ave, St. Petersburg, FL'
              },
              {
                time: '7:15 pm',
                event: 'Wedding Reception',
                where: 'James Museum',
                address: '150 Central Ave, St. Petersburg, FL'
              },
              {
                time: '11:00 pm',
                event: 'After Party',
                where: 'TBD',
                address: 'TBD'
              }
            ]
        },
        {
          date: 'Sunday January 19',
          events: 
            [
              {
                time: '11 am',
                event: 'Brunch',
                where: 'TBD',
                address: 'TBD'
              }
            ]
        }
      ]
    }
  }
}
</script>