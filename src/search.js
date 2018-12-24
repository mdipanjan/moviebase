import axios from 'axios';

export default class Movie{
    constructor(){
        
        this.client_key = '36cf91c6' 
        this.moviedb_key = 'a53297087e8cb610974715bafca87543'; 
        this.movieId = '';
        this.castId = '';
    }

//Getting movie data

async placeHolder(){
    try{
        const placeholder =  await axios(`https://www.omdbapi.com/?t=the+fault+in+our+stars&apikey=36cf91c6`);
        const backHolder = await axios(`https://api.themoviedb.org/3/search/movie?api_key=a53297087e8cb610974715bafca87543&query=the+fault+in+our+stars`);
        console.log(backHolder);
        return{
            placeHolder:placeholder,
            backHolder:backHolder
        }
    }
    catch(err){
        console.log(err);
    }
   
}

    async getMovies(query){
        try{
            
            const result =   await axios(`https://www.omdbapi.com/?t=${query}&apikey=${this.client_key}`);
            this.details = result.data; 
            console.log(this.movieId);
            //console.log(this.details);
           // console.log(this.id);
        }
        catch(error){
            console.log(error);
        }
      
    }




     async getTrending(){

         const trending = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=a53297087e8cb610974715bafca87543`);
         //this.trendingMovies =  trending;
            return{
                trending:trending
            }


        // const similar = await axios(`https://api.themoviedb.org/3/movie/${this.Id}/similar?api_key=a53297087e8cb610974715bafca87543&language=en-US&page=1`);
         //this.similarMovies = similar;

         //console.log(this.trendingMovies);
     }


    

    async getBackdrop(query){

        const backdrop = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${this.moviedb_key}&language=en-US&query=${query}&append_to_response=videos,images`);

        
         //const cast = await axios (`https://api.themoviedb.org/3/movie/${this.movieId}/credits?api_key=${this.moviedb_key}`)
        // this.castNames = cast;

        return{
            backdrop:backdrop,
           // cast:cast
        }

    }

  

    async getCasts(){
      
            const castData = await axios (`https://api.themoviedb.org/3/movie/${this.movieId}/credits?api_key=${this.moviedb_key}`);
            // this.castNames = cast;
            // console.log(this.castNames);

            const similar = await axios(`https://api.themoviedb.org/3/movie/${this.movieId}/similar?api_key=${this.moviedb_key}&language=en-US&page=1`);
             //this.similarMovies = similar;


           
           
            return{
                castData:castData,
                similar:similar,
                
            
        }
        
   
        
    }

    async getEachCast(){
        const eachCast = await axios(`https://api.themoviedb.org/3/person/${this.castId}?api_key=${this.moviedb_key}`);

        return{
          
           eachCast:eachCast
            
        
    }
    }
    async getTvShows(){
        const tv = await axios(`https://api.themoviedb.org/3/tv/popular?api_key=${this.moviedb_key}&language=en-US&page=1
        `);
        con

        return{
          
           tv
            
        
    }
    }
    
    
}



