import Crud from '../crud'

export default class ShopModule extends Crud {
  constructor () {
    super('/shop')
  }

  searchShopList (keywords) {
    return super.fetch('/search/shop', { keywords })
  }
}
