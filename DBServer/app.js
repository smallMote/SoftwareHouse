const Koa = require('koa')
const cors = require('koa2-cors')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
app.use(cors())

const { verifyToken } = require('./middleware/verifyToken')
const index = require('./routes/index')
const users = require('./routes/UserRouter')
const product = require('./routes/product')
const shop = require('./routes/ShopRouter')
const tutorial = require('./routes/TutorialRouter')
const search = require('./routes/SearchRouter')
const comment = require('./routes/CommentRouter')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// token 验证
// app.use(verifyToken)
// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(product.routes(), users.allowedMethods())
app.use(shop.routes(), shop.allowedMethods())
app.use(tutorial.routes(), tutorial.allowedMethods())
app.use(search.routes(), search.allowedMethods())
app.use(comment.routes(), comment.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
