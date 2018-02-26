function login(credentials){
    return fetch('http://localhost:8080/sessions',{
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => {
        // console.log('res', response);
        return response.json();
    });
}

function signUp(credentials){
    return fetch('http://localhost:8080/users',{
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => {
        // console.log('res', response);
        return response.json();
    });
}

export { login, signUp };