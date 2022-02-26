### 展示效果

[卡片悬停效果](http://project-demo.ihsxu.com/hover-card/)

### HTML 结构

案例中的卡片是一样的，都是由两部分组成：

1. 头部：展示图片和标题
2. 底部：展示文字描述和更多按钮

### CSS

布局我们就略过不说了，主要说这个效果的实现：

1. 在 `card` hover 的时候给头部和底部的 `translateY` 恢复到起始位置
2. hover 效果结束的时候，头部的 `translateY` 给 100 像素的距离，而底部则移动 -100 像素的距离

### JS
