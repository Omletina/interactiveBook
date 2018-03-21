<template>
  <div class="book-component">
    <div>Выберите книгу, которую хотите начать читать:</div>
    <div class="book-list">
      <a class="book-item" href="javascript://" v-for="book in books" track-by="id" v-bind:key="book.id" v-if="books" @click.stop="start(book)">{{book.name}}</a>
    </div>
  </div>
</template>
<script>

export default {
  name: 'BookList',
  data () {
    return {}
  },
  props: ['books'],
  methods: {
    setModel: function (idBook, idChapter, idStep) {
      // сохраняем в модель id книги
      this.$store.dispatch('setModel', {'book': idBook, 'chapter': idChapter, 'step': idStep})
    },
    start: function (book) {
      if (!book) return
      this.setModel(book.id, 1, 1)
      // Переход на страницу ReadingPage
      this.$router.push({name: 'ReadingPage'})
    }
  }
}
</script>

<style>
.book-list {
  margin: 10px 0;
}
.book-item {
  display: block;
  margin: 0 0 10px 0;
}
</style>





