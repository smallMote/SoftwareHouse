<template>
  <div id="comment-list">
    <b-media class="comment" v-for="item in commentList" :key="item.id">
      <template v-slot:aside>
        <b-img blank blank-color="#ccc" width="32"></b-img>
      </template>
      <h5 class="title">
        <span>{{ item.username }}</span>
        <span @click="like(item.id)">
          <i v-if="item.isLike" class="fa fa-thumbs-up"></i>
          <i v-else class="fa fa-thumbs-o-up"></i>
          {{ item.like }}
        </span>
      </h5>
      <section class="content">{{ item.content }}</section>
    </b-media>
  </div>
</template>

<script>
import { BMedia, BImg } from 'bootstrap-vue'
export default {
  name: 'CommentList',
  components: {
    BImg,
    BMedia
  },
  data () {
    return {
      commentList: [
        {
          id: 1,
          username: 'Luck Yang',
          coverImgUrl: '',
          content: '这软件太牛了吧',
          like: 91,
          isLike: false
        },
        {
          id: 2,
          username: 'Luck Yang',
          coverImgUrl: '',
          content: '这软件太牛了吧',
          like: 31,
          isLike: false
        },
        {
          id: 3,
          username: 'Luck Yang',
          coverImgUrl: '',
          content: '这软件太牛了吧',
          like: 11,
          isLike: false
        }
      ]
    }
  },
  methods: {
    like (id) {
      this.commentList.map((item, index, arr) => {
        if (item.id === id) {
          const comment = arr[index]
          comment.isLike = !comment.isLike
          if (comment.isLike) {
            arr[index].like += 1
          } else {
            arr[index].like -= 1
          }
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.comment
  margin-bottom: 2rem
.title
  display flex
  align-items center
  justify-content space-between
  span:last-child
    font-size 1rem
    font-weight lighter
    color deepskyblue
  .fa
    font-size unset
    font-weight bold
</style>
