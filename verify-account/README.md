### 展示效果

[验证码](http://project-demo.ihsxu.com/verify-account/)

### HTML 结构

抛去提示用语之外，其实就是在一个 div 里使用了 6 个输入框，并且通过 flex 布局来居中排列展示

### CSS

布局这里就不再叙述了，主要这里有两个地方：

1. `-moz-appearance` 属性，这个是用来将 number 输入框的上下按钮去掉
2. `-webkit-outer-spin-button` 和 `-webkit-inner-spin-button` 用于给数字输入框元素的旋转按钮设置样式

> 上面两个样式都不是标准化样式，它们都是处于实验性阶段的东西，很可能被替换掉

### JS

给每个 code 输入框都监听一个 `keydown` 事件，当输入的值在 0-9 的区间，则在输入后的下一秒跳到下一个 code。
删除的时候聚焦（跳到）上一格。
