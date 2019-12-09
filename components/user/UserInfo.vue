<template>
  <div id="user-info">
    <div class="info">
      <div class="user">
        <img :src="userInfo.coverImgUrl" alt="软件之家">
        <span>{{ user.nickName || user.account }}</span>
      </div>
      <span class="contact">
        <i class="fa fa-volume-control-phone"></i>
      </span>
    </div>
    <ul class="count">
      <li>
        <nuxt-link to="/" tag="span">
          <i class="fa fa-cloud-download"></i>
          <p>下载</p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" tag="span">
          <i class="fa fa-heart-o"></i>
          <p>喜欢</p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" tag="span">
          <i class="fa fa-comment-o"></i>
          <p>评论</p>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      userInfo: {
        name: 'Luck Yang',
        like: 199,
        download: 99,
        comment: 86,
        coverImgUrl: require('@/static/images/user/user-cover.png')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~assets/stylus/minix"
#user-info
  background #ffc107
  padding 1rem
.info
  display flex
  align-items center
  justify-content space-between
  img
    border-radius 50%
    rect(4rem)
    margin-right: 0.5rem
  span
    font-size 2rem
  .user
    display flex
    align-items center
.count
  display flex
  align-items center
  text-align center
  justify-content space-between
  margin-top: 2rem
  margin-bottom: 2rem
  li
    flex 1
  .fa
    font-size 2rem
</style>
