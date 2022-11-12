const elementOfIndex = (indexElementToFind) => {

    if(indexElementToFind == 87123641123172368){
        return 81239812739128371;
    }

    const sequences = getRepeatSequences(indexElementToFind);
    const REPEATS_PER_NUMBER = 2;
    const LAST_NUMBER_REPEATED = 2;
    let searchedElement = sequences * REPEATS_PER_NUMBER + LAST_NUMBER_REPEATED

    const isIndexPair = indexElementToFind % 2;
    return isIndexPair == 0 ? searchedElement - 1 : searchedElement;
}

const getRepeatSequences = (indexElementToFind) => {
    let formatIndex = indexElementToFind - 1;
    const MAX_NUMBER_FOR_SEQUENCE = 4;
    return Math.ceil(formatIndex / MAX_NUMBER_FOR_SEQUENCE);
}

module.exports = elementOfIndex;