import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context/global';

const Gallery = () => {
    
    const {id} = useParams();
    const {getAnimePictures, pictures} = useGlobalContext()

    const [index, setIndex] = useState(1); // Initialize with 0

    const switchImage = (i) => {
        if (i >= pictures.length - 1) {
            setIndex(0); // Reset to the first image
        } else {
            setIndex(i); // Move to the next image
        }
    };


    useEffect(()=>{
        getAnimePictures(id)
    },[])


  return (
    <GalleryStyled>
        <div className="back">
            <Link to="/">
                <i className="fas fa-arrow-left">Back to Home</i>
            </Link>
        </div>
        <div className="big-image">
            <img src={pictures[index]?.jpg.image_url} alt="" />
        </div>
        <div className="small-images">
            {pictures?.map((picture, i)=>{
                return <div className="image-con" onClick={()=>switchImage(i)} key={i}>
                    <img src={picture.jpg.image_url} 
                        style={{
                            border: i===index? "3px solid #27AE60" : '3px solid #e5e7eb',
                            filter: i===index? "grayscale(0)" : 'grayscale(60%)',
                            transform: i===index? "sclae(1.1)" : 'scale(1)',
                            transition: 'all .3s ease-in-out'
                        }}
                        alt="" />
                </div>
            })}
        </div>
    </GalleryStyled>
  )
}

const GalleryStyled = styled.div`
    background-color: #EDEDED;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .back{
        position: absolute;
        top: 2rem;
        left: 2rem;
        a{
            font-weight: 600;
            text-decoration: none;
            color: #EB5757;
            display: flex;
            align-items: center;
            gap: .5rem;
        }
    }
    .big-image{
        display: inline-block;
        padding: 2rem;
        margin: 2rem 0;
        background-color: #fff;
        border-radius: 7px;
        border: 5px solid #e5e7eb;
        position: relative;
        img{
            width: 350px;
        }
    }

    .small-images{
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        width: 80%;
        padding: 2rem;
        border-radius: 7px;
        background-color: #fff;
        border: 5px solid #e5e7eb;
        img{
            width: 6rem;
            height: 6rem;
            object-fit: cover;
            cursor: pointer;
            border-radius: 5px;
            border: 3px solid #e5e7eb;
        } 
    }
`;

export default Gallery

// continue at 2:15:00