import { idols } from "../data/idols";

export const getIdolsBySearch = (name) => {
    if(name ===''){
        return [];
    }
    name = name.toLowerCase();
    return idols.filter((elemento) => elemento.artname.toLowerCase().includes(name));
}