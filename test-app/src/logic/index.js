const logic = {
    _url: 'http://localhost:8082/hotels.json',

    retrieveHotels() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        })
            .then(res => res.json()) 
    },
}

//For run the app, uncomment this:
export default logic

//For run the test, uncomment this:
// module.exports = logic
