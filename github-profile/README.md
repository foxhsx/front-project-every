### 展示效果

[github profile](http://project-demo.ihsxu.com/github-proflie/)

### HTML 结构

1. 初始页面的整体是一个 form 的提交表单
2. 还有一个在搜索后才会展示的 card 区域，用来展示搜索到的 github 用户信息
3. 需要引用一下 axios 的库

### CSS

这个 demo，没有动画，所以只是涉及到布局的样式，具体的部分可以看 css 部分的代码

### JS

页面 JS 加载完成以后，会监听 form 表单的提交事件，然后拿到搜索值以后，调用 `getUser` 的方法，并将 form 表单中的 value 清空。

`getUser` 方法中请求 github 的 users API 来获取对应的用户信息，并在拿到返回值以后动态创建一个用户卡片的 HTML 模版，模版中就是用户相关的信息，比如头像、名称、仓库数量等等。

拿到用户信息之后，再去拿这个用户的仓库信息，并创建相关的 HTML 模版添加到刚刚的卡片中。
