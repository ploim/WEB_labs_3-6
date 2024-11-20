function getSortedArray(array, key) {
    // Создаем новый массив для хранения отсортированных объектов
    const sortedArray = [...array]; // Копируем исходный массив

    // Реализуем сортировку пузырьком
    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - 1 - i; j++) {
            // Сравниваем значения по указанному ключу
            const firstValue = sortedArray[j][key];
            const secondValue = sortedArray[j + 1][key];

            // Если первое значение больше второго, меняем их местами
            if (firstValue > secondValue) {
                const temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }

    return sortedArray;
}

// Пример использования:
const array = [
    { id: 3, name: "Alice" },
    { id: 2, name: "Charlie" },
    { id: 4, name: "William"},
    { id: 1, name: "Bob" },
];

const sortedById = getSortedArray(array, "id");
sortedById.forEach(item => {
    console.log(item);
})
console.log('-------------------')

const sortedByName = getSortedArray(array, "name");
sortedByName.forEach(item => {
    console.log(item);
})
