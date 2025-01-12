import React from 'react'
import { useGlobalContext } from '../context/global';

const Popular = () => {
    const {popularAnime, isSearch} = useGlobalContext()

    const conditionalRender = () =>{
        if(!isSearch){
            return popularAnime.map((anime)=>{
                console.log(anime)
            })
        }
    }
  return (
    <div>
        <div className="popular-anime">
            {conditionalRender()}
        </div>
    </div>
  )
}

export default Popular