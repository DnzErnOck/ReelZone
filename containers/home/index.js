import React from 'react'
import { FeaturedMovie } from '@/components/featured-movie'
import { MoviesSection } from '@/components/movies-section'
import { Categories } from '@/components/categories'

function HomeContainer({popularMovies=[] ,topRatedMovies=[],categories=[], selectedCategory}) {
  return (
    <div>
        <FeaturedMovie
        movie={topRatedMovies[Math.floor(Math.random() * topRatedMovies.length)]}
      />
        <Categories categories={categories.slice(0,5)}/>

        {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}
        
        <MoviesSection 
            title='Populer Films'
            movies={popularMovies.slice(1,7)}
        />
        <MoviesSection 
            title='Top Rated Films'
            movies={topRatedMovies.slice(1,7)}
        />
    </div>
  )
}

export default HomeContainer