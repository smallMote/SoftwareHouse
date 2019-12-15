<template>
  <div id="comment-list">
    <div v-if="!user.token" class="tips-login">
      <b-button
        @click="go2login"
        size="sm"
        variant="outline-warning"
      >
        登陆后可评论
      </b-button>
    </div>
    <b-media v-if="user.token" class="comment">
      <template v-slot:aside>
        <b-img-lazy v-if="user.coverImgUrl" :src="user.coverImgUrl" width="32" />
        <b-img v-else blank blank-color="#ccc" width="32"></b-img>
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
import { BMedia, BImg, BFormTextarea, BButton, BImgLazy } from 'bootstrap-vue'
export default {
  name: 'CommentList',
  components: {
    BImg,
    BMedia,
    BButton,
    BImgLazy,
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
    user () {
      return this.$cookiz.get('user')
    },
    submitContent () {
      return this.content && this.content.trim()
    }
  },
  methods: {
    go2login () {
      this.$router.push('/login')
    },
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
.tips-login
  text-align center
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
