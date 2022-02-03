### 展示效果

[自动文本效果](http://project-demo.ihsxu.com/auto-text-effect/)

### HTML 结构

1. 用来展示文本的区域
2. 调速区域

### CSS

1. 将调速区域固定定位到页面中心底部
2. 将文本居中到视图窗口

### JS

递归调用 `writeText` 方法来实现，思路就是每次只展示前 idx 个
，然后当 idx 大于文本的内容长度时，将 idx 重置到 1 上即可。然后监听 input 输入事件，用来控制文字展示的速度。
