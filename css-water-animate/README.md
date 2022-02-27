### 展示效果

[css 水波纹](http://project-demo.ihsxu.com/css-water-animate/)

### HTML 结构

用一个大容器包裹两个 Water 字体

### CSS

水波纹特效这里主要是用到 `clip-path` 属性，我们可以搜索 `clip-path maker` 来设计自己想要的效果，然后将对应的 css 拷贝下来。放到 css 动画中，动画的播放效果为 `infinite` 即永久播放。

而文字效果这里是两个文字进行叠加，第一个字体的文字颜色为透明色，设置 `text-storke` 属性为 `1px #03a9fa`，第二个文字的颜色设置上刚才的那个颜色，并设置播放我们定义好的动画即可。

> `-webkit-text-storke` 属性为文本字符设置了*宽度*和*颜色*，它是 `-webkit-text-storke-width` 和 `-webkit-text-storke-color` 属性的缩写。

> `clip-path` 属性使用裁剪的方式创建元素的可视区域。区域内的部分展示，其余部分隐藏。这里的值 `polygon` 表示多边形的各个坐标
