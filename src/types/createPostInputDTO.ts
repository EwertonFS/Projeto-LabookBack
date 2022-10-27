import { Post_Types } from "../model/Post";

export interface createPostInputDTO {
    photo:string,
    description:string,
    type:Post_Types
    token:string
}