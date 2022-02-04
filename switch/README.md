### 展示效果

[Switch](http://project-demo.ihsxu.com/switch/)

### HTML 结构

由一个大标题和三个 `checkbox` 组成

### CSS

我们使用了 `checkbox` 来做 `switch`：

1. 将原始的 checkbox 隐藏掉
2. 使用 label 来自定义 checkbox 的样式
3. 在选中和取消选中时会有一个过渡动画的效果

> animation 动画中有一个 animation-fill-mode 属性，我们这里使用了其 forwards 值，代表了当动画完成之后，会保持在最后一帧的状态

### JS

当三个 `checkbox` 都被选中时，其中有一个就会被抵消选中
