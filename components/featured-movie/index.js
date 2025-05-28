import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { backdrop_path, title, overview } = movie;

  return (
    <div className={`${styles.movieWrapper} fluid`}>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title}
          priority
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 15%"
          }}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.movieTitle}>{title}</h1>
        <p
          className={`${styles.overview} ${
            isCompact ? styles.shortOverview : ""
          }`}
        >
          {overview}
        </p>
        <div className={styles.actionButtons}>
          <Link className={styles.playButton} href={`/movie/${movie.id}`}>
            Play
          </Link>
          <button className={styles.addButton}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

//export { FeatureMovieLoading } from "./loading";
export  { FeaturedMovie };