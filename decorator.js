"use strict";
// 类装饰器
// const AddressDecorator: ClassDecorator = (target: Function) => {
//     console.dir(target);
//     target.prototype.age = 18
//     target.prototype.getAddress = () => {
//         return '你心里'
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const C1 = () => console.log('类装饰器1');
const C2 = () => console.log('类装饰器2');
const C3 = () => console.log('类装饰器3');
const M1 = () => console.log('方法装饰器1');
const M2 = () => console.log('方法装饰器2');
const Prop1 = () => console.log('属性装饰器1');
const Prop2 = () => console.log('属性装饰器2');
const Param1 = () => console.log('参数装饰器1');
const Param2 = () => console.log('参数装饰器2');
let Thanks = class Thanks {
    fun() { }
    sayHello(name, age) {
        console.log(name, age);
    }
};
__decorate([
    Prop1,
    Prop2,
    __metadata("design:type", Object)
], Thanks.prototype, "id", void 0);
__decorate([
    M2,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Thanks.prototype, "fun", null);
__decorate([
    M1,
    __param(1, Param1),
    __param(1, Param2),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Thanks.prototype, "sayHello", null);
__decorate([
    Prop2,
    __metadata("design:type", Object)
], Thanks.prototype, "gender", void 0);
Thanks = __decorate([
    C1,
    C2,
    C3
], Thanks);
