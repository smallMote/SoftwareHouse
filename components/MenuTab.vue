<template>
  <div id="menu-tab">
    <ul class="menu-tab-group">
      <nuxt-link tag="li" to="/home" class="menu-item">
        <i class="fa fa-home"></i>
        <p>首页</p>
      </nuxt-link>
      <nuxt-link tag="li" to="/my" class="menu-item">
        <i class="fa fa-user"></i>
        <p>我的</p>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuTab',
  data () {
    return {
      active: true
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.menu-tab-group
  width: 100%
  height 4rem
  display flex
  align-items center
  justify-content space-between
  background #ffffff
  overflow hidden
  border-top: 1px solid #ccc
  box-sizing border-box
  li.menu-item
    flex 1
    text-align center
    font-size 0.75rem
    font-weight light
    .fa
      font-size 1.5rem
    &.nuxt-link-active
      color #3b8070
      font-weight bolder
</style>
