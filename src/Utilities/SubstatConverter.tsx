export default function SubstatConverter(substat:string){

    const noApostrophe = substat.replace(/'/g, '');

    return noApostrophe.toLowerCase().replace(/&/g, '').replace(/\s+/g, '_');
}