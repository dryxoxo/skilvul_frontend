export function emptyCard(title, image, release, rate){
    let listFilm = document.getElementById('listMovie')
    let newDate = new Date(release)
    newDate = newDate.toLocaleDateString('ind-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    } )
    return `
    <div class="col-md-4 d-flex align-items-stretch mb-3">
        <div class="card mx-auto" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w185${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p>Rating: ${rate} </p>
             </div>
             <div class="card-footer text-muted">
                ${newDate}
            </div>
        </div>
    </div>
    `
}