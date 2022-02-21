"use strict";
// let hd = "houdunren.com"
// console.log(hd)
// const arr = ['houdunren.com',1,false]
// arr.push(1)
// arr.push(true)
// const arr1:(string | number)[] = ['1111',1]
// const user = { name: 'clq', age: 20, lesson: [{ name: 'css' }, { name: 'js' }] }
// user.age = '1111'
// user.lesson.push({name:'1'})
// let hd:string[] = ['11','312313']
// let hd1:Array<string> = ['1','12']  // 泛型
// let user:object = []
// let user1:{name:string,age:number,url?:string} // ?: 表示可选
// // user1.xx = '1' // 报错
// user1 = {name:"111",age:11}
// let xx:string | number | boolean
// xx = "123"
// xx = 1
// xx = true
// let yy:Array<string | number | boolean>
// yy = [123,"123",true]
// let arr:(string | number | object | boolean)[] = []
// let arr1:any[] = []
// let arr2:Array<any> = []
// arr.push('11',1,true,{})
// any不会进行类型检测，unknown会进行
// let hd:any = 'houdunren.com'
// let test:string = hd // 不会报错
// let hd1:unknown = '后盾人'
// // let test1:string = hd1 // 会报错，修改为下面这一行
// let test1:string = hd1 as string // 类型断言
// let str: string = '99'
// let num: number = str as unknown as number // unknown作为中间商
// console.log(typeof(num)) // 这里还是string ？？
// let num1:number = 11
// let str1:string = num1 as unknown as string
// console.log(typeof(str1)) // 这里也还是number ？？  （只是可以跑通 实际上没什么意义）
// let xx:void = undefined  // void类型 undefined和null
// xx = null
// xx = '111' // 不允许
// function hh():void{}
// hh() // 返回undefined
// never不会返回任何东西，适用于抛出异常
// function hh():never{ 
//     throw new Error('类型错误')
// }
// hh()
// function sum(a, b:number, c?:string){
//     // ?: 表示可选 若没有 则默认为undefined
//     // c:string = '666' 若通过这种方式设置了默认值，则不需要:? 可选参数
//     c = c || '666'
//     console.log(a,b,c)
// }
// sum(1,2)
// let addUser = (user:{name:string,age:number}):void => {
//     console.log('添加用户')
// }
// let updateUser = (user:{name:string,age:number}):void => {
//     console.log('更新用户')
// }
// addUser({name:'ccc',age:11})
// updateUser({name:'ddd',age:18})
// **上述这番操作，两个函数的形参结构是一致的，如果需要修改，那么工作量会很大，因此可以使用 type 关键词，改为下面的写法
// type userType = {name:string; age:number} // 注意：用的是分号，但我之前写了逗号也没报错
// let addUser1 = (user:userType):void => {
//     console.log('添加用户')
// }
// let updateUser1 = (user:userType):void => {
//     console.log('更新用户')
// }
// addUser1({name:'aa',age:18})
// updateUser1({name:'bb',age:1})
// 函数的结构定义
// let hd:(a:number,b:number) => number // 函数的结构定义
// hd = (x:number,y:number):number => { // 函数的具体实现
//     return(x+y)
// }
// console.log(hd(1,1))
// type userType = {name:string; age:number}
// type userFunType = (user:userType) => boolean
// let addUser:userFunType = (user:userType):boolean => {
//     return true
// }
// addUser({name:'11',age:1})
// 剩余参数
// function sum(...args:number[]):number {
//     return args.reduce((pre,cur)=>pre+cur,0)
// }
// console.log(sum(1,2,3,4))
// 元组 规定每个位置的类型 => 可以改变值，不能改变类型
// let turple:[string, number, boolean] = ['111',2,true]
// turple[0] = true // 会报错
// turple[0] = 'xxxxx' // 不会报错
// console.log(turple)
