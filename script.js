const app = angular.module('blogApi', []);
app.controller('home',($scope, $http)=>{
  $http.get('https://api-fake-blog.onrender.com/postagens').
      then((res)=> {
        let postsArray = res.data;
        for(i=0; i<postsArray.length; i++){
          if(postsArray[i].postDate.length<10)
            postsArray[i].postDate = '0' + postsArray[i].postDate;
        }
        
        $scope.posts = postsArray;
        $scope.rand = Math.floor(Math.random() * postsArray.length);
      },
      (erro)=>{
        console.log(erro)
      }
    );
});
app.controller('article',($scope, $http)=>{
  $http.get('https://api-fake-blog.onrender.com/postagem/' + window.location.href.slice(-1)).
      then((res)=> {
        $scope.post = res.data;
        if($scope.post.postDate.length<10)
          $scope.post.postDate = '0' + $scope.post.postDate;
        console.log(res.data)
      },
      (erro)=>{
        console.log(erro)
      }
    );
});

// function loadPosts(){
//     let rand = Math.floor(Math.random() * vetorPosts.length);
//     let rowPosts = document.querySelector('#row-posts')
//     vetorPosts.forEach((post,i)=>{
//         if(post.postDate.length<10)
//             //conserta a data
//             post.postDate = '0' + post.postDate;
//         if(i==rand){
//             //define o post q vai estar no banner
//             document.querySelector('#banner-img').style.backgroundImage = 'url('+post.thumbImage+')';
//             document.querySelector('#banner-title').innerHTML = post.title;
//             document.querySelector('#banner-date').innerHTML = post.postDate;
//         }
//         //constrói o post
//         let col = document.createElement('div');
//         col.classList.add('col','mb-4');
//         rowPosts.appendChild(col);

//         let linkPost = document.createElement('a');
//         linkPost.classList.add('text-decoration-none');
//         linkPost.href = 'post.html';
//         linkPost.addEventListener('click',evt=>{
//             localStorage.setItem('index',JSON.stringify(i));
//         });
//         col.appendChild(linkPost);

//         let card = document.createElement('div');
//         card.classList.add('card', 'h-100', 'text-bg-dark');
//         linkPost.appendChild(card);

//         let imgPost = new Image();
//         imgPost.src = post.thumbImage;
//         imgPost.classList.add('card-img-top');
//         card.appendChild(imgPost);

//         let cardBody = document.createElement('div');
//         cardBody.classList.add('card-body', 'rounded-bottom', 'card-blue', 'd-flex');
//         card.appendChild(cardBody);

//         let cardTitle = document.createElement('h5');
//         cardTitle.classList.add('card-title');
//         cardTitle.innerText = post.title;
//         cardBody.appendChild(cardTitle);

//         let cardDate = document.createElement('p');
//         cardDate.classList.add('card-text', 'align-self-end');
//         cardDate.innerText = 'Publicado em '+post.postDate;
//         cardBody.appendChild(cardDate);
//     });
// }

// function loadArticle(){
//     let index = JSON.parse(localStorage.getItem('index'));
//     if(!index)
//         index = 0;
//     let post = vetorPosts[index];
//     document.querySelector('#title').innerText = post.title;
//     document.querySelector('#author').innerText = post.profileName;

//     if(post.postDate.length<10)
//         post.postDate = '0' + post.postDate;
//     document.querySelector('#date').innerText = post.postDate;
//     document.querySelector('#img-article').src = post.thumbImage;
//     document.querySelector('#alt').innerText = post.thumbImageAltText;
//     document.querySelector('#desc').innerText = post.description;
// }

// if(document.querySelector('#index'))
//     loadPosts()
// else
//     loadArticle();

