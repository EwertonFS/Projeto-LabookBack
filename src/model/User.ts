export default class User{
    static email(password: string, email: any): boolean | PromiseLike<boolean> {
        throw new Error("Method not implemented.");
    }
    static id: string;
    getters: any;
    constructor(
        private id:string,
        private name:string,
        private email:string,
        private password :string
    ){}
}


export function toUserModel(obj: any): User {
    return obj && {
        id:obj.id,
        name:obj.name,
        email:obj.email,
        password:obj.password

    }
}