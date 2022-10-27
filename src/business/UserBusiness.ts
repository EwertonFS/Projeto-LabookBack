import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { LoginInputDto } from "../types/loginInputDTO";
import { SignupInputDTO } from "../types/signupInputDTO";

export default class UserBusiness{
    

    constructor(
        private userData:UserData,
        private idGenerator:IdGenerator,
        private hashManager:HashManager,
        private authenticator:Authenticator
    ){}

    signup = async (input:SignupInputDTO) =>{
        //validacao
        const {name, email, password} = input
        if(!email || !name || !password){
            throw new Error("Campos inválidos")
        }

        //conferir se o usuario existe
        const registeredUser = await this.userData.findByEmail(email)
        if(registeredUser){
            throw new Error("Email já cadastrado")
        }

        //criar uma id pro usuario
        const id = this.idGenerator.generateId()

        //hashear o password
        const hashedPassword = await this.hashManager.hash(password)

        //criar o usuario no banco
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )
        await this.userData.insert(user)
        //criar o token
        const token = this.authenticator.generateToken({id})
        //retornar o token
        return token
    }

    login = async (input: LoginInputDto) => {
    
        try {
            if(!input.email || !input.password){
                throw new Error("email and password must be provided")
            }

            const registerUser = await this.userData.findByEmail(input.email)
            
            if(!registerUser){
                throw new Error("Invalid credentials")
            }
           
            

            const passwordIsCorrect:boolean = await this.hashManager.compare(input.password,registerUser.password)

            if(!passwordIsCorrect){
                throw new Error("Invalid Crendentials")

            }

            const token :string = this.authenticator.generateToken({id:registerUser.id})

            return token
        } catch (error) {
            
        }
        
    } 
}