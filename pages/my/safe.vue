<template>
  <div id="my-safe">
    <top-control />
    <div class="container">
      <div
        v-if="!showPwdBox"
        @click="showPwdBox = true"
        class="safe-item animated fadeIn"
      >
        <span>修改密码</span>
        <i class="fa fa-angle-right"></i>
      </div>
      <div
        v-if="showPwdBox"
        class="update-password animated fadeIn"
      >
        <div class="pwd-item">
          <b-form-input
            placeholder="请输入新密码"
          />
        </div>
        <div class="pwd-item">
          <b-form-input
            placeholder="确认新密码"
          />
        </div>
        <div class="btn-box">
          <b-button variant="warning">确定</b-button>
          <b-button @click="showPwdBox = false">取消</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BFormInput, BButton } from 'bootstrap-vue'
import TopControl from '../../layouts/TopControl'
export default {
  name: 'MySafe',
  components: {
    BButton,
    TopControl,
    BFormInput
  },
  data () {
    return {
      showPwdBox: false
    }
  }
}
</script>

<style lang="stylus" scoped>
#my-safe
  display block
.safe-item
  display flex
  align-items center
  justify-content space-between
  border-bottom 1px solid #ccc
  padding .5rem 0
.pwd-item
  margin-bottom: 1rem
.btn-box
  text-align center
</style>
