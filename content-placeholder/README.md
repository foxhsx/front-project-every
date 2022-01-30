### 展示效果

[小小骨架屏](http://project-demo.ihsxu.com/content-placeholder/)

### HTML 结构

这一节，主要是给大家展示一下骨架屏的效果，整体的结构如下：

1. 一个 card 容器，最为根容器
2. 在容器内部由 header 和 content 组成
3. header 的部分很简单，主要是用来填充图片的
4. content 区域主要分为：标题、节选、作者三个部分组成

### CSS

样式部分的主要精髓在于动态的背景效果，这相当于是一个加载的 loading 效果，我们设置好背景渐变色之后，再设置一个 animation 即可。

动画周期为匀速 linear，动画的播放次数为 infinite，即一直播放。

整个动画其实就是移动这个背景渐变色而已。

### JS

没有操作性的交互，只是在进入页面后的 2.5s 后替换各个 DOM 元素的 innerHTML 而已，然后去掉含有动画的 class 即可。
