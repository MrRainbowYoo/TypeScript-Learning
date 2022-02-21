"use strict";
// class User{
//     name: string;
//     age: number;
//     constructor(n:string, a:number) {
//         this.name = n
//         this.age = a
//     }
//     info():string{
//         return `${this.name} 的年龄是 ${this.age}`
//     }
// }
// let hd = new User('小陈',18)
// let xx = new User('abc',99)
// // console.log(hd.info())
// let users:User[] = []
// // users.push('111') // 报错
// users.push(hd,xx)
// console.log(users);
// 泛型
// 动态改变类型，减少代码的重复，增加复用性
// function fun<T>(arg:T):T {
//     return arg
// }
// let hd = fun<string>('abcd')
// console.log(hd);
// let xj = fun<boolean>(true)
// console.log(xj);
// let ss = fun(123) // 这里不用写fun<number> 也会自动推断
// console.log(ss)
// 泛型与类
// class Collection<CLQ>{
//     data:CLQ[] = []
//     public push(...items:CLQ[]){
//         this.data.push(...items)
//     }
// }
// let numArr = new Collection<number>()
// numArr.push(1,2,3,4,5)
// let strArr = new Collection<string>()
// strArr.push('a','b','c')
// protected 修饰符
// class User {
//     public name:string
//     protected age:number
//     constructor(n:string, a:number){
//         this.name = n
//         this.age = a
//     }
//     public getAge():number{
//         return this.age
//     }
// }
// let user = new User('clq',20)
// console.log(user.name) // 可获取
// // console.log(user.age) // 受保护不可获取
// console.log(user.getAge()) // 可行
// private 
// class Person{
//     constructor(private _name:string, protected age:number){}
// }
// class User extends Person {
//     constructor(name:string,age:number){
//         super(name,age)
//     }
//     get(){
//         return this._name // private私有变量只能在Person类中使用，子类及其实例都不行
//     }
// }
// let user = new User('xxx',1111)
// console.log(user.get())
// readonly ===========> 只读属性，构造函数constructor中可以修改，其他不可以。
// class User{
//     readonly name:string = "default name"
//     constructor(name?:string){
//         this.name = name || this.name
//     }
//     setName(name:string){
//         this.name = name  // 普通函数无法修改
//     }
// }
// let user = new User()
// console.log(user.name) // default name
// let user1 = new User('a new name')
// console.log(user1.name) // a new name
