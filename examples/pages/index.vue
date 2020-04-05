<template>
  <div class="page-index">
    <div class="info-container">
      <img src="../assets/img/logo.png">
      <p>一款瞎 JR 制作的、全靠抄袭的 UI 组件库</p>
    </div>
    <div class="divider"></div>
    <div class="func-container">
      <router-link :to="{name: 'guid'}">开始使用</router-link>
      <a class="github-btn"
         href="https://github.com/ShroXd"
         target="_blank">Github</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.page-index {
  .info-container {
    width: 900px;
    margin: 0 auto 8rem;
    text-align: center;
    padding: 10rem 0 8rem;

    p {
      margin-top: 6rem;
      color: #8994c6;
      font-size: 2rem;
    }
  }

  .divider {
    width: 100%;
    height: 30vh;
    transform: skewY(-4deg);
    position: absolute;
    top: 46rem;
    box-shadow: 0 -10px 20px -2px rgba(29, 29, 31, 0.07);
    z-index: -1;
  }

  .func-container {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 9rem;
    a {
      cursor: pointer;
      color: #fff;
      font-size: 1.2rem;
      background: linear-gradient(90deg, #00aeff 0%, #3369e7 100%);
      box-shadow: 0 2px 6px 0 rgba(51, 105, 231, 0.4);
      display: inline-block;
      width: 11rem;
      height: 3.6rem;
      line-height: 3.6rem;
      border-radius: 2rem;
      text-decoration: none;
      text-align: center;
      justify-self: end;
    }
    .github-btn {
      justify-self: start;
      color: #316de9;
      border: 1px solid #2f6ee9;
      background: #fff;
      box-shadow: none;
    }
  }
}
</style>
