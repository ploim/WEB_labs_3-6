function caesar(str, shift, action) {
    const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const alphabetLength = alphabet.length;
    const result = [];

    // Устанавливаем знак сдвига в зависимости от действия (либо +, кодирование, либо -, декодирование)
    const effectiveShift = action === 'encode' ? shift % alphabetLength : -shift % alphabetLength;

    for (let char of str) {
        const index = alphabet.indexOf(char.toLowerCase()); //находим индекс (в алфавите) нынешней буквы (из данного текста)

        if (index !== -1) { //если нашли в алфавите индекс(т.е. букву)
            // Находим новый индекс с учетом сдвига, не забываем про переход при с 33 на 1 букву
            let newIndex = (index + effectiveShift + alphabetLength) % alphabetLength;
            let newChar = alphabet[newIndex]; // новая буква

            // Сохраняем регистр символа
            if (char === char.toUpperCase()) {
                newChar = newChar.toUpperCase();
            }

            result.push(newChar);
        }
        else {
            // Если символ не в алфавите, добавляем его без изменений
            result.push(char);
        }
    }
    //объединяем элементы массива, куда сохраняли, и объединяем элементы в string (.join)
    return result.join('');
}


console.log(caesar('ЭзтЫХз фзъЗЪз', 8, 'decode')) //Дано в условии, расшифровывается в: хакуна матата
console.log(caesar('хакуна матата', 8, 'encode'))

console.log(caesar('Чйцч хецфумтежетнд ёшпж жтй ерщежнче UTmhbRFDK', 5, 'decode'))

console.log(caesar('Shift равен 33', 33, 'encode'))
console.log(caesar('Shift равен 0', 0, 'decode'))