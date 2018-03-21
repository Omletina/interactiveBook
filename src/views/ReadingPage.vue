<template>
  <div class="readingPage">
    <h1>Страница чтения</h1>
    <div>Название книги: {{book.name}}</div>
    <Chapter></Chapter>
    <!-- <ChapterList></ChapterList> -->
  </div>
</template>

<script>
import Chapter from '@/components/Chapter'
export default {
  name: 'ReadingPage',
  components: {
    Chapter
  },
  data () {
    return {}
  },
  computed: {
    book () {
      return this.$store.getters.getCurrentBook
    }
  },
  methods: {
    getCurrentBook: function () {
      // Запрашиваем данные о выбранной книге, с помощью модели
      // this.$store.dispatch('getCurrentBook')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
