const elementOfIndex = (indexElementToFind) => {

    if(indexElementToFind == 0){
        return 1;
    }

    if(indexElementToFind == 1){
        return 2;
    }

    const INICIAL_INDEX_SEQUENCE = 2;
    const NUMBER_REPEATED = 2;
    const elementToFind = Math.round(Math.abs(INICIAL_INDEX_SEQUENCE - indexElementToFind) / NUMBER_REPEATED);
    const lastNumberNoRepeated = 2;
    return lastNumberNoRepeated + elementToFind;
}

module.exports = elementOfIndex;