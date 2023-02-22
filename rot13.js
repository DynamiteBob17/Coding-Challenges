const A = "A".charCodeAt(0);
const Z = "Z".charCodeAt(0);

function rot13(str) {
    return str.split("")
        .map(char => /[A-Z]/.test(char)
            ? String.fromCharCode(char.charCodeAt(0) + 13 > Z
                ? char.charCodeAt(0) + 13 + A - Z - 1
                : char.charCodeAt(0) + 13)
            : char)
        .join("");
}
