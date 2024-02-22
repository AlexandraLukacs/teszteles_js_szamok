export function parose(szam){

    let psE=false;
    /* Akkor fusson csak le, ha a szám értéke egész szám */
    if (!Number.isNaN(szam)){
        return "ez nem szám"
    } 
    if (Number.isInteger(szam)){
        if (szam % 2 === 0){
            psE=true;
        }
    }

    return psE;
}

//HF jól megcsinálni ezt