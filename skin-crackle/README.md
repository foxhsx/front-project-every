### 展示效果

[皮肤裂纹特效](http://project-demo.ihsxu.com/skin-crackle)

### HTML 结构

一个 div 元素中包裹两个 img 即可

### CSS

1. 设置 div 元素绝对定位，宽高都自适应窗口
2. div 里的 img 元素设置绝对定位，宽高都适应窗口宽高，使用 `object-fit` 属性来展示图片，`cover` 保留原有尺寸比例。但部分内容可能被剪切
3. 对于裂纹的图片，设置 `mix-blend-mode` 属性，该属性直译就是一种混合模式，我们在这里使用其 `multiply` 值，将该元素作为全局的一个底色，然后使用 `filter` 的 `contrast` 属性设置对比度

### JS
