<template>
  <div id="keyword-panel">
    <div class="hot">
      <h6>热门搜索</h6>
      <section>
        <b-badge
          v-for="(item, index) in hot"
          :key="`${item}-${index}`"
          @click="search(item)"
          variant="light"
          class="badge"
        >
          {{ item }}
        </b-badge>
      </section>
    </div>
    <div class="history">
      <h6>历史搜索</h6>
      <section>
        <b-badge
          v-for="(item, index) in history"
          :key="`${item}-${index}`"
          @click="search(item)"
          variant="light"
          class="badge"
        >
          {{ item }}
        </b-badge>
      </section>
    </div>
  </div>
</template>

<script>
import { BBadge } from 'bootstrap-vue'
export default {
  name: 'KeywordPanel',
  components: {
    BBadge
  },
  data () {
    return {
      hot: ['Adobe'],
      history: ['办公']
    }
  },
  methods: {
    search (keyword = '') {
      this.$emit('search', keyword)
    }
  }
}
</script>

<style lang="stylus" scoped>
#keyword-panel
  margin 1.2rem
  .hot,.history
    margin-bottom: 2rem
    .badge:not(:last-child)
      margin 0 0.5rem 0.5rem 0
</style>
