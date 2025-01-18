import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AnimeItem = () => {
    const {id} = useParams();
    
    const[anime, setAnime] = useState({})
    const[characters, setCharacters] = useState([])
    const[showMoreDetails, setShowMoreDetails] = useState(false)

    //deconstruct anime
    const {
        title, synopsis, 
        trailer,duration,aired, 
        season, images, rank, 
        score,scored_by, popularity, 
        status, rating, source } = anime

    // get anime based on id

    const getAnime = async (anime) => {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
        const data = await response.json(); // Parse the JSON response
        setAnime(data.data)
    };

    const displayMoreDetails = () => {
        setShowMoreDetails(!showMoreDetails)
    }

    useEffect(()=>{
        getAnime(id)
    },[])
    


  return (
    <div>
        <h1>{title}</h1>
        <div className="details">
            <div className="detail">
                <div className="image">
                    <img src={images?.jpg.large_image_url} alt="" />
                </div>
                <div className="anime-details">
                <p><span>Aired:</span><span>{aired?.string}</span></p>
                    <p><span>Rating:</span><span>{rating}</span></p>
                    <p><span>Rank:</span><span>{rank}</span></p>
                    <p><span>Score:</span><span>{score}</span></p>
                    <p><span>Scored By:</span><span>{scored_by}</span></p>
                    <p><span>Popularity:</span><span>{popularity}</span></p>
                    <p><span>Status:</span><span>{status}</span></p>
                    <p><span>Source:</span><span>{source}</span></p>
                    <p><span>Season:</span><span>{season}</span></p>
                    <p><span>Duration:</span><span>{duration}</span></p>
                </div>
            </div>
            <p className="description">
                {showMoreDetails ? synopsis: synopsis?.substring(0,450) + '...'}
                <button onClick={()=>{
                    displayMoreDetails()
                }}>{showMoreDetails ? 'Show Less' : 'Read More'}</button>
            </p>
        </div>
        <h3 className="title">Trailer</h3>
        <div className="trailer-con">
            {trailer?.embed_url ? 
                    <iframe 
                        src={trailer?.embed_url} 
                        title="Inline Frame Example"
                        width="800"
                        height="450"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe> :
                <h3>Trailer not available</h3>
            }
        </div>
    </div>
  )
}

export default AnimeItem