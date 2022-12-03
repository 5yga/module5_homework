let value = +prompt('Введите значение');
if (value && 1) {
    if (value % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}