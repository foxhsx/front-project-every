### 展示效果

[css 实现 svg 动画](http://project-demo.ihsxu.com/css-svg/)

### HTML 结构

三个 svg 展示在 html 中，这里我们可以到阿里巴巴矢量图标库中可以找几个 icon，然后下载 svg 格式即可

### CSS

这里我们主要是给 `svg` 中的 `path` 标签设置样式，设置 `storke-dasharray` 和 `storke-dashoffset`，在 `hover` 的时候再设置一个过渡动画来设置 `storke-dashoffset` 和 `fill` 的值。

> `storke-dasharray` 属性用来控制描边的点划线的图案范式
> `storke-dashoffset` 属性指定了 dash 模式到路径开始的距离
> `fill` 用来填充内部的颜色

### JS
