import React, { useState } from 'react'
import styled from 'styled-components'
import Popular from './Popular'
import { useGlobalContext } from '../context/global'

const Homepage = () => {

    const {handleSubmit, search, searchAnime, handleChange, getUpcomingAnime, getAiringAnime, getPopularAnime} = useGlobalContext()

    const [rendered, setRendered] = useState('popular')

    const switchComponent = () =>{
        switch(rendered){
            case 'popular':
                return <Popular rendered={rendered}/>
            case 'popular': // change to airing
                return <Popular rendered={rendered}/>
            case 'popular': // change to upcoming
                return <Popular rendered={rendered}/>       
            default:
                return <Popular rendered={rendered}/>       
        }
    }

    const fetchPopularAnime = () => {
        setRendered('popular')
        getPopularAnime()
    }

    const fetchAiringAnime = () => {
        setRendered('airing')
        getAiringAnime()
    }

    const fetchUpcomingAnime = () => {
        setRendered('upcoming')
        getUpcomingAnime()
    }


return (
    <HomepageStyled>
            <header>
                    <div className="logo">
                            <h1>
                                    {rendered === 'popular' ? 'Popular Anime'
                                    : rendered === 'airing' ? 'Airing Anime' : 'Upcoming Anime'}
                            </h1>
                    </div>
                    <div className="search-container">
                            <div className="filter-btn popular-filter">
                                    <button onClick={fetchPopularAnime}>Popular</button>
                            </div>
                            <form action="" className='search-form'>
                                    <div className="input-control">
                                            <input type="text" name="Search Anime" value={search} onChange={handleChange}/>
                                            <button type="submit" onClick={handleSubmit}>Search</button>
                                    </div>
                            </form>
                            <div className="filter-btn airing-filter">
                                    <button onClick={fetchAiringAnime}>Airing</button>
                            </div>
                            <div className="filter-btn upcoming-filter">
                                    <button onClick={fetchUpcomingAnime}>Upcoming</button>
                            </div>
                    </div>
            </header>
            {switchComponent()}
    </HomepageStyled>
)
}

const HomepageStyled = styled.div`
    background-color: #EDEDED;
    header{
        padding: 2rem 5rem;
        width: 60%;
        margin: 0 auto;
        transition: all .4s ease-in-out;
        @media screen and (max-width:1530px){
            width: 95%;
        }
        .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 2rem;
        }
        .search-container{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            button{
                display: flex;
                align-items: center;
                gap: .5rem;
                padding: .7rem 1.5rem;
                outline: none;
                border-radius: 30px;
                font-size: 1.2rem;
                background-color: #fff;
                cursor: pointer;
                transition: all .4s ease-in-out;
                font-family: inherit;
                border: 5px solid #e5e7eb;
            }
            form{
                position: relative;
                width: 100%;
                .input-control{
                    position: relative;
                    transition: all .4s ease-in-out;
                }
                .input-control input{
                    width: 100%;
                    padding:.7rem 1rem;
                    border: none;
                    outline: none;
                    border-radius: 30px;
                    font-size: 1.2rem;
                    background-color: #fff;
                    border: 5px solid #e5e7eb;
                    transition: all .4s ease-in-out;
                }
                .input-control button{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
`

export default Homepage