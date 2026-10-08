function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Помилка: ділення на нуль заборонено!";
            }
            result = num1 / num2;
            break;
        default:
            return "Помилка: невідомий оператор!";
    }

    return `Результат: ${num1} ${operator} ${num2} = ${result}`;
}
console.log(calculate(10, 5, '+'));
console.log(calculate(20, 4, '/'));
console.log(calculate(7, 3, '*'));
console.log(calculate(5, 0, '/'));
