export default class View {
    constructor(){
       this.info = document.getElementById('header');
       this.backImage = document.getElementById('top');
       this.img1= document.getElementById('cast1');
       this.castList =  document.getElementById('cast-list');
       this.castId =  document.queryCommandValue('.cast');
       this.similar = document.getElementById('similar');
       this.profile = document.querySelector('.modal');
    }   


    pritPlaceHolder(movie){
       
       
      let placeholder = movie.placeHolder.data;
      let backPlaceholder = movie.backHolder.data.results[0].backdrop_path;
      let backUrl = `https://image.tmdb.org/t/p/w1280/`;

      console.log(movie);
      console.log(backPlaceholder);

       this.info.innerHTML = `<div class="header" id="header">
       <!-- <div class="box"> -->
       
       <h1 class="header__name">${placeholder.Title}</h1>
       <p class="header__plot">
          ${placeholder.Plot}
        </p>
       <!-- </div> -->
  
       <p class="header__des">
               <span class="high">${placeholder.Runtime}</span>
               <span>${placeholder.Director}</span>
       </p>     
       <p class="header__details">
               <span>${placeholder.Released} </span> <span class="point"> &deg;</span>
               <span>${placeholder.Genre}</span>
       </p> 
       <p class="header__rating">
           <i class="fas fa-fire rating" ></i>
           <span class="number">${placeholder.imdbRating}</span>  
           <span class="ten">  /10</span>
       </p>
       
       
   </div>`
   this.backImage.style.backgroundImage =`url(${backUrl}${backPlaceholder})`;
    }



    showMovie(movie){

        
       this.info.innerHTML = `<div class="header" id="header">
       <!-- <div class="box"> -->
       
       <h1 class="header__name">${movie.Title}</h1>
       <p class="header__plot">
          ${movie.Plot}
        </p>
       <!-- </div> -->
  
       <p class="header__des">
               <span class="high">${movie.Runtime}</span>
               <span>${movie.Director}</span>
       </p>     
       <p class="header__details">
               <span>${movie.Released} </span> <span class="point"> &deg;</span>
               <span>${movie.Genre}</span>
       </p> 
       <p class="header__rating">
           <i class="fas fa-fire rating" ></i>
           <span class="number">${movie.imdbRating}</span>  
           <span class="ten">  /10</span>
       </p>
       
       
   </div>`
    }
   

    showBack(pic){

      let data = pic.data.results[0].backdrop_path;
         // console.log(pic.data.results[0]);
          
       const base_url = `https://image.tmdb.org/t/p/`;
       const file_size = `w1280`;
    
       this.backImage.style.backgroundImage =`url(${base_url}${file_size}${data})`;
    }


    
   showCasts(casts){
      //console.log(casts);

      let output = '';
      
      casts.forEach(function(cast){

            //let castId = cast.cast_id
            //console.log(castId);

         const castImg = `https://image.tmdb.org/t/p/w185`;

         output +=` 
                        <div class="cast cast1" id="cast1">
                     
                          <img src="${castImg}${cast.profile_path}" class="img img1" id="${cast.id}" alt="${cast.character}">
                        
                        </div>
                 
                        `; 
                        //console.log(id);
        
      });
      this.castList.innerHTML = output;
    }

    showSimilars(similars){
      //console.log(similars);

      let details = '';
      similars.forEach(function(similar){
         //console.log(cast);
         const posterImg = `https://image.tmdb.org/t/p/w500`;

         details +=`<div class="similar">
                        <div class="similar-list">
                           <img src="${posterImg}${similar.poster_path}" class="similar1" id="similar1" alt="">
                        </div>
                   </div>`;

                 
      });
    
      this.similar.innerHTML = details;
      
    }

    showProfile(profile){
      console.log(profile);
      const profilePic = `https://image.tmdb.org/t/p/w185`;
      this.profile.innerHTML =
         `     
         <div class="modal-content">
                  <span class="close" id="close">&times;</span>
                  <div class="profile-box">
                     <div class="profile-pic">
                        <img src="${profilePic}${profile.profile_path}" class="image" alt=" ">
                     </div>
                     <div class="profile-name">
                        <p class="profile-info"> Name : ${profile.name}</p>
                        <p class="profile-info"> Date of Birth : ${profile.birthday}</p> 
                        <p class="profile-info"> place of Birth : ${profile.place_of_birth}</p>   
                        <p class="profile-info"> Known for : ${profile.known_for_department}</p> 
                     </div>
                  </div>
                  <div class="bio-box">
                     <h2 class="bio-header">Biography</h2>
                     <p class="bio">
                             ${profile.biography}
                     </p>
                  </div>
                  
            </div>
         </div>
       
         `
    }
    showTrending(t){
       let trendingMovies = t.trending.data.results;
       console.log(trendingMovies);
      // let half = 10;
      // let halfMovie = trendingMovies.slice(0,half);

     

      

       let movieDetails = '';
       let trendinPic = `https://image.tmdb.org/t/p/w154`;
       
       if(!trendingMovies){
         document.querySelector('.shows').innerHTML = `<div class="loader"></div>`
      }

        trendingMovies.forEach(function(trendingMovie){

        
         
         movieDetails += `
         
          <div class="trending-box">
            <div class="img-box">
             <img src="${trendinPic}${trendingMovie.poster_path}" alt="" class="trending-pic"> 
            </div>
            <div class="text-box">
                  <h1 class="text-box__head"> 
                     ${trendingMovie.original_title}
                  </h1>
                  <p class="text-box__para">
                     ${trendingMovie.overview}
                  </p>
                  <h3 class="text-box__para">
                     Release date:  ${trendingMovie.release_date}
                  </h3>
                  
                  <h3 class="text-review">
                  <span class="vote2">
                  <i class="fas fa-arrow-alt-circle-up"></i>
                     ${trendingMovie.vote_average}
                     
                  </span>   
                   </h3>
               </div>    
             </div>
            
        `

      });
       
      document.querySelector('.trending').innerHTML= movieDetails;


    }
    showTv(tv){
       let tvDetails = tv.tv.data.results;
       let tvall = '';
       let tvPic = `https://image.tmdb.org/t/p/w154`;
       console.log(tvDetails);

       tvDetails.forEach(function(tvDetail){
       console.log(tvDetail);
      
         tvall = ` 
               <div class="tv-card">
                      <h1 class="tv-name">${tvDetail.name}</h1> 
                      <h1 class="tv-name">${tvDetail.overview}</h1> 
                        <div class="tv-img">
                        <img src="${tvPic}${tvDetail.poster_path}" alt="" class=""> 
                        </div>  

               </div>`;

    });

    document.querySelector('.tv-details').innerHTML= tvall;

    }

}

