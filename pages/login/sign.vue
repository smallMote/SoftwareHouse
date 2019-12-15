<template>
  <div id="sign-in" :class="['animated', `${isClose ? 'slideOutDown' : 'slideInUp'}`]">
    <div class="control-bar">
      <span @click="back">
        <i class="fa fa-close"></i>
      </span>
      <span>帮助</span>
    </div>
    <div v-if="!showLogin" class="main">
      <h5 class="title">欢迎登陆软件之家</h5>
      <div v-if="!showRegisterBtn" class="input-group">
        <span>
          +86
          <i class="fa fa-angle-right"></i>
        </span>
        <label for="account-input">
          <input
            id="account-input"
            v-model="account"
            type="text"
            placeholder="请输入手机号码"
          >
        </label>
      </div>
      <div v-if="showRegisterBtn" class="input-group code-group">
        <label for="password-input">
          <input
            id="password-input"
            v-model="password"
            autofocus
            type="password"
            placeholder="创建一个新密码"
          >
        </label>
      </div>
      <div v-if="showRegisterBtn" class="input-group code-group">
        <label for="code-input">
          <input
            id="code-input"
            v-model="code"
            type="text"
            placeholder="请输入验证码"
          >
        </label>
      </div>
      <p v-if="!showRegisterBtn" class="tips">未注册的手机号会自动创建账号</p>
      <b-button
        v-if="!showRegisterBtn"
        @click="sendRegisterCode"
        class="code-btn"
        variant="warning"
      >
        获取短信验证码
      </b-button>
      <b-button
        v-else
        @click="register"
        class="code-btn"
        variant="warning"
      >
        注 册
      </b-button>
      <div class="other-sign">
        <div @click="showLogin = true" class="sign-item account-login">
          <i class="fa fa-user-circle-o"></i>
          <p>账号登陆</p>
        </div>
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
    <div v-if="showLogin" class="login-container">
      <h5 class="title">
        软件之家<br>
        让一切变得简单起来
      </h5>
      <login-item />
    </div>
    <div class="footer">
      ©️Copyright 尼奥网
    </div>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import UserAPI from '@/api/module/user'
import LoginItem from '@/components/Login'

const userAPI = new UserAPI()

export default {
  name: 'Sign',
  components: {
    BButton,
    LoginItem
  },
  data () {
    return {
      isClose: false,
      showRegisterBtn: false,
      showLogin: false,
      account: '17772430935',
      code: '',
      password: '123'
    }
  },
  methods: {
    back () {
      this.isClose = true
      this.$router.go(-1)
    },
    async register () {
      const regResult = await userAPI.register(this.account, this.password)
      if (regResult) {
        const loginResult = await userAPI.login(this.account, this.password)
        const token = loginResult.data.data
        const user = {
          token,
          name: this.account,
          coverImgUrl: require('@/static/images/user/user-cover.png')
        }
        localStorage.setItem('user', user)
        this.$store.commit('setUser', user)
      }
    },
    async login () {},
    // 发送注册验证码
    sendRegisterCode () {
      this.showRegisterBtn = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.tips
  color #6e6e6e
.sign-item
  text-align center
  &.account-login
    .fa
      color #20a0ff
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
.main,
.login-container
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
  #account-input,
  #code-input,
  #password-input
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
