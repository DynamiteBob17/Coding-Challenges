function palindromeChecker(str) {
    const cleanStr = str.toLowerCase().replace(/\W|_/g, "");

    for (let i = 0; i < Math.floor(cleanStr.length / 2); ++i) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
