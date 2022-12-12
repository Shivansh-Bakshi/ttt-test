function isSplitter(c) {
    const splitters = new Set([' ', '.', ',', '?', '!', ';', ':', '-', '(', ')', '[', ']', '{', '}', '"', '\u2013', '\u2014']);
    return splitters.has(c);
}

function isEscapeCharacter(c) {
    const escapeCharacters = new Set(['\n', '\r', '\t']);
    return escapeCharacters.has(c);
}

function parseIntoMap(inputString) {
    var wordOccuranceMap = new Map();
    var wordBuffer = [];

    for (const c of inputString) {
        if (!isSplitter(c) && !isEscapeCharacter(c)) {
            wordBuffer.push(c);
        } else {
            const word = wordBuffer.join("").toLowerCase();
            if (word) {
                wordOccuranceMap.set(word, wordOccuranceMap.get(word) + 1 || 1);
                wordBuffer = [];
            }
        }
    }
    return wordOccuranceMap;
}

function parse(inputString) {
    const parsedMap = parseIntoMap(inputString);
    const wordArray = Array.from(parsedMap, ([word, occurance]) => ({word, occurance}))
    const sorted = wordArray.sort(function(a, b) {
        return (a.occurance > b.occurance) ? -1 : ((b.occurance > a.occurance) ? 1 : 0);
    })

    return sorted;
}

export default parse