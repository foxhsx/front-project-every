### 展示效果

[永动机](http://project-demo.ihsxu.com/kinetic-loader/)

### HTML 结构

只有一个 DIV 盒子

### CSS

1. 唯一的元素做容器，并且给一个相对定位
2. 使用其伪元素 `::before` 和 `::after` 来做两个三角形
3. 使用边框来做三角形，其中的一个三角形的初始角度旋转 90 度
4. 并给两个伪类元素加上 `animation` 动画
5. 动画的主要效果就是在不同的阶段进行旋转

### JS

没有 JS，纯 CSS 动画实现
