## BFC 块级格式化上下文
#### 渲染规则
1. bfc,垂直方向上的margin会发生重叠，根元素就是一个bfc元素
2. bfc是一个独立容器，内外不影响
3. bfc不与浮动元素重叠
4. bfc元素计算高度时，浮动元素也会参与计算

#### 创建bfc
1. overflow: hidden/auto
2. display: table-cell...
3. float 不为none
4. position： 不为static relative

> 因为margin合并是块级元素特有的，而inline-类的元素对于布局来讲算是行内元素，对于自身内部来说才算块元素（也就是说对于它的兄弟和祖先来说，它其实是个行内元素）
