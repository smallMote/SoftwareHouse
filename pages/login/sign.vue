<template>
  <div id="sign-in" :class="['animated', `${isClose ? 'slideOutDown' : 'slideInUp'}`]">
    <div class="control-bar">
      <span @click="back">
        <i class="fa fa-close"></i>
      </span>
      <span>帮助</span>
    </div>
    <div class="main">
      <h5 class="title">欢迎登陆软件之家</h5>
      <div class="input-group">
        <span>
          +86
          <i class="fa fa-angle-right"></i>
        </span>
        <label for="account-input">
          <input id="account-input" type="text" placeholder="请输入手机号码">
        </label>
      </div>
      <p class="tips">未注册的手机号会自动创建账号</p>
      <b-button class="code-btn" variant="warning" disabled>
        获取短信验证码
      </b-button>
      <div class="other-sign">
        <div class="sign-item">
          <i class="fa fa-wechat"></i>
          <p>微信</p>
        </div>
        <div class="sign-item">
          <i class="fa fa-qq"></i>
          <p>QQ</p>
        </div>
      </div>
    </div>
    <div class="footer">
      ©️Copyright
    </div>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
export default {
  name: 'Sign',
  components: {
    BButton
  },
  data () {
    return {
      isClose: false,
      loginInfo: {
        account: '',
        code: ''
      }
    }
  },
  methods: {
    back () {
      this.isClose = true
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.tips
  color #6e6e6e
#sign-in
  width: 100vw
  height: 100vh
  position fixed
  top: 0
  left: 0
  background #eeeeee
  z-index 9
  padding 1rem
.control-bar
  width: 100%
  display flex
  align-items center
  justify-content space-between
  .fa
    font-size 1.5rem
.main
  width: 100%
  padding 2rem
  .title
    margin-bottom: 4rem
    font-size 2rem
.input-group
  display flex
  align-items center
  border-bottom 1px solid #ccc
  padding 0.5rem 0
  label
    width: calc(100% - 3.5rem)
  &>span
    width 3.5rem
  #account-input
    width: 100%
    background none
    outline none
    border none
    font-size 1.3rem
.code-btn
  width: 100%
  margin: 4rem 0
.other-sign
  display flex
  align-items center
  justify-content space-around
  .fa
    font-size 2rem
  .fa-wechat
    color #00b600
  .fa-qq
    color deepskyblue
.footer
  position absolute
  bottom: 0
  width: 100%
  min-height 4rem
  text-align center
</style>
