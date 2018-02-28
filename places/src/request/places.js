import config from '../config/secrets';

function getPlaces(){
    return fetch(`${config.url}/places`)
        .then(data => {
            return data.json()
        })
        .catch(error => {
            console.log(error);
        })
}

function getPlace(slug){
    return fetch(`${config.url}/places/${slug}`)
        .then(data => {
            return data.json()
        })
        .catch(error => {
            console.log(error);
        })
}

function createPlace(data, jwt) {
    const formData = new FormData();
    for(let field in data){
        formData.append(field, data[field])
    }
    return fetch(config.url+'/places', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${jwt}`
        }
    }).then(dataRemote => {
        return dataRemote.json();
    })
}

export { getPlaces, getPlace, createPlace };
export default {
    places: [
        {
            imageUrl: '/images/place-1.jpg',
            title: 'Desayunos del rey',
            description: 'Starbucks Corporation is an American coffe and coffehouse chain',
            address: 'Suite 039'

        },
        {
            imageUrl: '/images/place-1.jpg',
            title: 'Starbucks Norte',
            description: 'Starbucks Corporation is an American coffe and coffehouse chain',
            address: 'Suite 318'
        },
        {
            imageUrl: '/images/place-1.jpg',
            title: 'Pizza de amor',
            description: 'Starbucks Corporation is an American coffe and coffehouse chain',
            address: 'Suite 318'

        }
    ]
}