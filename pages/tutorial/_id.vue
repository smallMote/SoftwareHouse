<template>
  <div id="tutorial">
    <div class="logo">
      <b-img-lazy :src="product.software.coverImgUrl" :alt="product.software.seo" width="64" />
    </div>
    <h5 class="title">{{ product.title }}</h5>
    <section v-html="product.content" class="content"></section>
    <!-- 喜欢 -->
    <comment-list :list="commentList.data" :total="commentList.count" />
  </div>
</template>

<script>
import { BImgLazy } from 'bootstrap-vue'
import axios from 'axios'
import ProductAPI from '@/api/module/product'
import CommentList from '@/components/CommentList.vue'

const productAPI = new ProductAPI()
export default {
  name: 'Tutorial',
  layout: 'TopControl',
  components: {
    BImgLazy,
    CommentList
  },
  data () {
    return {
      tutorial: {
        content: 'none'
      },
      commentList: [],
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
  },
  async asyncData ({ params }) {
    const id = params.id
    const results = await axios.all([
      productAPI.fetchTutorial(id),
      productAPI.fetchCommentList(id)])
    const product = results[0].data.data
    const commentList = results[1].data
    return {
      product,
      commentList
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
