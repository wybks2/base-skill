// axios 是基于promise用于浏览器和nodejs的http客户端，本质上也是对原生xhr的封装，是promise的实现版本
// 1. 从浏览器中创建xmlHrrpRequest
// 2. 支持promiseApi
// 3. 客户端防止csrf
// 4. 提供了并发请求的接口
// 5. node.js 创建http请求
// 6. 拦截请求和响应
// 7. 转换请求和响应数据
// 8. 取消请求
// 9. 自动转换json数据

// fetch 语法简洁且更加语义化
// 基于标准promise实现, 支持async/await
// 同构方便, 使用isomorphic-fetch
// 什么是同构
// 更加底层，提供api丰富（request response）
// 脱离xhr，是新的规范

// fetch相当于是原生的xhr

// 1 手写一个ajax
// 2 基于promise手写ajax 简易的axios