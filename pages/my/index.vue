<template>
  <div id="my">
    <user-info :user="user" />
    <div class="main">
      <div class="system">
        <h5>系统设置</h5>
        <b-row class="sys-control-group">
          <b-col cols="3">
            <i class="fa fa-moon-o"></i>
            <p>黑夜模式</p>
          </b-col>
          <b-col cols="3">
            <i class="fa fa-language"></i>
            <p>English</p>
          </b-col>
        </b-row>
      </div>
      <div @click="go2safe()" class="action-item">
        <span>账号与安全</span>
        <i class="fa fa-angle-right"></i>
      </div>
      <div class="action-item">
        <span>帮助与反馈</span>
        <i class="fa fa-angle-right"></i>
      </div>
      <div
        @click="go2about()"
        class="action-item"
      >
        <span>关于软件之家</span>
        <span>
          版本1.0.0
          <i class="fa fa-angle-right"></i>
        </span>
      </div>
    </div>
    <b-button
      @click="signOut()"
      class="sign-out-btn"
      variant="warning"
    >
      退出登陆
    </b-button>
  </div>
</template>

<script>
import { BButton, BRow, BCol } from 'bootstrap-vue'
import UserInfo from '@/components/user/UserInfo.vue'
export default {
  name: 'My',
  components: {
    BRow,
    BCol,
    UserInfo,
    BButton
  },
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    const user = this.$cookiz.get('user')
    let token = ''
    if (user) {
      this.user = user
      token = user.token
    }
    if (!token) {
      this.$router.push('/login')
    }
  },
  methods: {
    signOut () {
      localStorage.removeItem('user')
      const user = {
        token: '',
        name: '',
        coverImgUrl: ''
      }
      this.$store.commit('setUser', user)
      this.$router.push('/login')
    },
    go2about () {
      window.open('https://github.com/smallMote/SoftwareHouse.git')
    },
    go2safe () {
      this.$router.push('/my/safe')
    }
  }
}
</script>

<style lang="stylus" scoped>
#my
  position relative
  min-height calc(100vh - 6rem)
.main
  padding 1rem
  border-radius 1rem 1rem 0 0
  transform translateY(-1rem)
  background #ffffff
.sign-out-btn
  width: calc(100% - 2rem)
  position absolute
  bottom: 0
  left: 50%
  transform translateX(-50%)
.system
  /deep/ .row
    margin-right: 0
    margin-left: 0
  margin-bottom: 2rem
  .sys-control-group
    margin-top: 1rem
    text-align center
  .fa
    font-size 1.5rem
.action-item
  display flex
  justify-content space-between
  align-items center
  line-height 3rem
  border-bottom 1px solid #eeeeee
</style>
