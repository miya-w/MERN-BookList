 export function getBooksAPI(){
    return fetch('http://localhost:4000/books')
        .then(res => res.json())
        .then(data => data);
 }

 export function addBookAPI(book){
    return fetch('http://localhost:4000/books',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => data);
 }


 export function updateBookAPI(id){
    return fetch(`http://localhost:4000/books/${book._id}`,{
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => data);
 }

 export function deleteBookAPI(id){
    return fetch(`http://localhost:4000/books/${book._id}`,{
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => data);
 }