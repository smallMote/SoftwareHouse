<template>
  <div id="welcome">
    <login />
    <div class="tips">
      <p>软件之家</p>
      <p>一切安装不再是问题</p>
    </div>
    <b-badge
      @click="$router.push('/home')"
      variant="light"
      class="jump-btn"
    >
      跳过
    </b-badge>
  </div>
</template>

<script>
import { BBadge } from 'bootstrap-vue'
import Login from '@/components/Logo'
export default {
  name: 'Welcome',
  components: {
    Login,
    BBadge
  }
}
</script>

<style lang="stylus" scoped>
#welcome
  height: 100vh
  width: 100vw
  display flex
  align-items center
  flex-direction column
  justify-content center
  position relative
  .tips
    text-align center
    margin 1.5rem 0
  .jump-btn
    position absolute
    top: 1rem
    right: 1rem
    cursor pointer
</style>
