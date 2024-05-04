import vetorPosts from './json/posts.json' with { type: 'json' }; // trocar por consumo da API futuramente

function loadPosts(){
    let rand = Math.floor(Math.random() * vetorPosts.length);
    let rowPosts = document.querySelector('#row-posts')
    vetorPosts.forEach((post,i)=>{
        if(post.postDate.length<10)
            post.postDate = '0' + post.postDate;
        if(i==rand){
            document.querySelector('#banner-img').style.backgroundImage = 'url('+post.thumbImage+')';
            document.querySelector('#banner-title').innerHTML = post.title;
            document.querySelector('#banner-date').innerHTML = post.postDate;
        }
        let col = document.createElement('div');
        col.classList.add('col','mb-4');
        rowPosts.appendChild(col);

        let linkPost = document.createElement('a');
        linkPost.classList.add('text-decoration-none');
        linkPost.href = 'post.html';
        linkPost.addEventListener('click',evt=>{
            localStorage.setItem('index',JSON.stringify(i));
        });
        col.appendChild(linkPost);

        let card = document.createElement('div');
        card.classList.add('card', 'h-100', 'text-bg-dark');
        linkPost.appendChild(card);

        let imgPost = new Image();
        imgPost.src = post.thumbImage;
        imgPost.classList.add('card-img-top');
        card.appendChild(imgPost);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'rounded-bottom', 'card-blue', 'd-flex');
        card.appendChild(cardBody);

        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = post.title;
        cardBody.appendChild(cardTitle);

        let cardDate = document.createElement('p');
        cardDate.classList.add('card-text', 'align-self-end');
        cardDate.innerText = 'Publicado em '+post.postDate;
        cardBody.appendChild(cardDate);
    });
}

function loadArticle(){
    let index = JSON.parse(localStorage.getItem('index'));
    if(!index)
        index = 0;
    let post = vetorPosts[index];
    document.querySelector('#title').innerText = post.title;
    document.querySelector('#author').innerText = post.profileName;

    if(post.postDate.length<10)
        post.postDate = '0' + post.postDate;
    document.querySelector('#date').innerText = post.postDate;
    document.querySelector('#img-article').src = post.thumbImage;
    document.querySelector('#alt').innerText = post.thumbImageAltText;
    document.querySelector('#desc').innerText = post.description;
}

if(document.querySelector('#index'))
    loadPosts()
else
    loadArticle();

