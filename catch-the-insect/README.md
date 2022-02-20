### 展示效果

[拍虫子](http://project-demo.ihsxu.com/catch-the-insect/)

### HTML 结构

整体分三部分：

1. 初始页面，用来开始游戏
2. 游戏初始界面，用来选择要拍哪种虫子
3. 游戏主界面，用来玩儿游戏

### CSS

样式上有多使用 CSS3 的一些属性，这对于浏览器渲染来讲是有利的，更利于优化

### JS

进入当前 demo 之后，有以下几个方法将会被依次执行：

1. `startGame`：开始动画
2. `increaseTime`：时间流逝
3. `createInsect`：创建虫子出来
4. `getRandomLocation`：创建随机的坐标
5. `catchInsect`：拍虫子
6. `addInsect`：将虫子添加到视图
7. `increaseScore`：增加分数

给 `Play Game` 的按钮增加一个点击事件，点击后给第一个 `screen` 增加一个 `up` 的 class 类，让其移动到窗口区域之外。

然后给每个虫子的图片增加一个点击事件，在点击时获取到图片元素的链接和 `alt` 属性，并将其缓存到 `selected_insect` 变量中去，展示出游戏界面开始游戏。

> 规则：拍虫子的操作会触发分数的增加，并在 2s 之后移除掉这个虫子，但是紧接着会增加两个虫子，分别在 1s 和 1.5s 之后。
