<template>
  <div class="personal">
    <header class="header">
      <div class="avatar">
         <img src="https://avatars2.githubusercontent.com/u/16096724?s=460&v=4" alt="">
      </div>
      <div class="userinfo">
        <h4 class="username">小可爱</h4>
        <p class="tel">133****9520</p>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "personal",
  data: () => ({
    title: 'hello personnal'
  })
}
</script>
<style lang="stylus">
  @import '~common/stylus/variable.styl'
  .personal {
    .header {
      display: flex
      align-items: center
      width: 100%
      height: 2.88rem
      background: url('./images/header.png') no-repeat
      background-size: 100% 2.88rem
      .avatar {
        width: 1.7rem
        height: 1.7rem
        margin: 0 .3rem 0 .5rem
        padding: 3px
        border-radius: 50%
        background-color: rgba(255, 255, 255, .4)
        img {
          width: 100%
          height: 100%
          border-radius: 50%
        }
      }
      .userinfo {
        flex: 1
        color: $color-text
        font-size: 0
        .username {
          font-size: 18px
        }
        .tel {
          display: inline-block
          margin-top: .2rem
          padding: 5px 10px
          border-radius: 20px
          background-color: rgba(255, 255, 255, .4)
          font-size: 14px
          font-weight: 350
        }
      }
    }
  }
</style>
