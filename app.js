const form = document.querySelector('#searchForm');
const imgCont = document.querySelector('#imgContainer');
form.addEventListener('submit', async function (e) {
    imgCont.innerHTML = '';
    e.preventDefault();
    const userSearchTerm = this.elements.query.value;
    const config = { params: { q: userSearchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    this.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            imgCont.append(img);
        }  
    }
}