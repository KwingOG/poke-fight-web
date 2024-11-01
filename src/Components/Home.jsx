import { useState, useEffect } from 'react'
import axios from 'axios'
import EnemyPokemonCard from './EnemyPokemonCard.jsx'
import TeamPokemonCard from './TeamPokemonCard.jsx'
import StartButton from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import Box from '@mui/material/Box';

import './../App.css'


export default function Home() {

  const [captureLeft, setCaptureLeft] = useState(2);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [enemiesInfo, setEnemiesInfo] = useState([])
  const [teamInfo, setTeamInfo] = useState([])

  const keepAlive = (ms) => {
    setInterval(() => {
      axios.get('https://poke-fight-api.onrender.com/healthcheck')
        .then((res) => {
          console.log("Backend Status: ", res.data.message);
        })
        .catch(error => {
          console.error("Error checking backend status:", error);
        });
    }, ms);
  };

  useEffect(() => {
    const intervalId = keepAlive(60000);
    return () => clearInterval(intervalId);
  }, []);
  

  const startGame = () => {
      let teamPromise = 
          axios.get('https://poke-fight-api.onrender.com/start/team')
              .then((response) => {
                  setTeamInfo(response.data.teamInfo)
                  setSelectedPokemon(response.data.teamInfo[0])
              })
              .catch((error)=>{
                  console.log(error)
              }
          )
      let enemiesPromise = 
          axios.get('https://poke-fight-api.onrender.com/start/enemies')
              .then((response) => {
                  setEnemiesInfo(response.data.enemiesInfo)
              })
              .catch((error)=>{
                  console.log(error)
              }
          )
  }
  if (enemiesInfo.length && teamInfo.length) {
    return (
      <>
        <h1>Now Fight!</h1>
        <Box sx={{ flexDirection:'column', display:'flex', justifyContent:'center', gap:'5%', alignItems:'center'}}>
          <h2>Your team</h2>
          <Box sx={{ display:'flex', justifyContent:'center', gap:'5%'}}>
          {teamInfo.map( (props, id) => {
            return (
              <TeamPokemonCard key={id}
              {...props}
              isSelected={selectedPokemon === props}
              setSelectedPokemon={() => setSelectedPokemon(props)}/>
            )
        })}
          </Box>
        </Box>
        <h2>Enemies</h2>
        <Box sx={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'5%'}}>
          {enemiesInfo.map( (props, id) => {
            return (
              <EnemyPokemonCard key={id}
              enemyPokemon={props}
              teamPokemon={selectedPokemon}/>
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












