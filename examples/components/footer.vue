<template>
  <div class="page-footer">
    <div class="page-footer-container">
      <div class="avatars">
        <a href="https://www.bebopser.com/" target="_blank">
          <img src="https://bebopfzj.oss-cn-hangzhou.aliyuncs.com/uPic/2020-03-09-bxgaD3.png"
               width="100">
        </a>
      </div>
      <div class="info">
        <div>
          <span class="title">Author</span>
          <span class="filed">Spike</span>
        </div>
        <div>
          <span class="title">Email</span>
          <span class="filed">shroxdf@gmail.com</span>
        </div>
        <div>
          <span class="title">Blog</span>
          <span class="filed">www.bebopser.com</span>
        </div>
      </div>
      <div class="github">
        <a href="https://github.com/ShroXd" target="_blank">
          <img src="https://bebopfzj.oss-cn-hangzhou.aliyuncs.com/uPic/2020-04-03-9hUP1g.png"
               width="100">
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/color.scss";
.page-footer {
  width: 100%;
  padding: 1.5rem 1rem;
  box-shadow: 0 10px 40px 0 $_sys_component_shadow;
  position: relative;
  bottom: 0;
  &-container {
    display: grid;
    justify-items: center;
    height: 100%;
    grid-template-columns: 20% 60% 20%;
    .info {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-self: start;

      .title {
        display: inline-block;
        width: 3.8rem;
      }

      & div {
        flex-basis: 100%;
      }

      & .title {
        color: $_sys_color_gray;

        &:after {
          content: ": ";
          color: $_sys_color_gray;
        }
      }
    }
  }
}
</style>
