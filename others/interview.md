1. url输入
2. 查询浏览器缓存，缓存是否过期
3. dns解析url地址，获取对应的ip
4. 三次握手建立连接
5. http发出请求
6. http获得响应，在浏览器上渲染
7. 四次挥手，断开连接

### DNS解析





### css

1. flex 控制弹性元素拉伸以及收缩
> flex-grow  item拉伸规则,尺寸占比
> flex-shrink 超出时候，item的缩小规则
> flex-basis 主轴方向的初始大小, auto, 0, 100px; 比width优先级高
```css
  /* 指定<'width'> */
  flex-basis: 10em;
  flex-basis: 3px;
  flex-basis: auto;

  /* 固有的尺寸关键词 */
  flex-basis: fill;
  flex-basis: max-content;
  flex-basis: min-content;
  flex-basis: fit-content;

  /* 在flex item内容上的自动尺寸 */
  flex-basis: content;

  /* 全局数值 */
  flex-basis: inherit;
  flex-basis: initial;
  flex-basis: unset;

```