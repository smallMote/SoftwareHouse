<template>
  <div id="top-control">
    <div class="control">
      <span @click="$router.go(-1)" class="back">
        <i class="fa fa-angle-left"></i>
      </span>
      <span @click="share" class="share">
        <i class="fa fa-share"></i>
      </span>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'TopControl',
  methods: {
    share () {
      // console.log(location.href)
    }
  }
}
</script>

<style lang="stylus" scoped>
#top-control
  padding 1rem
.fa-angle-left
  font-size 2rem
.back, .share
  display inline-block
  width 2rem
.share
  text-align right
.control
  display flex
  align-items center
  justify-content space-between
</style>
