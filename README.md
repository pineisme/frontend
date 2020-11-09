- 清空一个数组的方式就是简单的将arr.length = 0；

- 数组中的length属性不过滤空位置，需要小心，使用数组的foreach方法， for...in...结构以及Object.key方法进行遍历空位都会被跳过。

- 如果位置上是undefined的，遍历的时候就不会被跳过

- 数组的`slice`方法可以将“类似数组的对象”变成真正的数组。  

  ```js
  var arr = Array.prototype.slice.call(arraryLike);
  ```

- 除了转为真正的数组，“类似数组的对象”还有一个办法可以使用数组的方法，就是通过call()把数组的方法放到对象上面。

  ```js
  function print(value, index) {
    console.log(index + ' : ' + value);
  }
  
  Array.prototype.forEach.call(arrayLike, print);
  ```

  上面代码中，arrayLike代表一个类似数组的对象，本来是不可以使用数组的forEach()方法的，但是通过call()，可以把forEach()嫁接到arrayLike上面调用。

  上面代码中，arrayLike代表一个类似数组的对象，本来是不可以使用数组的forEach()方法的，但是通过call()，可以把forEach()嫁接到arrayLike上面调用。

- 加法的规则是，如果一方是字符串一方是非字符串，则将非字符串转换为字符串再连接在一起。true和false可以与数字相加。如果相加的一方为对象，必须先转换为原始的值再相加（对象转换为原始对象的规则为先调用自身的valueOf方法再调用toString方法）。除了加法外的其他运算符都不会发生重载，他们的规则是所有运算字一律转换为数字再进行运算。

- ***严格相等运算***    

  (==)比较两个值是否相等，严格相等符号(===)比较两个值是否为同一个值，如果两个值不是同一个类型，(===)会返回false，而（==）会将他们转换为同一个类型，再用严格相等运算符比较。

- ***且或运算的短路***

  在且运算中&&，如果第一个算子的布尔值为true，则返回第二个算子的**值**（而不是布尔指），如果第一个算子的布尔指为false，则不再继续对第二个算子求值。&&运算符可以连用，这时返回第一个布尔值为false的表达式的值，如果都为true，则返回最后一个表达式的值。

  ```js
  1 && 2 && 3
  //3
  ```

  或运算符||，如果第一个算子的布尔值为true，则返回第一个算子的值，不再对第二个算子求值，如果第一个算子的布尔值为false，则返回第二个算子的值。

  这种只通过第一个表达式的值，控制是否运行第二个表达式的机制成为“短路”。

  或运算法通常用于为一个变量设置默认值。

  ```js
  function saveText(text) {
    text = text || '';
    // ...
  }
  ```

- ***位运算***

  头部补零的运算符(>>>)

  位运算符只会对整数起作用。**在js中，数值都是以64位浮点数的形式存储，但是在做运算的时候，是以32位带符号的整数进行运算的，并且返回值也是一个32位带符号的整数**。

  ```js
  i = i | 0;//将i不管小数或整数转换为32位整数
  var a = 10;
  var b = 99;
  a ^= b, b ^= a, a ^= b;
  a // 99
  b // 10 交换两个变量的值
  ```

  js内部采用补码表示负数，**可以理解为一个数与自身的取反值相加，等于-1**，如3取反得到-4。

- ***void***

  void运算符执行一个表达式然而不返回任何值，或则说返回undefined。

  ```js
  void(0);//undefined
  ```

  主要用于防止网页跳转。

- **强制转换**

  Number('123abc');//NaN

  Number('');//0

  Number(null);//0

  Number()的参数是对象时，将返回NaN，除非是包含单个数值的数组，Number()转换对象的规则是：
  - 调用对象自身的valueOf方法，如果返回的是原始值类型，则直接调用Number()方法，不然进行下一步。
  - 如果valueOf返回的依然是对象，则改为调用自身的toString方法，通过返回的是原始类型的值，则调用valueOf，否则下一步。
  - 如果toString方法返回的是对象，报错。  

  ```js
  parseInt('42 cats') // 42
  Number('42 cats') // Na
  //Number()比praseInt()更严格，只要有一个字符无法转换为数值，整个字符串就会被转换为NaN。
  ```

  Boolean()对所有对象都转换为true，甚至连`new Boolean(false);`都会被转换为true。

- **console**

  console.dir()对于输出DOM对象非常有用，会显示DOM对象的所有属性。

  console.time()相对应console.timeEnd()可以算出一个操作所花费的准确时间，它的参数是计时器的名字。

  `getEventListeners(object)`方法返回一个对象，该对象的成员为`object`登记了回调函数的各种事件（比如`click`或`keydown`），每个事件对应一个数组，数组的成员为该事件的回调函数。

  `monitorEvents(object[, events])`方法监听特定对象上发生的特定事件。事件发生时，会返回一个`Event`对象，包含该事件的相关信息。`unmonitorEvents`方法用于停止监听。

