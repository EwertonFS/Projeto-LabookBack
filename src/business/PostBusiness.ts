import { PostData } from "../data/PostData";
import { Post } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData } from "../types/authData";
import { createPostInputDTO } from "../types/createPostInputDTO";
import { getPostByIdInputDTO } from "../types/getPostByIdinputDTO";

export class PostBusiness {
  
  async createUser(input: createPostInputDTO) {
    try {
      //validando o token
      const tokenManager = new Authenticator();
      if (!input.token) {
        throw new Error("a jwt must be provided");
      }
      const tokenData: authenticationData = tokenManager.getTokenData(
        input.token
      );

      const idGenerator = new IdGenerator();
      const id: string = idGenerator.generateId();

      const post: Post = {
        id,
        authorId: tokenData.id,
        createdAt: new Date(),
        description: input.description,
        photo: input.photo,
        type: input.type,
      };

      await new PostData().createPost(post);
    } catch (error) {
      throw new Error("error.message");
    }
  }

  async getPostById(input: getPostByIdInputDTO) {
    try {
        const post: Post = await new PostData().getPostById(input.id)

        //customizar melhor o erro
      if (!post) {
         throw new Error("post not found");
      }

      return post;

     
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
}
