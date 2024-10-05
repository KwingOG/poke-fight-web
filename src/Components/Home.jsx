import { useState } from 'react'
import axios from 'axios'
import PokemonCard from './PokemonCard.jsx'
import StartButton from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import Box from '@mui/material/Box';


import './../App.css'


export default function Home() {

    const [enemiesInfo, setEnemiesInfo] = useState([])

    const startGame = () => {
        let startPromise = 
            axios.get('http://localhost:8080/start')
                .then((response) => {
                    setEnemiesInfo(response.data.enemiesInfo)
                    console.log(enemiesInfo)
  
                })
                .catch((error)=>{
                    console.log(error)
                }
            )
    }
    if (enemiesInfo.length) {

      return (
        <>
          <h1>Now Fight!</h1>
          <Box sx={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'5%'}}>
            {enemiesInfo.map( (props, id) => {
              return (
                <PokemonCard key={id} {...props}/>
              )
          })}
          </Box>
        </>
      )
    } else 
      return (
            <>
              <h1>Welcome to PokeFight!</h1>
              <div className="card">
              <StartButton onClick={startGame} endIcon={<ExploreIcon />} size="large" color="error" variant='contained'>Start</StartButton>
              </div>
              <p className="read-the-docs">
                Copyright 2024 Kwing productions.
              </p>
            </>
      )

}












