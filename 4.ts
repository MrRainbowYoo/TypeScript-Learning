// 泛型
// function dump<T>(arg: T): T {
//     return arg
// }
// let res = dump<number>(123)
// let res1 = dump<string>('123')
// let res2 = dump(true)   // 自动推断类型


// 泛型中的 extends
// function getLength<T extends { length: number }>(arg: T): number {
//     return arg.length
// }

// console.log(getLength('1234'))  // 若 T extends any[],会报错
// console.log(getLength([1,2,3,4])); // 若 T extends string,会报错, 可通过联合类型 T extends string | any[]
// console.log(getLength(18)) // 若没有上述extends则不会报错, extends之后明确了必须要有length: number这个属性


// 构造函数中使用泛型
// class User<T> {
//     public constructor(private _user: T){}

//     public get():T {
//         return this._user
//     }
// }

// interface UserInterface {
//     name: string
//     age: number
// }

// let obj = new User<UserInterface>({name:'123',age:123})
// console.log(obj.get())


// 泛型多类型定义
interface ArticleInterface<B, C> {
    title: string
    isLock: B,
    comments: C[]
}

type CommentType = {
    content: string
}

const article:ArticleInterface<boolean, CommentType> = {
    title: 'gogogogo',
    isLock: false,
    comments: [{content:'3131'},{content:'444'}]
}