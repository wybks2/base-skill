1. HTTP的队头阻塞
> http只能严格串行返回请求，不允许一个连接上的多个响应数据交错到达，因而一个响应必须完全返回后，下一个响应才会开始传输（管线化请求的队头阻塞）
>> HTTP/2 并没有解决 TCP 的队首阻塞问题，它仅仅是通过多路复用解决了以前 HTTP1.1 管线化请求时的队首阻塞。
>> 比如 HTTP/1.1 时代建立一个 TCP 连接，三个请求组成一个队列发出去，服务器接收到这个队列之后会依次响应，一旦前面的请求阻塞，后面的请求就会无法响应。
>> HTTP/2 是通过分帧并且给每个帧打上流的 ID 去避免依次响应的问题，对方接收到帧之后根据 ID 拼接出流，这样就可以做到乱序响应从而避免请求时的队首阻塞问题。但是 TCP 层面的队首阻塞是 HTTP/2 无法解决的（HTTP 只是应用层协议，TCP 是传输层协议），TCP 的阻塞问题是因为传输阶段可能会丢包，一旦丢包就会等待重新发包，阻塞后续传输，这个问题虽然有滑动窗口（Sliding Window）这个方案，但是只能增强抗干扰，并没有彻底解决。

### tcp协议
1. 一种面向连接的可靠的传输层协议，超时与重传机制
2. 慢启动
3. 快速重传和快速恢复