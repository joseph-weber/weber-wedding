"use strict";


import Vue from 'vue'

<template>
  <div class="wedding-party">
    <div v-for="item in items" class="card white" style="width: 18rem;">
      <div class="card-body">
      <div class="avatar" :id="item.id">
      </div>
      <div>
        <h5 style="text-align: center; margin-top: 5px; margin-bottom: 0;" class="card-title">{{item.name}}</h5>
        <p style="text-align: center; margin-top: 5px; margin-top: 0;"class="card-text">{{item.role}}</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Groomsmen',
  data () {
    return {
      items: [
        {
          image: './assets/david.jpg',
          role: 'Best Man',
          name: 'David Weber',
          id: 'david'
        },
        {
          image: "https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1",
          role: 'Groomsman',
          name: 'Rob Weber',
          id: 'rob'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Groomsman',
          name: 'John van Fechtmann',
          id: 'john'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Groomsman',
          name: 'Phil Rimmler',
          id: 'phil'
        },
        {
          image: './assets/zach.png',
          role: 'Groomsman',
          name: 'Zach Frumkin',
          id: 'zach'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Groomsman',
          name: 'Zubair Ravat',
          id: 'zubair'
        }
      ]
    }
  }
}
</script>