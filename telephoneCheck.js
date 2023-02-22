function telephoneCheck(str) {
    const regex = /^(1 )?\d{3}-\d{3}-\d{4}$|^(1 ?)?\(\d{3}\) ?\d{3}-\d{4}$|^(1 )?\d{3} \d{3} \d{4}$|^\d{10}$/;

    return regex.test(str);
}
