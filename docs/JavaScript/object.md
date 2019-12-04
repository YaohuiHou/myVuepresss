# 对象 Object

<style>
  .highlighted{background:#f9f2f4;color:#c7254e}
  b{color:#333}
</style>

## assign

Object.assign() 方法用于将所有可枚举属性的值从一个或者多个源对象复制到目标对象，返回目标对象

> <b>语法：</b> </br>Object.assign(target, ...sources)

```js
// 示例一
const t1 = { a: 1, b: 2 }
const t2 = { b: 4, c: 5 }

const o = Object.assign(t1, t2)
t1
// {a: 1, b: 4, c: 5}
t2
// {b: 4, c: 5}
o
// {a: 1, b: 4, c: 5}
```

#### 拷贝对象

```js
// 示例二 拷贝对象
const t3 = { a: 1 }
const copy = Object.assign({}, t3)

copy
// {a: 1}  浅拷贝
let obj1 = { a: 0, b: { c: 0 } }
let obj2 = Object.assign({}, obj1)
console.log(JSON.stringify(obj2)) // { a: 0, b: { c: 0}}

obj1.a = 1
console.log(JSON.stringify(obj1)) // { a: 1, b: { c: 0}}
console.log(JSON.stringify(obj2)) // { a: 0, b: { c: 0}}

obj2.a = 2
console.log(JSON.stringify(obj1)) // { a: 1, b: { c: 0}}
console.log(JSON.stringify(obj2)) // { a: 2, b: { c: 0}}

obj2.b.c = 3
console.log(JSON.stringify(obj1)) // { a: 1, b: { c: 3}}
console.log(JSON.stringify(obj2)) // { a: 2, b: { c: 3}}

// 深拷贝
obj1 = { a: 0, b: { c: 0 } }
let obj3 = JSON.parse(JSON.stringify(obj1))
obj1.a = 4
obj1.b.c = 4
console.log(JSON.stringify(obj3)) // { a: 0, b: { c: 0}}
```

#### 合并对象

```js
// 示例三 合并对象
const o1 = { a: 1 }
const o2 = { b: 2 }
const o3 = { c: 3 }

const obj = Object.assign(o1, o2, o3)
console.log(obj) // { a: 1, b: 2, c: 3 }
console.log(o1) // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
```

## create

Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的**proto**。

> <b>语法：</b> </br>Object.create(proto[, propertiesObject])

```js
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
  }
}

const me = Object.create(person)

me.name = 'Matthew' // "name" is a property set on "me", but not on "person"
me.isHuman = true // inherited properties can be overwritten

me.printIntroduction()
// expected output: "My name is Matthew. Am I human? true"
```

## is

Object.is() 方法判断两个值是否是相同的值

> <b>语法：</b> </br>Object.is(value1, value2);

ES5 比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，后者的 NaN 不等于自身，以及+0 等于-0。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。

```js
Object.is('foo', 'foo') // true
Object.is({}, {}) // false

0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

## keys

Object.keys 方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。

```js
var obj = { foo: 'bar', baz: 42 }
Object.keys(obj)
// ["foo", "baz"]
```

## values

Object.values 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。

```js
const obj = { foo: 'bar', baz: 42 }
Object.values(obj)
// ["bar", 42]

Object.values('foo')
// ['f', 'o', 'o']

Object.values(42) // []
Object.values(true) // []
```

返回数组的成员顺序，属性名为数值的属性，是按照数值大小，从小到大遍历的

```js
const obj = { 100: 'a', 2: 'b', 7: 'c' }
Object.values(obj)
// ["b", "c", "a"]
```

## entries

Object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。

```js
const obj = { foo: 'bar', baz: 42 }
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]
```

## fromEntries

Object.fromEntries()方法是 Object.entries()的逆操作，用于将一个键值对数组转为对象。

```js
Object.fromEntries([['foo', 'bar'], ['baz', 42]])
// { foo: "bar", baz: 42 }
```

该方法的主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象。

```js
// 例一
const entries = new Map([['foo', 'bar'], ['baz', 42]])

Object.fromEntries(entries)
// { foo: "bar", baz: 42 }

// 例二
const map = new Map().set('foo', true).set('bar', false)
Object.fromEntries(map)
// { foo: true, bar: false }
```

<!-- 评论 -->
<ClientOnly>
  <livere/>
</ClientOnly>
