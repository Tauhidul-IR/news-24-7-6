document.getElementById("error-message").style.display = "none";
document.getElementById('loader-spinner').style.display = "none";
document.getElementById('show-count').style.display = "none";
const loadCatagoris = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(catagoris => displayCatagoris(catagoris))
        .catch((error) => {
            document.getElementById("error-message").style.display = "block";
        });
}

const displayCatagoris = (catagoris) => {
    const { data } = catagoris;
    const { news_category } = data;

    const catagoriContainer = document.getElementById('catagori-container');
    catagoriContainer.innerHTML = `
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadcard('${news_category[0].category_id}')">${news_category[0].category_name}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadcard('${news_category[1].category_id}')">${news_category[1].category_name}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadcard('${news_category[2].category_id}')">${news_category[2].category_name}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadcard('${news_category[3].category_id}')">${news_category[3].category_name}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#" onclick="loadcard('${news_category[4].category_id}')">${news_category[4].category_name}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadcard('${news_category[5].category_id}')">${news_category[5].category_name}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#" onclick="loadcard('${news_category[6].category_id}')">${news_category[6].category_name}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadcard('${news_category[7].category_id}')">${news_category[7].category_name}</a>
                </li>
               
            </ul>
    `;

}

const loadcard = (categoryId) => {
    document.getElementById('loader-spinner').style.display = "block";

    fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
        .then(res => res.json())
        .then(cards => displayCard(cards.data))

}

const displayCard = (cards) => {
    document.getElementById('show-count').style.display = "block";

    const showCountCard = document.getElementById('show-count-card');
    showCountCard.innerText = cards.length;
    const displayCardContainer = document.getElementById('displayCard');
    displayCardContainer.textContent = '';
    cards.forEach(card => {
        // console.log(card)
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
                        <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${card.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">Title : ${card.title}</h3>
                                    <p class="card-text ">Details : ${card.details.slice(0, 400)}...</p>
                                    <div class="d-flex justify-content-between  align-items-center flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row pt-4">
                                        <div class="d-flex flex-column flex-sm-row justify-content-between  align-items-center">
                                            <div class="d-flex justify-content-between"  style="height: 40px; width: 40px">
                                            <img src="${card.author.img ? card.author.img : "no Img"}" class="img-fluid rounded-start" alt="..."></div>
                                        
                                            <h4 class="px-3">${card.author.name ? card.author.name : 'No name'}</h4>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <a href="#"><i class="fa-regular fa-eye"></i></a>
                                            <h5 class="px-3">${card.total_view ? card.total_view : '0'}M</h5>
                                        </div>
                                        <button class="btn btn-primary" onclick="loadModalDetails('${card._id}')"  data-bs-toggle="modal" data-bs-target="#newsDetails">Details</button>
                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
        `;
        displayCardContainer.appendChild(cardDiv);
    });
    document.getElementById('loader-spinner').style.display = "none";

}

const loadModalDetails = (newId) => {
    fetch(`https://openapi.programming-hero.com/api/news/${newId}`)
        .then(res => res.json())
        .then(data => displaymodalCard(data.data[0]))
}

const displaymodalCard = (cards) => {
    console.log(cards)
    const modalTitle = document.getElementById('newsDetailsLabel')
    modalTitle.innerHTML = `Title :${cards.title}`
    const newsDetails = document.getElementById('news-details');
    newsDetails.innerHTML = `
            <img src="${cards.author.img ? cards.author.img : "no Img"}" class="img-fluid rounded-start" alt="..."></div>
            <h4>Author name : ${cards.author.name ? cards.author.name : "No name Found"}</h4>
            <p>published Date: ${cards.author.published_date ? cards.author.published_date : "No date Found"}</p>
            <p>Details : ${cards.details ? cards.details : "No data found"}</p>
            <p>Total View : ${cards.total_view ? cards.total_view : "0"} M</p>
            <p>Rating: ${cards.rating.badge ? cards.rating.badge : "No rating"} </p>
            <p>Rating Number: ${cards.rating.number ? cards.rating.number : "No rating"} </p>
            
    `



}


loadCatagoris();