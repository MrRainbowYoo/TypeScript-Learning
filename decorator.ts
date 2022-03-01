// 类装饰器
// const AddressDecorator: ClassDecorator = (target: Function) => {
//     console.dir(target);
//     target.prototype.age = 18
//     target.prototype.getAddress = () => {
//         return '你心里'
//     }
// }

// const ChenDecorator: ClassDecorator = (target: Function) => {
//     console.log('created by xiaochen');
// }

// @AddressDecorator
// // @ChenDecorator // 先执行；顺序是从上到下 从右到左
// class User {
//     public sayHello(): void {
//         console.log('Hello World');
//     }
//     // public getAddress(){}
// }

// // console.log(new User().getAddress());
// console.log((new User() as any).getAddress())
// console.log((<any>new User()).age);


// // 类装饰器工厂
// const AddressDecoratorFactory = (address = '默认地址'): ClassDecorator => {
//     return (target: Function) => {
//             target.prototype.getAddress = () => address
//         }
// }
// @AddressDecoratorFactory('想去哪就去哪')
// class Player{}
// console.log((new Player() as any).getAddress());




// 方法装饰器
// const UpdateDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
//     console.log(target,propertyKey,descriptor);
//     const method = descriptor.value
//     descriptor.value = () => {
//         console.log('new method!');
//     }
//     // method()
// }
// class User {
//     @UpdateDecorator
//     public getName(){
//         console.log('my name is xiaochen');
//     }

//     @UpdateDecorator
//     static info(){
//         console.log('this is a static method');
//     }
// }
// new User().getName()
// User.info()

// 延迟方法装饰器工厂
// const DelayDecoratorFactory = (delay = 500):MethodDecorator => {
//     return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
//         const method = descriptor.value
//         setTimeout(() => {
//             method()
//         }, delay);
//     }
// }
// class User {
//     @DelayDecoratorFactory(2000)
//     public info() {
//         console.log('等待2s后执行');
//     }
// }
// new User().info()

// 自定义控制台打印
// const MessageDecoratorFactory = (content: string, fontSize = 16, color = 'black'): MethodDecorator => {
//     return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
//         const method = descriptor.value
//         descriptor.value = () => {
//             console.log(`%c${content}`,`font-size:${fontSize}px;color:${color}`)
//         }
//     }
// }
// class User {
//     @MessageDecoratorFactory('登录成功', 20, 'green')
//     login() {}

//     @MessageDecoratorFactory('登录失败', 14, 'red')
//     fail() {}
// }
// new User().login()
// new User().fail()

// 装饰器模拟网络登录
// const RequestDecoratorFactory = (url: string): MethodDecorator => {
//     return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
//         let method = descriptor.value
//         new Promise(resolve => {
//             setTimeout(() => {
//                 resolve({status: 200, name: '小陈同学吗'})
//             }, 2000);
//         }).then(res => {
//             method(res)
//         })
//     }
// }
// interface UserInterface {
//     status: number
//     name: string
//     [props: string]: any
// }
// class User {
//     @RequestDecoratorFactory('https://www.helloworld.com')
//     public getUser(user: UserInterface) {
//         console.log(user);
//     }
// }



// 属性装饰器
// const PropDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
//     // console.log(target, propertyKey);
//     let v: string
//     Object.defineProperty(target,propertyKey,{
//         get: () => v.toUpperCase(),
//         set: (value) => v = value
//     })
// }
// class User {
//     @PropDecorator
//     public name: string | undefined

//     @PropDecorator
//     static _age: number
// }
// let user = new User()
// user.name = 'ABcdEFgHijk'
// console.log(user.name);




// 参数装饰器
// const ParamsDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
//     console.log(target, propertyKey, parameterIndex);
// }
// class User {
//     info(name: string, @ParamsDecorator age: number){
//         console.log(age);
//     }
// }



// Reflect.metadata 元数据
// import "reflect-metadata"

// const RequiredDecorator: ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => {
//     let requiredParams: number[] = []
//     requiredParams.push(parameterIndex)
//     Reflect.defineMetadata('metadataKey',requiredParams,target,propertyKey)
// }

// const ValidateDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
//     const method = descriptor.value
//     descriptor.value = function() {
//         const requiredParams: number[] = Reflect.getMetadata('metadataKey',target,propertyKey) || []
//         requiredParams.forEach(index => {
//             if(index > arguments.length || arguments[index] === undefined) {
//                 throw new Error('请传递有必要的参数')
//             }
//             // console.log(arguments);
//             return method.apply(this,arguments)
//         })
//     }
// }

// class User {
//     @ValidateDecorator
//     public all(name: string, @RequiredDecorator id: number) {
//         console.log(name,id);
//     }
// }

// new User().all('小陈同学吗',1998)


// 装饰器执行顺序
const C1: ClassDecorator = () => console.log('类装饰器1');
const C2: ClassDecorator = () => console.log('类装饰器2');
const C3: ClassDecorator = () => console.log('类装饰器3');

const M1: MethodDecorator = () => console.log('方法装饰器1');
const M2: MethodDecorator = () => console.log('方法装饰器2');

const Prop1: PropertyDecorator = () => console.log('属性装饰器1');
const Prop2: PropertyDecorator = () => console.log('属性装饰器2');

const Param1: ParameterDecorator = () => console.log('参数装饰器1');
const Param2: ParameterDecorator = () => console.log('参数装饰器2');

@C1
@C2 @C3
class Thanks {
    @Prop1 @Prop2
    public id:number | undefined

    @M2
    public fun() {}

    @M1
    public sayHello(name: string, @Param1 @Param2 age: number) {
        console.log(name, age);
    }

    @Prop2
    public gender: string | undefined
}
