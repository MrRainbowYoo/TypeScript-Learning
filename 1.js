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
var str = '99';
var num = str; // unknown作为中间商
console.log(num);
