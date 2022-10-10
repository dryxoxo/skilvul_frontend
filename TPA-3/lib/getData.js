const apiKey = '099eae994a8652d0dc9971103253771f'

export async function loadMovie(search) {
    let res = await fetch(
        search ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    )
    return await res.json()
    
}