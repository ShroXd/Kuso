<template>
  <header class="page-header">
    <div class="page-header-container">
      <router-link :to="{name: 'index'}"><img src="../assets/img/logo.png"
             width="50"></router-link>
      <!-- <router-link :to="{name: 'giud'}">组件</router-link> -->
    </div>
  </header>
</template>

<style lang="scss">
@import "../assets/scss/color.scss";

@media (prefers-color-scheme: dark) {
  .page-header {
    background: var(--sys_page_background);
  }
}

@media (prefers-color-scheme: light) {
  .page-header {
    box-shadow: 0 1px 6px 0 var(--sys_shadow);
  }
}

.page-header {
  position: relative !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 7vh;
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 3rem;
  }
}
</style>
