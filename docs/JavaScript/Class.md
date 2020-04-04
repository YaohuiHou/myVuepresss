# ES6 class

## 概述

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过`class`关键字，可以定义类。基本上，ES6 的`class`可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

### 传统构造函数

```js
function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return '(' + this.x + ', ' + this.y + ')'
}

var p = new Point(1, 2)
```

### 使用 class 定义类

```js
class Point {
  // 构造器关键字
  constructor(x, y) {
    // this关键字代表 实例对象
    this.x = x
    this.y = y
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }
}
```

注意，定义“类”的方法的时候，前面不需要加上`function`这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。

ES6 的类，完全可以看作构造函数的另一种写法。

`prototype`对象的`constructor`属性，直接指向“类”的本身，这与 ES5 的行为是一致的。

```js
class Point {
  // ...
}

typeof Point // "function"
Point === Point.prototype.constructor // true
```

上面代码表明，类的数据类型就是函数，类本身就指向构造函数。

使用的时候，也是直接对类使用 new 命令，跟构造函数的用法完全一致。

```js
class Bar {
  doStuff() {
    console.log('stuff')
  }
}

var b = new Bar()
b.doStuff() // "stuff"
```

构造函数的`prototype`属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的`prototype`属性上面。

```js
class Point {
  toString() {}
  toVal() {}
}
// 等同于
Point.prototype = {
  toString() {},
  toVal() {}
}
```

在类的实例上调用方法，其实就是调用原型上的方法。

```js
class B {}
let b = newB()

b.constructor = B.prototype.constructor // true
```

由于类的方法都定义在`prototype`对象上面，所以类的新方法可以添加在`prototype`对象上面。`Object.assign`方法可以很方便地一次向类添加多个方法。

```js
Object.assign(Point.prototype, {
  toString() {},
  toValue() {}
})
```

### 不可枚举

类的内部定义的所有方法，都是不可枚举的。这一点与 ES5 的行为不一致。

```js
// 类
class Point {
  constructor(x, y) {}

  toString() {}
}
Object.keys(Point.prototype)
// []
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```

```js
// 构造函数
var Point = function(x, y) {}
Point.prototype.toString = function() {}

Object.keys(Point.prototype)
// ["toString"]
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]
```

### 表达式定义属性名

```js
let methodName = 'getArea'
class Square {
  constructor(length) {
    // ...
  }

  [methodName]() {
    // ...
  }
}
```

上面代码中，`Square`类的方法名`getArea`，是从表达式得到的。

## constructor 方法

`constructor`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法。

`constructor`方法默认返回实例对象（即 this），完全可以指定返回另外一个对象。

```js
class Foo {
  constructor() {
    return Object.create(null)
  }
}

new Foo() instanceof Foo
// false

Foo()
// TypeError: Class constructor Foo cannot be invoked without 'new'
```

上面代码中，`constructor`函数返回一个全新的对象，结果导致实例对象不是 Foo 类的实例。

类的构造函数，不使用 new 是没法调用的，会报错。这是它跟普通构造函数的一个主要区别，后者不用 new 也可以执行。

## 类的实例对象

```js
// 报错
var point = Point(2, 3)

// 正确
var point = new Point(2, 3)
```

与 ES5 一样，实例的属性除非显式定义在其本身（即定义在`this`对象上），否则都是定义在原型上（即定义在`class`上）

```js
//定义类
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }
}

var point = new Point(2, 3)

point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true
```

上面代码中，x、y 都是实例 point 自身的属性（因为定义在`this`变量上），所以`hasOwnProperty`方法返回 true，toString 是原型对象的属性（因为定义在 Point 类上），所以`hasOwnProperty`方法返回 false

类的所有实例共享一个原型对象。

```js
var p1 = new Point(2, 3)
var p2 = new Point(3, 2)

p1.__proto__ === p2.__proto__
//true
```

上面代码中，`p1`和`p2`都是 Point 的实例，它们的原型都是 Point.prototype，所以`__proto__`属性是相等的。

```js
var p1 = new Point(2, 3)
var p2 = new Point(3, 2)

p1.__proto__.printName = function() {
  return 'Oops'
}

p1.printName() // "Oops"
p2.printName() // "Oops"

var p3 = new Point(4, 2)
p3.printName() // "Oops"
```

可以通过实例的`__proto__`属性改写原型，会改变 Class 的原始定义，影响到所有实例。不推荐使用

## 不存在变量提升

Class 不存在变量提升（hoist），这一点与 ES5 完全不同。

```js
new Foo() // ReferenceError
class Foo {}
```

上面代码中，`Foo`类使用在前，定义在后，这样会报错，因为 ES6 不会把类的声明提升到代码头部。这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义。

```js
{
  let Foo = class {}
  class Bar extends Foo {}
}
```

以上代码不会报错，因为 Bar 继承 Foo 的时候，Foo 已经定义了。
（如果存在 class 提升，就会报错，因为 class 会被提升到代码头部，而 let 命令是不提升的，所以导致 Bar 继承 Foo 的时候，Foo 还没定义。）

## Class 表达式

与函数一样，类也可以使用表达式的形式定义。

```js
const myClass = class Me {
  getName() {
    return Me.name
  }
}
```

上面代码使用表达式定义了一个类。这个类的名字是 `myClass` 而不是 `Me`，`Me`只是 Class 内部代码可用，指代当前类。

```js
let inst = new MyClass()
inst.getClassName() // Me
Me.name // ReferenceError: Me is not defined
```

上面代码表示，`Me`只是 Class 内部的定义。如果内部没用到的话，可以省略`Me`

Class 表达式可以写出立即执行的 Class

```js
let person = new (class {
  constructor(name) {
    this.name = name
  }

  sayName() {
    console.log(this.name)
  }
})('张三')

person.sayName() // "张三"
```

## 私有方法

ES6 不提供私有方法，只能通过变通方法模拟实现。、

1. 使用下划线定义方法名，表示只限于内部使用，但是不保险，因为外部也是可以使用的。
2. 将私有方法移出模块，因为模块内部的所有方法都是对外可见的。

```js
class W {
  foo(baz) {
    bar.call(this, baz)
  }
  // ...
}
function bar(baz) {
  return (this.snaf = baz)
}
```

上面代码中，`foo`是公有方法，内部调用了`bar.call(this, baz)`。这使得 bar 实际上成为了当前模块的私有方法。

3. 利用`Symbol`值的唯一性，将私有方法的名字命名为一个`Symbol`值。

```js
const bar = Symbol('bar')
const snaf = Symbol('snaf')

export default class myClass {
  // 公有方法
  foo(baz) {
    this[bar](baz)
  }
  // 私有方法
  [bar](baz) {
    return (this[snaf] = baz)
  }
}
```

上面代码中，`bar`和`snaf`都是`Symbol`值，导致第三方无法获取到它们，因此达到了私有方法和私有属性的效果。

## this 的指向

类的方法内部如果含有 this，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。

```js
class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`)
  }

  print(text) {
    console.log(text)
  }
}

const logger = new Logger()
const { printName } = logger
printName() // TypeError: Cannot read property 'print' of undefined
```

上面代码中，`printName`方法中的`this`，默认指向`Logger`类的实例。但是，如果将这个方法提取出来单独使用，`this`会指向方法运行时所在的环境，因为找不到`print`方法而报错。

### 解决方法

1. 在构造函数中绑定 this

```js
class Logger {
  constructor() {
    this.printName = this.printName.bind(this)
  }

  // ...
}
```

2. 使用箭头函数

```js
class Logger {
  constructor() {
    this.printName = (name = 'there') => {
      this.print(`Hello ${name}`)
    }
  }

  // ...
}
```

3. 使用`Proxy`，获取方法的时候，会自动绑定 this

```js
function selfish(target) {
  const cache = new WeakMap()
  const handler = {
    get(target, key) {
      const value = Reflect.get(target, key)
      if (typeof value !== 'function') {
        return value
      }
      if (!cache.has(value)) {
        cache.set(value, value.bind(target))
      }
      return cache.get(value)
    }
  }
  const proxy = new Proxy(target, handler)
  return proxy
}

const logger = selfish(new Logger())
```

## 严格模式

类和模块内部，默认就是严格模式，不需要`use strict`指定运行模式

## name 属性

本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数很多特性都被 Class 继承，包括 name 属性。

```js
class Point {}
Point.name // "Point"
```

name 属性总是返回紧跟在 class 关键字后面的类名。

## Class 的继承

### 基本用法

Class 之间可以通过`extends`关键字实现继承，这种方式比 ES5 通过修改原型链实现继承，要清晰和方便很多。

```js
class ColorPoint extends Point {}
```

上面代码定义了一个`ColorPoint`类，该类通过`extends`关键字，继承了`Point`类的所有属性和方法。但是由于没有部署任何代码，所以这两个类完全一样，等于复制了一个`Point`类。

```js
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y) // 调用父类的constructor(x, y)
    this.color = color
  }

  toString() {
    return this.color + ' ' + super.toString() // 调用父类的toString()
  }
}
```

上面代码中，`constructor`方法和`toString`方法之中，都出现了`super`关键字，它在这里表示父类的构造函数，用来新建父类的 this 对象。

子类必须在`constructor`方法中调用`super`方法，否则新建实例时会报错。这是因为子类没有自己的`this`对象，而是继承父类的`this`对象，然后对其进行加工。如果不调用`super`方法，子类就得不到`this`对象。

```js
class Point {
  /* ... */
}

class ColorPoint extends Point {
  constructor() {}
}

let cp = new ColorPoint() // ReferenceError
```

上面代码中，`ColorPoint`继承了父类`Point`，但是它的构造函数没有调用`super`方法，导致新建实例时报错。

- ES5 的继承，实质是先创造子类的实例对象`this`，然后再将父类的方法添加到`this`上面（`Parent.apply(this)`）。
- ES6 的继承机制完全不同，实质是先创造父类的实例对象`this`（所以必须先调用`super`方法），然后再用子类的构造函数修改`this`。

**如果子类没有定义`constructor`方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有`constructor`方法。**

```js
constructor(...args) {
  super(...args);
}
```

另一个需要注意的地方是，在子类的构造函数中，只有调用`super`之后，才可以使用`this`关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有`super`方法才能返回父类实例。

```js
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    this.color = color // ReferenceError
    super(x, y)
    this.color = color // 正确
  }
}
```

上面代码中，子类的 constructor 方法没有调用 super 之前，就使用 this 关键字，结果报错，而放在 super 方法之后就是正确的。

```js
let cp = new ColorPoint(25, 8, 'green')

cp instanceof ColorPoint // true
cp instanceof Point // true
```

上面代码中，实例对象 cp 同时是 ColorPoint 和 Point 两个类的实例，这与 ES5 的行为完全一致。
