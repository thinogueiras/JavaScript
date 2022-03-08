const addressExample = {
    Street: 'Rui Barbosa, 1807',
    Neighborhood: 'Centro',
    City: 'Ribeirão Preto',
    State: 'São Paulo',
    Country: 'Brazil',
    ZipCode: 14092470,
};

function showCompleteAddress(address) {
    for (const key in address) {
        console.log(`${key}: ${address[key]}`);
    }
}

showCompleteAddress(addressExample);
