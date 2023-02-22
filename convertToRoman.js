function convertToRoman(arabicNumber) {
    const ARRO_TABLE = {
        "1000": "M",
        "900": "CM", "500": "D", "400": "CD", "100": "C",
        "90": "XC", "50": "L", "40": "XL", "10": "X",
        "9": "IX", "5": "V", "4": "IV", "1": "I"
    };
    const ARABIC_NUMERALS = Object.keys(ARRO_TABLE).reverse().map(key => parseInt(key));
    let romanNumeral = "";

    ARABIC_NUMERALS.forEach(arabicNumeral => {
        while (arabicNumeral <= arabicNumber) {
            romanNumeral += ARRO_TABLE["" + arabicNumeral];
            arabicNumber -= arabicNumeral;
        }
    });

    return romanNumeral;
}
