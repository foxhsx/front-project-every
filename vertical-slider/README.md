### 展示效果

[双向轮播图](http://project-demo.ihsxu.com/vertical-slider/)

### HTML 结构

1. 页面主要有三个部分组成

   a. 左侧滑动区域

   b. 右侧滑动区域

   c. 按钮模块

2. 左侧区域的构成非常简单，主要是四个子元素竖直排列
3. 右侧的部分也左侧是差一位对应的，即 0:1，1:2 这样，展示内容为图片
4. 按钮区域是定位到左右两侧区域的中间线上，左侧的按钮是一个向下的箭头，右侧的按钮是一个向上的箭头

### CSS

样式中的布局，基本上还是使用相对定位和绝对定位以及弹性布局来构成的。

### JS

监听左右两侧按钮的点击事件，调用 `changeSlide` 方法并传入对应的方向 key，然后动态修改左右两侧区域的 `transform` 值。
