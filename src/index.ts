import { PostBusiness } from "./business/PostBusiness";
import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import { PostController } from "./controller/PostController";
import UserController from "./controller/UserController";
import UserData from "./data/UserData";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

const userBusiness = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
)

const userController = new UserController(
    userBusiness
);

app.post("/user/signup", userController.signup)
app.post("/user/login",userController.login)




const postController = new PostController()

app.post("/post/create",postController.createPost)
app.get("/post/:id",postController.getPostById)