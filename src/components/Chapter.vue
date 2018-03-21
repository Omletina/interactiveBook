<template>
  <div>
    <h2>Глава №{{ chapter.id }} - название: {{ chapter.name }}</h2>
    <Step></Step>
  </div>
</template>

<script>
import Step from '@/components/Step'
export default {
  name: 'Chapter',
  components: {
    Step
  },
  data () {
    return {}
  },
  computed: {
    chapter () {
      return this.$store.getters.getChapter
    }
  },
  methods: {
    // actionChapter: function () {
    //   // Логика взятия нужного шага и отправка его дальше
    //   return this.chapter && this.chapter.steps && this.chapter.steps[0] ? this.chapter.steps[0] : {}
    // }
  }
}
</script>

<style>
</style>
