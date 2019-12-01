<template>
  <div id="tutorial">
    <div class="logo">
      <b-img-lazy :src="product.coverImgUrl" width="64" />
    </div>
    <h5 class="title">{{ product.title }}</h5>
    <section v-html="product.content" class="content"></section>
    <comment-list />
  </div>
</template>

<script>
import { BImgLazy } from 'bootstrap-vue'
import CommentList from '@/components/CommentList.vue'
export default {
  name: 'Tutorial',
  layout: 'TopControl',
  components: {
    BImgLazy,
    CommentList
  },
  data () {
    return {
      product: {
        id: 0,
        name: 'Adobe Photoshop CC 2020',
        like: 990,
        download: 990,
        title: 'Adobe Photoshop CC 2020 安装及破解教程',
        content: '你的完美设计工具',
        coverImgUrl: require('@/static/images/product/ps.png'),
        wangpanUrl: '',
        downloadLink: ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo, .title
  display flex
  justify-content center
.title
  margin-top: 1rem
.content
  margin 2rem 0
</style>
