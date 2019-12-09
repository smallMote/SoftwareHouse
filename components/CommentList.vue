<template>
  <div id="comment-list">
    <b-media class="comment">
      <template v-slot:aside>
        <b-img blank blank-color="#ccc" width="32"></b-img>
      </template>
      <section class="content">
        <b-form-textarea
          v-model="content"
          rows="3"
          max-rows="8"
          placeholder="留言通过审核，所有人可见"
        />
        <div class="action">
          <b-button
            class="submit-btn"
            variant="success"
            size="sm"
          >
            提交
          </b-button>
        </div>
      </section>
    </b-media>
    <b-media v-for="item in list" :key="item.id" class="comment">
      <template v-slot:aside>
        <b-img blank blank-color="#ccc" width="32"></b-img>
      </template>
      <h5 class="title">
        <span>{{ item.user.account }}</span>
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
import { BMedia, BImg, BFormTextarea, BButton } from 'bootstrap-vue'
export default {
  name: 'CommentList',
  components: {
    BImg,
    BMedia,
    BButton,
    BFormTextarea
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      commentList: [],
      content: ''
    }
  },
  computed: {
    submitContent () {
      return this.content && this.content.trim()
    }
  },
  methods: {
    like (id) {
      this.list.map((item, index, arr) => {
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
  },
  watch: {
    content (val) {
      const str = val + '\n\n'
      if (val) {
        this.content = str
      }
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
.content
  .action
    text-align right
    .submit-btn
      margin-top: 1rem
</style>
