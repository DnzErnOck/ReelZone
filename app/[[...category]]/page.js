import HomeContainer from '@/containers/home'
import React from 'react'
import Movies from '@/mocks/movies.json'

async function delay(ms) {
    return new Promise((resolve => setTimeout(resolve,ms)))
}

async function HomePage({params}) {
    await delay(2000)
    let selectedCategory;
    if (params.category && params.category.length > 0) { // params.category'nin varlığını kontrol et
        selectedCategory = true;
    }
    
  return (
    <HomeContainer selectedCategory={{
        id:params.category?.[0] ?? '',
        movies:selectedCategory ? Movies.results.slice(0,7) : [],
    }}/>
  )
}

export default HomePage