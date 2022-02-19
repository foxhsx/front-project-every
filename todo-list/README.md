### 展示效果

[TodoList](http://project-demo.ihsxu.com/todo-list/)

### HTML 结构

1. 大标题
2. form 表单
3. 展示 list 的地方

### CSS

对于完成项，我们使用 `line-through` 样式，表示该 task 已经完成

### JS

在我们提交时，生成一个 li 标签，然后给这个 li 标签绑定点击事件用来实现完成效果，再绑定一个右击事件，用来删除该 task，并在每次操作的时候都更新我们的 list 列表。
把生成的列表数据存储到 `localStorage` 中去。
