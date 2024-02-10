import { estilo, porExtenso } from 'numero-por-extenso';

export const formatDateTime = (mongoDateTime) => {
    let year = mongoDateTime?.substring(0, 4);
    let month = mongoDateTime?.substring(5, 7);
    let day = mongoDateTime?.substring(8, 10);
    let hs = mongoDateTime?.substring(11, 16);
    return `${day}/${month}/${year} ${hs}`
};

export const formatDate = (mongoDateTime) => {
    let year = mongoDateTime?.substring(0, 4);
    let month = mongoDateTime?.substring(5, 7);
    let day = mongoDateTime?.substring(8, 10);
    return `${day}/${month}/${year}`
};

export const limitString = (string, letters = 1) => {
    return string?.substring(0, letters);
};

export const formatReal = (string) => {
    return string?.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
};

export const formatExtenso = (string) => {
    return porExtenso(parseFloat(string?.toString()).toFixed(2), estilo.monetario);
};