这一节的部分，在 js 上会有一个计算，这里可能需要动下脑筋。

### 效果描述

页面初始进来之后，会有一个百分比进度在页面中央展示，从 0-99，透明度从 1-0；背景图是从一个毛玻璃效果到清晰展示。

### HTML 结构

整体上 body 体内两个元素，一个 section 用来做背景，一个 DIV 用来做百分比进度。

### CSS

背景图使用绝对定位进行布局，z-index 设置为 -1，让它展示在其他元素下方，body 使用弹性布局，使得百分比进度文字居中在页面正中央

### JS

Javascript 这里使用了一个定时器，当百分比达到 100 的时候，清除掉它，而在这期间会有一个计算的过程。

```javascript
/**
 * 计算从方法开始执行到结束，每次执行后的值
 * @param {递增值} num
 * @param {和递增值挂钩，可以理解为递增值的最小值} in_min
 * @param {和递增值挂钩，可以理解为递增值的最大值} in_max
 * @param {实际上可以使用的值，这里可以理解起始值} out_min
 * @param {实际上可以使用的值，这里可以理解最终值} out_max
 * @returns { 计算后的值 } number 计算后的最终值
 * @description num 递增，返回值递减，这里的重要点在 out_min 上，这个值实际上是某个属性的初始值，我们需要在这个值的基础上去进行递减操作，这里
 * 的方法是使用反向逆推。
 * 1. 我们先按 num 递增，计算值也递增的正向思路进行计算；
 * 2. num，(in_min in_max)，(out_min out_max) 为三组数据
 *  a. num 是变化值，递增
 *  b. in_min 和 in_max 是 num 递增的区间范围
 *  c. out_min 和 out_max 是实际值的区间范围
 * 3. 按照正向思维，num 递增，函数求得的值也递增，那就有 in_min < in_max，out_min < out_max
 * 4. in_max 和 out_max 之间的对应关系：当 num === in_max 时，函数计算值 === out_max
 * 5. 此时的计算公式应该是 (out_max - out_min) / (in_max - in_min) * load
 * 6. 那如果要从 num 递增而函数计算值递减，我们只需要用 out_max 减去上一步的值即可
 */
function scale(num, in_min, in_max, out_min, out_max) {
  return out_max - ((out_max - out_min) / (in_max - in_min)) * num;
}
```
