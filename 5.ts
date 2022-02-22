// ****************** decoration 装饰器 用的是时候需要tsc -w 监听整个文件夹 然后 tsc --init 生成配置文件 把配置文件中关于装饰器的注释取消掉,如下所示
// "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
// "emitDecoratorMetadata": true, 

// ClassDecorator 类装饰器
// const moveDecorator: ClassDecorator = (target: Function) => {
//     console.log(target);
//     target.prototype.getPostion = (): {x: number, y: number} => {
//         return { x: 100, y: 200}
//     }
// }
// @moveDecorator
// class Tank {
//     // public getPosition() {} // 声明一下就不用下面的as断言了
// }

// @moveDecorator
// class Player {}

// let tank = new Tank()
// let player = new Player()
// console.log((tank as any).getPostion());  // tank 没有getPostion方法 要么在Tank中声明一下,要么使用断言 as any
// console.log((<any>player).getPostion());

// 装饰器语法糖
// moveDecorator(Player) // 等同于 @moveDecorator Player{}


// 装饰器叠加
// const moveDecorator: ClassDecorator = (target: Function) => {
//     console.log(target);
//     target.prototype.getPostion = (): {x: number, y: number} => {
//         return { x: 100, y: 200}
//     }
// }
// const musicDecorator: ClassDecorator = (target: Function) => {
//     target.prototype.playMusic = (): void => {
//         console.log('musicccccccccc');
//     }
// }

// @moveDecorator
// @musicDecorator
// class Test {}
// const testInstance = new Test();  // ******* 这个分号 非常重要!!!! 要不然会报错 因为下面是括号包起来的,
// (testInstance as any).playMusic()



// 通过装饰器实现统一消息响应
// const MessageDecorator:ClassDecorator = (target: Function) => {
//     target.prototype.message = (content: string) => {
//         console.log(content);
//     }
// }

// @MessageDecorator
// class LoginController {
//     public login(){
//         console.log('登录业务流程');
//         this.message('登录成功'); // 这里会有红线,老师没说
//     }
// }

// new LoginController().login()



// 装饰器工厂
// const musicDecoratorFactory = (content: string):ClassDecorator => {
//     return (target: Function) => {
//         target.prototype.playMusic = () => {
//             console.log(`${content} 嘻嘻嘻嘻嘻嘻嘻`)
//         }
//     }
// }

// @musicDecoratorFactory('tank')
// class Tank {}

// @musicDecoratorFactory('player')
// class Player {}

// let tank = new Tank()
// ;(tank as any).playMusic()
// let player = new Player()
// ;(player as any).playMusic()



// 方法装饰器
// const PlayDecorator:MethodDecorator = (...args: any[]) => {
//     console.log(args);
//     // const method = args[2].value
//     // method()
//     args[2].value = () => {
//         console.log('method updated');  // 修改原来的方法
//     }
// }

// class User{
//     // 普通方法的装饰器
//     @PlayDecorator
//     public play() {
//         console.log('hello wolrd');
//     }

//     // 静态方法的装饰器
//     @PlayDecorator
//     static show(){
//         console.log('static show');
//     }
// }

// new User().play()
// User.show()



// 延迟执行在装饰器中的实现
// const SleepDecorator:MethodDecorator = (...args: any[]) => {
//     let method = args[2].value
//     args[2].value = () => {
//         setTimeout(() => {
//             method()
//         }, 2000);
//     }
// }

// class User{
//     @SleepDecorator
//     public show(){
//         console.log('hello world');
//     }
// }

// new User().show()


// 延迟执行的装饰器工厂的实现
// const SleepDecoratorFactory = (delay: number):MethodDecorator => {
//     return (...args: any[]) => {
//         const method = args[2].value
//         args[2].value = () => {
//             setTimeout(() => {
//                 method()
//             }, delay);
//         }
//     }
// }

// class User{
//     @SleepDecoratorFactory(1000)
//     public show(){
//         console.log('hello world');
//     }
// }

// new User().show()

// interface UserInterface {
//     readonly name: string
//     age: number,
//     [key: string]: any
// }

// let obj: UserInterface = {
//     name: '111',
//     age: 18,
//     hhh: 465
// }

// obj.name = 'abc' // readonly 会报错
// console.log(obj);
