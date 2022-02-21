// enum SexType{
//     BOY = 6,
//     GIRL
// }
// console.log(SexType.BOY)


// 断言 as
// function fun(args:boolean):(string | number) {
//     return args ? '我就干' : 2022
// }
// let res = fun(true) as number
// res = '1111' // 会报错
// console.log(res)

// as const
// let a = 'abc' // string 类型
// let b:'abc' // 值类型
// // b = '1' // 会报错
// let c = 'abc' as const // 与 let c:'abc' = 'abc' 相同

// let a:string = 'helloworld'
// let b = 123
// let arr = [a, b] as const // arr 变成元组 arr[0]为string类型，arr[1]为数值类型
// let arr1 = [a, b, 1, true, '123'] as const // 除了a和b，其余位置都是值类型，即只能是1，true和'123'
// let c = 99 as const
// let arr2 = [a, c] as const // a是string类型，c是值类型， 只能是99
// **** as const 根据具体的值来提取类型



// function fun(){
//     let a = 'hello world'
//     let b = (x:number, y:number):number => x + y
//     return [a,b]
// }
// const [n, m] = fun();

// m(1,2) // 会报错 没法调用 因为m的类型要么是string要么是Function，不明确

// console.log((m as Function)(1,2)) // 可以调用，在调用前通过断言将m明确为Function类型，当然也可以不写Function 具体写 m as (x:number,y:number)=>number

// 下面这样也是可以的
// const [n, m] = fun() as [number, (x:number, y:number) => number]
// console.log(m(1,2))

// 在函数返回的时候也可以操作
// return [a, b] as [number, (x:number, y:number) => number] 或者 return [a, b] as [typeof(a), typeof(b)]
// 简化一下 return [a, b] as const  

// 非空断言 ! 明确告诉是有值的
// const el:HTMLDivElement = document.querySelector('.hello')!
// console.log(el.innerHTML)