function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friend = ["wang", "li"];
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    }
}
var person1 = new Person("qs", 25, "it");
var person2 = new Person("yh", 25, "teacher");
console.log(eval('{foo: 123}')); //没有括号则将{}解释为代码块
console.log(eval('({foo: 345})')); //有括号解释为对象
var obj1 = {
    foo: 1,
    bar: 2,
}
console.log(obj1['bar']); //in this way[] you need add ''
console.log(obj1.foo);

console.log(Object.keys(obj1)); //get all the object's key
console.log('foo' in obj1);
console.log('toString' in obj1);
console.log(obj1.hasOwnProperty('toString'));
//delete obj1.foo;只能删除对象本身的属性不能删除继承来的属性
// person1.friend.push("he");
// console.log(person1.friend);
// console.log(person2.friend);
// console.log(person2.sayName == person2.sayName);

var fab = (function f(num) {
    if (num <= 1) {
        return num;
    } else {
        return num * f(num - 1);
    }
});
var bab = fab;

// console.log(bab(4));
function createFunction() {
    var result = new Array();
    for (let i = 0; i < 10; ++i) {
        result[i] = (function(num) {
            return num;
        })(1);
    }
    return result;
}
// console.log(createFunction());
//ni ming han shu
/*
(function(){
    块级作用域
})();
var someFunc = function(){
    块级作用于
};
*/
function toDo(count) {
    for (var i = 0; i < count; ++i) {
        console.log(i);
    }
    console.log(i);
}
toDo(5);