<template>
  <div class="Step">
    <div>Шаг №{{step.id}}</div>
    <div>{{step.staticText}}</div>
    <div class="question">
      <a href="javascript://" v-for="item in step.question" track-by="id" v-bind:key="item.id" v-if="step && step.question" @click.stop="stepNext(item)">{{item.text}}</a>
    </div>
  </div>
</template>
<script>
// Получаем объект вида
// {
//   "id": 1,
//   "staticText": "Дойдя до Рижской я свернул с прямого как стрела Проспекта Мира в сторону Гиляровского и пошел дальше дворами.\n Еще с вечера небо плотно затянуло тяжелыми мрачными облаками и сейчас, далеко за полночь, ночная мгла была практически абсолютной. И это было не только на руку. Когда я добрался до Олимпийского начал моросить мелкий дождь. Я запахнул плащ, натянул поглубже шляпу и свернул алево, обратно на проспект.\n Бывший когда-то оживленным, перекресток сейчас был забит стоящими в беспорядке ржавеющими автомобилями, мусором да трупами бродячих собак.",
//   "question": [
//     { "id": 1, "text": "Странно, почему они так не любили собак?"},
//     { "id": 2, "text": "Я мог бы пойти сразу напрямки"}
//   ]
// }

export default {
  name: 'Step',
  data () {
    return {}
  },
  computed: {
    step () {
      return this.$store.getters.getStep
    }
  },
  methods: {
    stepNext: function (question) {
      // Переход на следующий шаг, передаем id вопроса дальше
      this.$store.dispatch('setModel', {'book': this.step.book, 'chapter': this.step.chapter, 'step': question.go})
    }
  }
}
</script>

<style>
</style>


