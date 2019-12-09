import Crud from '../crud'

export default class ProductAPI extends Crud {
  constructor () {
    super('/product')
  }

  fetchHomeList () {
    return super.fetch('/product/filter', {
      filters: 'id,name,desc,cover_img_url,download,like,contentId'
    })
  }

  fetchTutorial (id) {
    return super.fetchDetailUrl(id, '/tutorial')
  }

  fetchCommentList (softwareId) {
    return super.fetch('/comment', { softwareId })
  }
}
