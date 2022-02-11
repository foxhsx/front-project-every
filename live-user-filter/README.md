### 展示效果

[下拉框过滤器](http://project-demo.ihsxu.com/live-user-filter/)

### HTML 结构

此 demo 中的 HTML 结构划分为两部分，上半部分为 Header 部分，下半部分为展示用户列表部分。

而 Header 部分除了有提示信息文字之外，还有一个搜索框，通过输入的字符来过滤出来对应的用户。

### CSS

本次的 CSS 代码中有在用户列表的部分，使用了 `.user-list li:not(:last-of-type)`，巧妙的设置了最后一个元素不会被设置下边框

### JS

JS 部分：

1. 进入到页面之后调用获取用户列表的接口，来获取数据和生成 li 标签元素，并添加到页面中展示
2. 通过监听输入框的 input 事件来过滤用户列表
