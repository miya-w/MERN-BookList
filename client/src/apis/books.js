 export function getBooksAPI(){
    return fetch('http://localhost:4000/books')
        .then(res => res.json())
        .then(data => data);
 }

 export function addBookAPI(book){
    return fetch('http://localhost:4000/books',{
        method: 'POST',
        header: {
            'Content- type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => data);
 }


 export function updateBookAPI(id){
    return fetch(`http://localhost:4000/books/${book._id}`,{
        method: 'PATCH',
        header: {
            'Content- type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => data);
 }

 export function deleteBookAPI(id){
    return fetch(`http://localhost:4000/books/${book._id}`,{
        method: 'delete',
        header: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json())
    .then(data => data);
 }