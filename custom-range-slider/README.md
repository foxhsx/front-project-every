### 展示效果

[自定义滑块](http://project-demo.ihsxu.com/custom-range-slider/)

### HTML 结构

居中的 `range` 元素

### CSS

主要是针对 `range` 样式的覆盖，兼容了各大浏览器的样式

### JS

监听 `range` 元素的 `input` 事件，在里面获取到对应的 value 和 label。

这里的做法是：

- 获取 `range` 元素的宽度
- 获取 `label` 元素的宽度
- 获取 `range` 的最大阈值和最小阈值
- 通过 `num_width / max` 计算出每一个刻度对应的长度，然后乘以当前的值得到目前 `range` icon 对应的坐标点
- 通过减去 `num_label_width / 2` 来得出 `label` 左侧离容器的距离
- 通过 scale 方法计算偏移量
- 最终得到 `label` 对应 `range` value 的偏移量
