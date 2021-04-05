const createObject = (nome) => ({nome, email: `${nome.replace(/ /g,'_')}@trybe.com`}); // esse 'g' signfica que a substituição é global
const newEmployees = () => {
    const employees = {
        id1: createObject('Pedro Guerra'),
        id2: createObject('Luiza Drumond'),
        id3: createObject('Carla Paiva'),
    }
    return employees;
}

console.table(newEmployees())