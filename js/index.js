const loadCatagoris = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(catagoris => displayCatagoris(catagoris))
}

const displayCatagoris = (catagoris) => {
    // console.log(catagoris.data.news_category[0].category_name)
    // console.log(catagoris)
    const { data } = catagoris;
    const { news_category } = data;
    // console.log(news_category[0].category_name)category_id

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
    // console.log(category_id)
    fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
        .then(res => res.json())
        .then(cards => displayCard(cards.data))
}

const displayCard = (cards) => {
    console.log(cards)
    const showCountCard = document.getElementById('show-count-card');
    showCountCard.innerText = cards.length;
    const displayCardContainer = document.getElementById('displayCard');
    cards.forEach(card => {
        console.log(card)
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
                        <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${card.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Title : ${card.title}</h5>
                                    <p class="card-text ">Details : ${card.details}</p>
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex justify-content-between">
                                            <h2>dsfhhf</h2>
                                            <h3>sdfdjf</h3>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <h4>sdf</h4>
                                            <h5>dsf</h5>
                                        </div>
                                        <button>fdgf</button>
                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
        `;
        displayCardContainer.appendChild(cardDiv);
    });
}



loadCatagoris();