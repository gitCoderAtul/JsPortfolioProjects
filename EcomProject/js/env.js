const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDY3ZWM3ODJkZmYxNTE1MDRlNmRkMmYzYTRjMmZjMyIsInN1YiI6IjY1NDYyNTY2MWFjMjkyN2IyZjI1NTU1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XmUj9rFmo10AaX0BPj2pMdvioe_d5Sbut-zkvB2Mdmk'
    }
  } 
  const Api_key= 'c45a857c193f6302f2b5061c3b85e743';
  const pageContent = {
    apiMovieList : `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=3`,
    // apiPopularList: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2',
      apiNowPlayingList: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=4',
    // apiUpcomingList: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=4',
    // apiTopRatedist: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=5', 
    imgPath : 'https://media.themoviedb.org/t/p/w220_and_h330_face',
    apiPopularList :  `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1*`,
    apiTopRatedist:`https://api.themoviedb.org/3/movie/top_rated?api_key=${Api_key}&language=en-US&page=1`,
    apiUpcomingList: `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=1`
  }
  export {options, pageContent}