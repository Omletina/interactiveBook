<template>
  <div class="ChapterList">
    <h1>Список глав</h1>
    <a href="#" @click.stop="loadBook">Load Users</a>
    <ul class="chapter-list">
      <li v-for="item in chapterList" track-by="id" v-bind:key="item.id">
        <a href="javascript://">{{ item.name }}</a>
      </li>
    </ul>
    <div v-for='note in notes' v-bind:key="note.id">{{ note.text }}</div>
    <button @click='addNew'>Добавить заметку</button>
  </div>
</template>
<script>
// Компонент не используется
export default {
  name: 'ChapterList',
  computed: {
    notes () {
      debugger
      console.log(this.$store.getters.model)
      return this.$store.getters.model
    }
  },
  data () {
    return {
      debug: true,
      msg: 'Йахааа',
      book: null,
      chapterList: null
    }
  },
  methods: {
    loadBook: function () {
      this.$http.get('http://localhost:3000/books/1')
        .then((res) => {
          if (res && res.data) {
            this.book = res.data
            this.chapterList = this.book && this.book.chapters ? this.book.chapters : null
            console.log(this.book)
            console.log(this.chapterList)
          }
        }, (err) => {
          console.log(err)
        })
    },
    addNew () {
      debugger
      // this.$store.dispatch('SetModelLocal', { key: 'name', value: 'book-1' })
    }
  }
}
</script>

<style>
.chapter-list {
  text-align: left;
}
</style>
