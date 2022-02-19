### 展示效果

[人物切换](http://project-demo.ihsxu.com/testimonial-box-switcher/)

### HTML 结构

四部分内容：

1. 进度条
2. 双引号
3. 描述
4. 用户信息

### CSS

这里重点说一下，进度条的动画。我们设置进度条的宽度为 100%，然后设置其 `transform-origin` 的原点为 `left`，而在动画 `grow` 里 `transform` 的 `scaleX` 为 0，动画的执行时间为 10S，那么从视觉上来讲，就会有进度条从 0 的位置走了 10S 然后到达 100%宽度的效果。

### JS

设置一个定时器，每隔 10s 替换一次容器中的内容
