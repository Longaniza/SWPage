import { idols } from "../data/idols";

export const getIdolsById = (id) => {
    return idols.find((elemento) => elemento.id === id);
}