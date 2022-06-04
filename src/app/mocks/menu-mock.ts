import { IMenu } from "../models/menu.model";

export const MENU_MOCK: IMenu [] = [
    {
        id:1,
        titulo: "Comida",
        imagem: "assets/comida.jpg",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.",
        path: "/comida",
      },
      {
        id:2,
        titulo: "Bebida",
        imagem: "assets/refri.jpg",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.",
        path: "/bebida",
      }
]