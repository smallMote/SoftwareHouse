module.exports = {
  OK: 200,
  NO_CONTENT: 204, // 请求成功，但是没有返回资源
  BAD_REQUEST: 400, // 请求错误，（比如参数错误）
  FORBIDDEN: 403, // 没有权限（token）
  NOT_FOUND: 404, // 服务器上没有请求的资源
  INTERNAL_SERVER_ERROR: 500, // 服务器内部错误
  SERVICE_UNAVAILABLE: 503 // 超负载
};
