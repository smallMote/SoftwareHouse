<template>
  <div>
    <b-form-input
      v-model="account"
      class="login-item"
      placeholder="请输入手机号码"
    />
    <b-form-input
      v-model="password"
      class="login-item"
      type="password"
      placeholder="请输入密码"
    />
    <b-button
      @click="login"
      class="login-btn login-item"
      variant="warning"
    >
      登 陆
    </b-button>
  </div>
</template>

<script>
import { BButton, BFormInput } from 'bootstrap-vue'
import Cookies from '@/utils/cookeis-util'
import UserAPI from '@/api/module/user'
const userAPI = new UserAPI()
export default {
  name: 'Login',
  components: {
    BButton,
    BFormInput
  },
  data () {
    return {
      account: '17772430935',
      password: '123'
    }
  },
  methods: {
    async login () {
      const account = this.account
      const password = this.password
      if (!account || !password) {
        return
      }
      const result = await userAPI.login(account, password)
      if (result && result.data.code === 0) {
        Cookies.set('user', result.data.data)
        this.$router.push('/my')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-item
  margin-bottom: 1rem
.login-btn
  width: 100%
  margin-top: 3rem
</style>
