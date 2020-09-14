import { idols } from "../data/idols";

export const getIdolsByGroup = (group) => {
    return idols.filter((elemento) => elemento.group === group);
}