// import MD5 from 'md5'

async function verifyToken(ctx, next) {
  const clientToken = ctx.header.authorization;
  console.log('clientToken', clientToken);
  if (!clientToken) {
    ctx.status = 403;
    ctx.body = {
      code: -1,
      message: '无权限访问'
    };
    return
  }
  await next()
}

module.exports = { verifyToken };
