### 展示效果

[倒计时效果](http://project-demo.ihsxu.com/animated-countdown/)

### HTML 结构

两部分：

1. 倒计时部分：用来计时的数字和提示
2. 倒计时结束后的展示内容，并且可以重新倒计时的按钮

### CSS

1. 倒计时部分固定定位到页面的中间部位，使用 transform 进行布局操作，这样也可以不去计算元素的尺寸
2. 对于倒计时部分和结束后的内容展示部分，显示和隐藏使用 `scale` 来实现，视觉上也有一个过渡的效果
3. 倒计时部分的数字，以底边中心为圆心，分别执行进入和滑出的动画操作。使用 `rotate` 旋转角度来实现。
4. 进入的动画，比滑出的动画多了 `30%` 时的节点，主要是用来实现抖动的效果

### JS

1. 定义一个执行动画的方法 `runAnimation`，此方法里给每一个数字都监听 `animationend` 事件

   a. 当此时的动画名称是 `goIn`，并且下标不是最后一个时，移除此元素的 `in` class 名，增加 `out` class 名

   b. 当此时的动画名称是 `goOut`，并且还有还一个元素时，给下一个元素增加 `in` class 名

   c. 如果不符合上述两种场景，说明已经倒计时完毕，隐藏倒计时模块，展示结束语模块

2. 给结束语中的 `replay` 按钮监听一个点击事件，用来重置到初始状态
