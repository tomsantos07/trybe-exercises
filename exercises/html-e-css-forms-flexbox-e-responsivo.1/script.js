
let states = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
    ];
    
    let listaDeEstados = document.getElementById('state-list');
    
    for (let i = 0; i < states.length; i += 1) {
        let listaDeEstadosRecuperados = states[i];
    
        let stateListItem = document.createElement('option');
        stateListItem.innerText = listaDeEstadosRecuperados
    
        listaDeEstados.appendChild(stateListItem)
    }