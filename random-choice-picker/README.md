### 展示效果

[随机选中项](http://project-demo.ihsxu.com//random-choice-picker/index.html)

### HTML 结构

这次的初始结构也是很简单的：

1. 一个大容器
2. 标题，提示用户输出，多个 tag 需要输入逗号，输入完成以后按下回车
3. 输入区域，我们使用 textarea
4. 最后一个空的 DIV，主要用来展示最终用户输入的 tag 列表

### CSS

emmm，感觉今天的 CSS 没什么好说的，略过（大家自己看）

### JS

JS 部分的话，前期是比较简单的：

1. 进入页面之后，就触发 textarea 的聚焦，这样方便用户直接进行输入
2. 监听键盘的 keyup 事件，当键盘键起来时被触发里面的回调函数，主要是：

> 1. 创建 tags
> 2. 判断如果是回车键，则清空输入区域内容
> 3. 清空的同时，触发随机选中事件

在随机选中事件中的逻辑是这样的：

1. 设置 3s 的时间来清除掉定时器
2. 在 3s 时间内会间隔 100ms 执行一次随机选中事件，来选择一个 tag 进行 class 的增加和删除
3. 给随机选中的标签增加一个高亮的 class，同时在 100ms 之后移除高亮。
4. 在 3s 以后移除定时器，然后触发再重新触发一次随机事件，这次选中的 tag 就是最终会展示为高亮的 tag

随机选中事件：先获取到所有的 tag，然后用随机数乘以 tag 的总数，并向下取整，这个整数就是我们随机出来的下标，取该下标对应的 tag 即可。
