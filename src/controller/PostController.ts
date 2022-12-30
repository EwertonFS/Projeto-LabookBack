import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { Post } from "../model/Post";
import { createPostInputDTO } from "../types/createPostInputDTO";
import { getPostByIdInputDTO } from "../types/getPostByIdinputDTO";

export class PostController {
  createPost = async (req: Request, res: Response) => {
    let message = "Success!";

    try {
      const { photo, description, type } = req.body;
      //verificando autenticacao
      const token: string = req.headers.authorization as string;
      //
      const input: createPostInputDTO = {
        photo,
        description,
        type,
        token,
      };

      await new PostBusiness().createUser(input);

      res.status(201).send({ message });
    } catch (error) {}
  };

  getPostById = async (req: Request, res: Response) => {
    try {
      let message = "Success!";

      

      const input :getPostByIdInputDTO = {
        id: req.params.id
      }

      const post : Post = await new PostBusiness().getPostById(input)

      res.status(200).send({ message, post });
    } catch (error: any) {
      let message = error.sqlMessage || error.message;
      res.statusCode = 400;

      res.send({ message });
    }
  };
}
