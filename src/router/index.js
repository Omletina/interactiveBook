import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/views/MainPage'
import Download from '@/views/Download'
import Save from '@/views/Save'
import ReadingPage from '@/views/ReadingPage'

import Hello from '@/components/Hello'
import ChapterList from '@/components/ChapterList'
import Step from '@/components/Step'
import Chapter from '@/components/Chapter'

Vue.use(Router)

export default new Router({
  routes: [
    // страницы
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/download',
      name: 'Download',
      component: Download
    },
    {
      path: '/save',
      name: 'Save',
      component: Save
    },
    {
      path: '/reading',
      name: 'ReadingPage',
      component: ReadingPage
    },
    // компоненты
    {
      path: '/chapters',
      name: 'ChapterList',
      component: ChapterList
    },
    {
      path: '/chapter',
      name: 'Chapter',
      component: Chapter
    },
    {
      path: '/step',
      name: 'Step',
      component: Step
    }
  ]
})
