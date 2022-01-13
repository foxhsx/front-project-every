### 展示效果

[键盘事件](http:project-demo.ihsx.com/event-keycodes)

### HTML 结构

初始结构很简单，就是一个容器包着一个 div 即可

### CSS

容器的布局方式为弹性布局，里面的子元素主要是展示最后的值，加了一些阴影和字体大小，包括一个小标题，使用 small 元素加绝对定位即可

### JS

主要是监听全局的 keydown 事件，拿到 event 对象，然后获取里面的 `key` `keyCode` 和 `code`，然后拼接字符串模版展示在页面上
