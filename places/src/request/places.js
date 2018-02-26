function getPlaces(){
    return fetch('http://localhost:8080/places')
        .then(data => {
            return data.json()
        })
        .catch(error => {
            console.log(error);
        })
}

function getPlace(slug){
    return fetch(`http://localhost:8080/places/${slug}`)
        .then(data => {
            return data.json()
        })
        .catch(error => {
            console.log(error);
        })
}

export { getPlaces, getPlace };
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