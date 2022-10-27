
export enum Post_Types  {
Normal = "normal" ,
Event = "event"
}

// export default class Post {
//     constructor(
//       private id:string , 
//       private photo:string,
//       private description:string,
//       private create_At:Date,
//       private type:Post_Types,
//       private authorId: string

//     ){}
// }

export type Post = {
  id: string,
  photo: string,
  description: string,
  type: Post_Types,
  createdAt: Date,
  authorId: string
}


export function toPostModel(obj:any):Post{
  return obj && {
    id:obj.id,
    photo:obj.photo,
    description:obj.description,
    type:obj.type,
    authorId:obj.id
  }
}