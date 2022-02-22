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

// static
// class Axios{
//     static url:string = "https://xxxxx"

//     public static getUrl():string{
//         return Axios.url // 或者 this.url
//     }
// }

// const instance = new Axios()
// // console.log(instance.url) // 会报错
// console.log(Axios.url); // 没问题，static只有构造函数可以调用
// console.log(Axios.getUrl())


// 单例模式，只能创建一个实例，比如在连接数据库的时候，创建一个数据库实例即可
// class Axios{
//     private static instance: Axios | null = null

//     constructor(){
//         console.log('构造函数')
//     }

//     static make(): Axios {
//         if(Axios.instance == null){
//             console.log('创建axios实例');
//             Axios.instance = new Axios()
//         }
//         return Axios.instance
//     }
// }
// // 只会创建一次
// let instance = Axios.make()
// let instance2 = Axios.make()
// let instance3 = Axios.make()



// abstract 抽象类 父类中声明，不需要设计具体的，若子类没有该函数或属性会报错。
// abstract class Game{
//     abstract move():void // 子类中不可或缺
//     abstract name:string

//     protected getPos():number[]{
//         return [100,200]
//     }
// }

// class Tank extends Game{
//     name: string = '11'

//     public move(): void {
//         console.log('坦克移动');
//     }
// }

// class Player extends Game{
//     name:string = '22'

//     public move(): void {
//         console.log('玩家移动');
//     }
// }

// let tank = new Tank()
// let player = new Player()
// tank.move()
// player.move()
// let game = new Game() // ***** 无法创建抽象类的实例



// interface 接口，用于创建规范，若不implements则不会报错
// interface GameInterface{
//     name: string
//     move(): void
// }

// abstract class Game{
//     protected getPos(): number[]{
//         return [100,200]
//     }
// }

// // 没有 implements 接口的情况下,没有满足接口的规范约束也不会报错
// class Tank extends Game{
//     public test(): void{
//         console.log('tank move');
//     }
// }

// class Player extends Game implements GameInterface{
//     name: string = '必须要有name和move()'

//     public move():void {
//         console.log(`${this.name} player move`);
//     }
// }



// interface 约束对象
// interface UserInterface{
//     name: string
//     age?: number
//     info?(): void  // 问号写在括号前!!!!!
//     [key: string]: any // 可以有其他属性名,但得是字符串类型,属性值为any
// }

// let user:UserInterface = {
//     name: 'abcd',
//     age: 99,
//     gender: 'boy'
// }


// enum SexType{
//     BOY,
//     GIRL
// }
// interface UserInterface{
//     name: string
//     age: number
//     sex: SexType
// }
// let user1: UserInterface = {
//     name: '111',
//     age: 20,
//     sex: SexType.BOY
// }
// let user2: UserInterface = {
//     name: '222',
//     age: 22,
//     sex: SexType.GIRL
// }
// let users: UserInterface[] = [user1, user2]
// console.log(users);


// 接口来声明函数
// interface FunInterface{
//     (age: number): number
// }
// const fun:FunInterface = (age: number) => age



// type 和 interface
// type isAdmin = boolean     // 对基本类型取别名
// type Sex = 'boy' | 'girl'  // 声明联合类型

// type UserType = {
//     name: string
//     age: number
//     sum(): number
//     isAdmin: isAdmin
//     sex: Sex
// }

// interface UserInterface {
//     name: string
//     age: number
//     sum(): number
// }

// let user: UserType = {
//     name: 'abc',
//     age: 123,
//     sum(){
//         return 123
//     },
//     isAdmin: false,
//     sex: 'boy'
// }


// interface 会隐式地合并
interface UserInterface {
    name: string
}
interface UserInterface {
    age: number
}
let user: UserInterface = {
    name: '111',
    age: 11
}


interface A {
    name: string
}
interface B extends A {
    age: number
}
class Person implements B {
    name: string = '12131'
    age: number = 4656546
}
let user1: B = {
    name: 'aaaa',
    age: 18
}


// type 合并 &   满足其一就行 A | B
type Name = {
    name: string
}
type Age = {
    age: number
}
type T = Name & Age
let user2: T = {
    name: '11111',
    age: 18
}

export default {}