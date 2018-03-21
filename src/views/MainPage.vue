<template>
  <div class="mainPage">
    <h1>Интерактивная книга</h1>
    <div>
      <div>Здесь загружаем книгу (потом вынести загрузку) и сохраняем в стор</div>
      <div class="continue" v-if="!model || model.book">
        <router-link to="/reading" class="logo">Продолжить чтение</router-link>
      </div>
      <BookList :books="books"></BookList>
    </div>
  </div>
</template>

<script>
import BookList from '@/components/BookList'
export default {
  name: 'MainPage',
  components: {
    BookList
  },
  data () {
    return {}
  },
  computed: {
    books () {
      return this.$store.getters.getBooksList
    },
    model () {
      return this.$store.getters.model
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.continue {
  margin: 20px 0
}
</style>
