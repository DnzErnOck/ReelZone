import HomeContainer from '@/containers/home'
import { 
        getSingleCategory,
        getCategories,
        getTopRatedMovies,
        getPopularMovies

 } from '@/services/movie'

import React from 'react'


async function HomePage({params}) {
    let selectedCategory;


    const [{results : topRatedMovies},{results : popularMovies}, { genres : categories}]=
    await Promise.all([getPopularMovies(),getTopRatedMovies(),getCategories()]);


    if (params.category && params.category.length > 0) { // params.category'nin varlığını kontrol et
        const {results} = await(getSingleCategory(params.category[0]));
        selectedCategory=results;
        
    }
    
  return (
    <HomeContainer 
    topRatedMovies={topRatedMovies}
    popularMovies={popularMovies}
    categories={categories}
    selectedCategory={{
        id:params.category?.[0] ?? '',
        movies:selectedCategory ? selectedCategory.slice(0,7) : [],
    }}/>
  )
}

export default HomePage