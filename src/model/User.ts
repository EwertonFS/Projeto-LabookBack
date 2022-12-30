export default class User{
    constructor(
        private id:string,
        private name:string,
        private email:string,
        private password :string
    ){}
        // tentativa de ultilizacao do id e password da classe na user business quando tipo a var user com User
    // public getPassword() {
    //     return this.password
    //     }
    // public getId() {
    //     return this.id
    //     }
}


export function toUserModel(obj: any): User {
    return obj && {
        id:obj.id,
        name:obj.name,
        email:obj.email,
        password:obj.password

    }
}