### 展示效果

[卡片时钟](http://project-demo.ihsxu.com/card-clock/)

### HTML 结构

基本布局还是一样，三个卡片，上下结构，上面为实际的时间，下面为提示时分秒的字样

### CSS

主要来说说那个倒影吧，这里使用了一个 `-webkit-box-reflect` 的属性，使用它就可以实现倒影。
不过由于属性较新，所以在兼容性上，没有啥优势可言，基本只有 `-webkit-` 内核的浏览器才支持。

![](http://www.zyiz.net/upload/202005/09/202005091126527708.png)

其语法如下：

```css
-webkit-box-reflect: below | above | left | right;
```

这是最基础的用法，代表上下左右。
也可以使用本案例中的例子，设置渐变和间隙

### JS

设置时间的 JS，万变不离其宗。
