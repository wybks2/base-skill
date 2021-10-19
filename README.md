# base-skill
之前的东西太乱了，重新分类整理,以后分类整理。

## 本仓库内容
1. leetcode 算法和数据结构相关  
2. js编码题以及api实现原理
3. 设计模式
4. http 网络请求

#### 8.27 打卡 设计模式--策略模式


#### 前端_小牛_到犀牛

#### 
> 精通
1. vue
>> vue动态路由 异步路由
2. 性能优化
3. webpack 前端工程化
4. js
> 手写

> 熟悉 了解
1. react
2. node 简单操作数据库
3. 数据结构以及算法
> 正则


url重定向


1. diff算法


2. http1.0 跟 http1.1
> 缓存处理, 
>> http1.0 if-modified-since, expires
>> 
> 持续连接
>> 新的请求头 connection请求头 keep-alive  close关闭连接
>> 允许在持久连接上使用请求管道，对于持久连接的又一个性能优化（问题，http队头阻塞）
> 带宽优化及网络连接的使用 range头域，允许只请求资源的某个部分，即返回码是206
> 错误通知的管理 新增了一些错误状态相应码
> host

3. css长度单位 vw px em rem 百分比
> em与rem rem根据根元素字体大小 em根据目标元素字体大小

4. 定义一个object的属性
> 1. 点语法
> 2. defineproperty
> 3. 直接赋值

5. 浏览器的缓存
> 强缓存与协商缓存
>

6. 

7. 具体的状态码
200:  正常处理被返回成功
204 no content: 成功无内容返回
206 范围请求
301： 永久重定向
302:  临时重定向,请求资源被分配了新的url
303： 请求资源被分配了新的url, 应使用get方法定向获取
304: 客户端发送附带条件
307： 临时重定向,类似于303，但是不会从post变为get
400： bad request 请求报文中存在语法错误
401 未经许可，需要通过http认证
403 token出问题 访问权限出现问题
404 请求不到资源
500 web应用有bug
503- 服务器超载，无法处理请求
### http2/3/1 (https://zhuanlan.zhihu.com/p/337196435)
8. http2的更新（同一个域名只能有一个tcp连接，某个请求导致了tcp的队头阻塞，所有请求都会受到影响）
>> tcp 握手时长，一种可靠通信协议，网络延迟RTT
> http2 主要解决的是效率问题, 最核心的技术是多路复用， 二进制分桢，header压缩，服务器端推送.....
> http2 还是基于tcp实现。
>> 1. 桥头阻塞， 解决了http的桥头阻塞问题，但是没有解决tcp的桥头阻塞问题
> 没有推广的原因

> [http3](https://zhuanlan.zhihu.com/p/143464334)

>> http3 解决了tcp头部阻塞的问题，使用基于udp的QUIC。()
>>> 更快的rtt建立连接,没有了tlc
>>> 连接迁移 tcp: 基于四元组（源ip，源端口，目的ip，目的端口） quic基于connectionId
>>> 桥头阻塞
>>> 拥塞控制
>> 扩展
9. vue怎么定义全局的方法
> 1. prototype
> 2. vue.use
> 3. 全局mixin
10. vue中渲染大数据
> 1. 使用object.freeze 固定的非响应式数据
> 2. 虚拟列表
> 3. ssr

11. webpack tree-shark

12. webpack 5.0 
>
>
>
13. webpack热更新实现
> 


14. node读取大文件
> 具体分片操作

15. node异常监听 恢复
> 恢复， 异常监听
> 多进程怎么通信
> 事件模块
16. csrf攻击实现
> csrf 跨站请求伪造, 攻击者诱导受害者进入第三方网站,向被攻击网站发送跨站请求
> 实现
> 预防

17. vue双向绑定原理
> v-model实际上就是v-bind:value 加上oninput事件的语法糖