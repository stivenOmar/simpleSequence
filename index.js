const elementOfIndex = require("./src/simpleSequence");

console.log("1, 2, 3, 4, 3, 4, 5, 6, 5, 6, 7, 8, …")
const indexToFindElements = [
    {
        index: 0
    },
    {
        index: 5
    },
    {
        index: 76
    },
    {
        index: 545421
    },
    {
        index: 87123641123172368
    },
];

indexToFindElements.forEach(elementToFind => {
    elementToFind["element"] = elementOfIndex(elementToFind.index);
});

console.table(indexToFindElements, ["index", "element"]);

