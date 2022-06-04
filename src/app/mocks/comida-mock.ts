import { IComida } from "../models/comida.model"

export const LISTA_COMIDA_MOCK: IComida[] = [
    { 
        id: 100,
        titulo:"Macarrão", 
        imagem:"assets/macarrao.jpg" ,
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.",
        preco: "R$ 10,00" 
    },
    { 
        id: 101,
        titulo:"Comida",        
        imagem:"assets/virado.jpg",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.",
        preco: "R$ 20,00"
    },
    { 
        id: 102,
        titulo:"Lanches",         
        imagem:"assets/lanche.jpg",
        descricao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.",
        preco: "R$ 25,00", 
    },
]


