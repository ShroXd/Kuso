<template>
  <div class="side-navi">
    <div v-for="(title, index) in Object.keys(data)"
         :key="index">
      <div class="main-title">{{title}}</div>
      <div v-for="(navi, index) in data[title]"
           :key="index">
        <router-link :class="$route.name === navi.name ? 'navi-title-active' : 'navi-title'" v-if="navi.name"
                     :to="{name: navi.name}">{{navi.desc}}</router-link>
        <template v-else>
          <div class="sub-title">{{navi.desc}}</div>
          <div v-for="(item, index) in navi.items"
               :key="index">
            <router-link :class="$route.name === item.name ? 'navi-title-active' : 'navi-title'" :to="{name: item.name}">{{item.desc}}</router-link>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import navConfig from '../nav.config.json'

export default {
  name: 'Side-Navi',
  data () {
    return {
      data: navConfig
    }
  }

}
</script>

<style lang="scss">
@import "../assets/scss/color.scss";
.side-navi {
  width: 15vw;
  padding: 1rem;
  border-right: 1px solid var(--sys_dividers);

  .main-title {
      font-size: .8rem;
      color: var(--sys_title);
      line-height: 3.5rem;
  }

  .sub-title {
      font-weight: 500;
      color: var(--sys_primary-text);
      line-height: 2.5rem;
  }

  .navi-title {
      font-size: .9rem;
      text-decoration: none;
      color: var(--sys_secondary-text);
      line-height: 1.5rem;
  }

  .navi-title-active {
      font-size: .9rem;
      text-decoration: none;
      color: var(--sys_base_color_blue);
      line-height: 1.5rem;
  }
}
</style>
