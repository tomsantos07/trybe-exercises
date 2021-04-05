const check = (num1, num2) => (num1 === num2);

const resultado = (number, action) => {
    const pulled = Math.ceil(Math.random() * 4);
    console.log(pulled);
    if (action (number, pulled)) {
        console.log('Parabéns, você ganhou!');
    } else {
        console.log('Tente novamente');
    }
}

resultado(3, check);