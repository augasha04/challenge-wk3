// an event listener
document.querySelector('#addTickets').addEventListener('add', handleadd)

// event handlers
function handleadd (e){
    e.preventdefault()
    let movieObj = {
        name:e.target.name.value,
        imageUrl:e.target.image_url.value,
        description:e.target.description.value,
        add:0
    }
}
renderAddTicket(movieObj)
rendeOneMovie(movieObj)

//fetch for all movie resources
function getAllMovies (){
    fetch ('http://localhost:3000/films',)
    .then (res => res.json())
    .then (movieData => movieData.foreach(movie => renderAddTicket(movieObj)))
}

    
    

//fetch request
function FlatironMovies (movieObj){
    fetch ('http://localhost:3000/films',{
    method:'post',
    headers:{
        'content-Type':'application/json'
    },
    body:JSON.stringify(movieObj)
    .then(res=>res.json())
    .then(tickets =>console.log(tickets))
    })
}