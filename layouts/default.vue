<template>
  <div class="default-wallpaper">
    <div class="view">
      <nuxt />
    </div>
    <menu-tab class="menu-tab" />
  </div>
</template>
<script>
import MenuTab from '@/components/MenuTab'
export default {
  components: {
    MenuTab
  },
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  created () {
    this.$store.commit('setUser', this.$cookiz.get('user'))
  }
}
</script>
<style lang="stylus">
@import "~assets/stylus/base.styl"
@import "~assets/stylus/page-change"
.default-wallpaper
  position relative
  width: 100%
  .view
    padding-bottom: 4rem
  .menu-tab
    position fixed
    bottom: 0
    width: 100vw
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
