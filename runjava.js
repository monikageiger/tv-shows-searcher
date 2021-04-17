const form = document.querySelector('#searchForm');
const list = document.querySelector('#lista')
// const table = document.querySelector('#table1')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        const network = result.show.network ? result.show.network.name : "";
        const img = document.createElement('IMG');
        img.src = result.show.image.medium;
        const name = result.show.name;
        const date = result.show.premiered;
        const type = result.show.type;
        const genres = result.show.genres;
        const rating = result.show.rating.average;
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        cell1.appendChild(img);
        cell2.innerHTML = name;
        cell3.innerHTML = date;
        cell4.innerHTML = type;
        cell5.innerHTML = genres;
        cell6.innerHTML = rating;
        cell7.innerHTML = network;
    }
}

