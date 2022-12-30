
import { Post, toPostModel } from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostData extends BaseDatabase {
    protected  TABLE_NAME = "labook_posts"
    async createPost(post:Post){
        try{

            await this.connection(this.TABLE_NAME)
            .insert({ 
                id:post.id,
                photo:post.photo, 
                description:post.description, 
                type:post.type,
                author_id: post.authorId,
                created_at: post.createdAt.toISOString().substring(0,10)
            })

           
        }catch(error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    async getPostById(id:String){
        try {
            const result: any = await this.connection("labook_posts")
            .select("*")
            .where({ id });
            //spo quero o primeiro post
            return toPostModel(result[0])
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

   
}