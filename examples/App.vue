<template>
  <div id="app">
    <main-header></main-header>
    <div class="docs"
         v-if="!isIndex">
      <side-navi></side-navi>
      <router-view></router-view>
    </div>
    <template v-else>
      <router-view></router-view>
    </template>
    <main-footer v-if="!isIndex"></main-footer>
  </div>
</template>

<script>
import mainHeader from './components/header'
import mainFooter from './components/footer'
import sideNavi from './components/side-navi'

export default {
  name: 'App',
  components: {
    mainHeader,
    mainFooter,
    sideNavi
  },
  watch: {
    $route () {
      this.isIndex = this.$route.name === 'index'
    }
  },
  data () {
    return {
      isIndex: true
    }
  }
}
</script>
