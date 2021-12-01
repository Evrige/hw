let firstNum, secondNum;

firstNum = +prompt("Введите первое число");
secondNum = +prompt("Введите второе число");
while (isNaN(firstNum) || firstNum == "" || firstNum == null) firstNum = +prompt("Введите первое число");
while (isNaN(secondNum) || secondNum == "" || secondNum == null) secondNum = +prompt("Введите второе число");

const result = firstNum + secondNum;
alert(`Сумма чисел: ${firstNum} и ${secondNum} равна = ${result}`);