import Movie from './search' ;
import View from './View';
const movie = new Movie;
const view = new View;

// console.log(movie);
const button = document.querySelector('.button').addEventListener('click',b);
const cross = document.querySelector('.cross').addEventListener('click',c);
function b(e){
    
   let navigation = document.querySelector('.navbar');
    if (navigation.className === "navbar") {
        navigation.className += " responsive";
    } else {
        navigation.className = "navbar";
    }
    console.log('clicked');
}function c(e){
    
    let navigation = document.querySelector('.navbar');
     if (navigation.className === "navbar") {
         navigation.className += " responsive";
     } else {
         navigation.className = "navbar";
     }
     console.log('clicked');
 }



if(document.title ==='Moviebase-Movies'){
    console.log('ok');

    movie.placeHolder().then(p=>{
        view.pritPlaceHolder(p);
    })

    const searchMovie = document.getElementById('search__button').addEventListener('click',(e)=>{
        e.preventDefault();
        const input  = document.getElementById('search__input').value;

     
        //console.log(input);
    
    
        if(input !== ''){
    
            movie.getMovies(input)
            .then(response =>{
                if(movie.details.Response === 'False'){
                    console.log('Spell the name correctly')
                }
                else{
                    
                    view.showMovie(movie.details);
                    //console.log(movie.details);
                    
                }
            });
    
    
    
            movie.getBackdrop(input)
            .then(result=>{
                let Id = result.backdrop.data.results[0].id;
                //console.log(Id);
                view.showBack(result.backdrop);
                console.log(result);
                
    
                movie.movieId = Id;
          
    
               
            }).then(res=>{
                // setTimeout(() => {
                //     movie.getCasts();
                    
                //     console.log(res);
                // }, 500);
    
                movie.getCasts().then(ans=>{
    
                    let allCasts = ans.castData.data.cast;
                    let size = 8;
                    let halfCasts = allCasts.slice(0,size);
                
                    view.showCasts(halfCasts);
                     
                     // console.log(ans);



                    let allSimilars = ans.similar.data.results;
                    let count = 6;
                    let halfallSimilars = allSimilars.slice(0,count);
                    //console.log(halfallSimilars);
                    view.showSimilars(halfallSimilars);
                   
                    
            
                })
                
               
            });
    
           
        
        }
       
    });



 let modal = document.getElementById('modal');
//et button = document.getElementsByClassName('cast-list');
let span = document.getElementById("close");


document.body.addEventListener('click',clickOn);

function clickOn(e){
    
    if(e.target.className === 'img img1'){
        console.log('clicked');
        let castId = e.target.id;
       //let castName = e.target.alt;
        movie.castId = castId;
        
        console.log(castId);
        //console.log(castName);

        movie.getEachCast().then(r=>{

            let profile = r.eachCast.data;
            view.showProfile(profile);
            modal.style.display = 'block';

            document.body.addEventListener('click',close);

        function close(e){
            if(e.target.className === 'close'){
                modal.style.display = 'none';
            }
                
            }
            
        })


    }
   
}

       
}else if(document.title ==='Moviebase-shows'){
    console.log("All resources finished loading!");
    //window.addEventListener('load', movie.getTrending);



    movie.getTrending().then(t=>{
        //console.log(t.trending);
        view.showTrending(t);
        // let trending = t.trending;
      
    });
    

}else if(document.title ==='Moviebase-Tv'){
    console.log('Hello from Tv');
    movie.getTvShows().then(tv=>{
        view.showTv(tv);
    });
}


        












