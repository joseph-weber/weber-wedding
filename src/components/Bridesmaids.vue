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
  name: 'Bridesmaids',
  data () {
    return {
      items: [
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Matron of Honour',
          name: 'Kim Frumkin',
          id: 'bimp'
        },
        {
          image: "./assets/blair.jpg",
          role: 'Bridesmaid',
          name: 'Blaire Abbey',
          id: 'blaire'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Bridesmaid',
          name: 'Erica Benstock',
          id: 'erica'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Bridesmaid',
          name: 'Lizzie Pierret',
          id: 'lizzie'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Bridesmaid',
          name: 'Mary W',
          id: 'mary'
        },
        {
          image: 'https://pp.userapi.com/6Kf5KNYniYRWlI5HlKBpDIgWe1TIHfYivQgnzg/-jXA4eIpy4E.jpg?ava=1',
          role: 'Bridesmaid',
          name: 'Samantha Weber',
          id: 'samantha'
        }
      ]
    }
  }
}
</script>