<template>
  <div id="login" class="animated fadeIn">
    <img :src="require('@/static/images/user/user-bg.svg')" class="nbsp-img" alt="">
    <section>
      <p>登陆后可查看"我的页面"</p>
      <br>
      <b-button @click="$router.push('/login/sign')" size="sm" variant="warning">登陆</b-button>
    </section>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
export default {
  name: 'Login',
  components: {
    BButton
  }
}
</script>

<style lang="stylus" scoped>
#login
  text-align center
  position relative
  min-height calc(100vh - 4rem)
  display flex
  flex-direction column
  align-items center
  justify-content center
img.nbsp-img
  width: 50%
  margin-bottom: 2rem
  opacity 0.1
</style>
