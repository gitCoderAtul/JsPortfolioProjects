import { options,pageContent } from "./env.js";
 
const {apiMovieList,apiPopularList,apiNowPlayingList,apiUpcomingList,apiTopRatedist,imgPath} = pageContent;
var txtSearch = document.getElementById('txtSearch'); 

    txtSearch.addEventListener('change', function(){
        console.log(txtSearch.value);
           document.querySelector('#movieList').innerHTML = '';
               let serachVal = txtSearch.value.toLowerCase().trim()
               console.log(serachVal); 
          
    if(serachVal == ''){
        movieValue(); 
    }else { 
       fetch(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${serachVal}&page=1`)
       .then(response => response.json())
       .then((value)=>{ 
           console.log(value);
           value = value.results; 
           value && value.length > 0 && value.map((res)=>{ 
          // console.log(res);
           movieViewData(res)
       })
       })
       .catch(err => console.error(err));      
      }
    });
    
 


//  const apiData = fetch(pageContent.apiMovieList, options);
// const fetchData = ()=>{

  let listItem = document.querySelectorAll('#pageName li');
 console.log(listItem);
// //  console.log(listItem[0]);
   listItem[0].addEventListener('click',movieValue)
  listItem[1].addEventListener('click',popularMovieValue)
  listItem[2].addEventListener('click',nowPlayingValue)
  listItem[3].addEventListener('click',upcomingMovieValue)
  listItem[4].addEventListener('click',topRatedMovieValue)

  movieValue();

function movieValue(){
    console.log(this);
    document.querySelector('#movieList').innerHTML = '';
    fetch(apiMovieList, options)
    .then((response) => response.json())
    .then((value)=>{
        console.log(value);
        value = value.results; 
        value && value.length > 0 && value.map((res)=>{ 
       // console.log(res);
        movieViewData(res)
    });
    })
} 

function popularMovieValue(){
    console.log(this);
    document.querySelector('#movieList').innerHTML = '';
    fetch(apiPopularList, options)
    .then((response) => response.json())
    .then((value)=>{
        console.log(value);
        value = value.results;
        value && value.length > 0 && value.map((res)=>{ 
       // console.log(res);
        movieViewData(res)
    });
    })
} 

function nowPlayingValue(){
    console.log(this);
    document.querySelector('#movieList').innerHTML = '';
    fetch(apiNowPlayingList, options)
    .then((response) => response.json())
    .then((value)=>{
        console.log(value);
        value = value.results;
        value && value.length > 0 && value.map((res)=>{ 
       // console.log(res);
        movieViewData(res)
    });
    })
}
function upcomingMovieValue(){
    console.log(this);
    document.querySelector('#movieList').innerHTML = '';
    fetch(apiUpcomingList, options)
    .then((response) => response.json())
    .then((value)=>{
        console.log(value);
        value = value.results;
        value && value.length > 0 && value.map((res)=>{ 
       // console.log(res);
        movieViewData(res)
    });
    })
}
function topRatedMovieValue(){
    console.log(this);
    document.querySelector('#movieList').innerHTML = '';
    fetch(apiTopRatedist, options)
    .then((response) => response.json())
    .then((value)=>{
        console.log(value);
        value = value.results;
        value && value.length > 0 && value.map((res)=>{ 
        //// console.log(res);
        movieViewData(res)
    });
    })
}

/*listItem.forEach((items)=>{
    console.log(items);
    items.addEventListener('click', function(){
        // console.log(this.innerHTML);
        let listValue = this.innerHTML;
          console.log(listValue);
          if(listValue == 'Home'){ 
            console.log('----Home'); 

        }else if(listValue == 'Popular Movie'){ 
            console.log('----Popular Movie');

        }else if(listValue == 'Now Playing'){
            console.log('---Now Playing');
             
        }else if(listValue == 'Upcoming Movies'){
            console.log('---Upcoming Movies');
        }else if(listValue == 'Top Rated Movie'){
            console.log('-----Top Rated Movie');  
        }

    })
})
*/
// listItem.addEventListener('click', function(){
//     console.log(this);  
//     // for (const key of listMovie) {
//     //     console.log(key);
//     //     console.log(key.innerHTML);
//     //     let listValue = key.innerHTML;
//     //     listValue.addEventListener('click',function(){

//     //     })
//     //     if(listValue === 'Popular Movie '){
//     //         console.log(true);
//     //     }
//     // }
// })


   
// }
// fetchData(); 


/* const {title,backdrop_path,overview,release_date,vote_average } = res; 
const  average = Math.round(vote_average*10);
var divTag = document.createElement('div');
divTag.className='flex  max-sm:w-6/12 max-md:w-4/12 max-lg:w-3/12 w-2/12 mb-5';
divTag.innerHTML =`
<div class="mx-2 border border-solid rounded-lg shadow-md w-full relative"> 
        <img src='${imgPath}${backdrop_path}' alt="" class="w-[100%] h-[200px] object-cover object-top rounded-tr-lg">
        <div class="pb-2 pt-8 px-3">  
        <h2 id="movieOverView" class="font-semibold"> ${title} </h2>
        <p class="text-gray-500">${release_date}</p> 
  </div>
  <p class="absolute bg-black w-[50px] h-[50px] text-white border-4 border-solid border-green-500 rounded-[50%] text-center top-[170px] left-2" style="line-height:40px"> 
  ${average}% </p>  
</div>`
document.querySelector('#movieList').append(divTag);
*/

function movieViewData(res){ 
    
    const {title,backdrop_path,overview,release_date,vote_average } = res; 
    const  average = Math.round(vote_average*10);
    const noImage= 'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg';
    var divTag = document.createElement('div');
    divTag.className='flex  max-sm:w-6/12 max-md:w-4/12 max-lg:w-3/12 w-2/12 mb-5';
   
    divTag.innerHTML =`
    <div class="mx-2 border border-solid rounded-lg shadow-md w-full relative">  
    <img src='${imgPath}${backdrop_path}' alt="" class="w-[100%] h-[200px] object-cover object-top rounded-tr-lg">
            <div class="pb-2 pt-8 px-3">  
            <h2 id="movieOverView" class="font-semibold"> ${title} </h2>
            <p class="text-gray-500">${release_date}</p> 
      </div>
      <p class="absolute bg-black w-[50px] h-[50px] text-white border-4 border-solid border-green-500 rounded-[50%] text-center top-[170px] left-2" style="line-height:40px"> 
      ${average}% </p>  
    </div>`
    document.querySelector('#movieList').append(divTag);
}
 



 