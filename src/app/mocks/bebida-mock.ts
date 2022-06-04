import { IBebida } from "../models/bebida.model";

export const LISTA_BEBIDA_MOCK: IBebida[] =[
    {
        id: 100,
        titulo:"Bebida 1",        
        imagem: "assets/refri.jpg",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.",
        preco: "R$ 7,00",
    },
    {
        id:101,
        titulo:"Bebida 2",        
        imagem: "assets/agua.webp",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.",
        preco: "R$ 3,00",
    },
    {
        id: 102,
        titulo:"Bebida 3",        
        imagem: "assets/suco.jpg",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.",
        preco: "R$ 10,00"
    },

];