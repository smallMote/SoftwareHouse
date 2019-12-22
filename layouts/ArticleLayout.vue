<template>
  <div id="article-layout">
    <div id="navbar">
      <span @click="$router.go(-1)" class="back">
        <i class="fa fa-angle-left"></i>
      </span>
      <span @click="share" class="share">
        <i class="fa fa-share"></i>
      </span>
    </div>
    <slot></slot>
    <comment-list
      :list="list"
      class="comment-list"
    />
  </div>
</template>

<script>
import CommentList from '../components/CommentList'
export default {
  name: 'ArticleLayout',
  components: {
    CommentList
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    share () {
      // console.log(location.href)
    }
  }
}
</script>

<style lang="stylus" scoped>
#navbar
  padding 1rem
  display flex
  align-items center
  justify-content space-between
.fa-angle-left
  font-size 2rem
.back, .share
  display inline-block
  width 2rem
.share
  text-align right
.comment-list {
  padding 1rem
  margin-top: 2rem
}
</style>
