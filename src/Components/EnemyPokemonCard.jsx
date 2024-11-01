import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'


const fightHandle = (props, setStatus) => {
  const pokemons = props
  const promise =  axios.post('https://poke-fight-api.onrender.com/enemy/fight', pokemons)
  .then((res) => {
    alert(res.data.message)
    setStatus(res.data.result ? "won" : "escaped");

  })
  .catch(error => console.error("Error in fight:", error)) 
}

const captureHandle = (props, setStatus) => {
  const { enemyPokemon } = props
  const promise =  axios.post('https://poke-fight-api.onrender.com/enemy/capture', enemyPokemon)
  .then((res) => {
    alert(res.data.message)
    setStatus(res.data.result ? "captured" : "escaped");
  })
  .catch(error => console.error("Error in capture:", error)) 
}
export default function EnemyPokemonCard(props) {
  const [status, setStatus] = useState(null);

  return (
    <Card sx={{ outline: 3, outlineColor: '#AD8E37', paddingTop: 1, width: 180, bgcolor: '#242424', marginTop: '5%' }}>
      {status === "captured" ? (
        <CardContent>
          <Typography sx={{ color: 'limegreen', textAlign: 'center' }} variant="h5">
            <strong>Captured!</strong>
          </Typography>
          <Typography sx={{ color: 'ghostwhite', textAlign: 'center' }}>
            {props.enemyPokemon.name} is now part of your team!
          </Typography>
        </CardContent>
      ) : status === "won" ? (
        <CardContent>
          <Typography sx={{ color: 'gold', textAlign: 'center' }} variant="h5">
            <strong>Victory!</strong>
          </Typography>
          <Typography sx={{ color: 'ghostwhite', textAlign: 'center' }}>
            {props.enemyPokemon.name} was defeated!
          </Typography>
        </CardContent>
      ) : status === "escaped" ? (
        <CardContent>
          <Typography sx={{ color: 'red', textAlign: 'center' }} variant="h5">
            <strong>Escaped!</strong>
          </Typography>
          <Typography sx={{ color: 'ghostwhite', textAlign: 'center' }}>
            {props.enemyPokemon.name} got away!
          </Typography>
        </CardContent>
      ) : (
        <>
          <Typography sx={{ color: 'ghostwhite', textTransform: 'capitalize' }} gutterBottom variant="h5" component="div">
            <strong>{props.enemyPokemon.name}</strong>
          </Typography>
          <CardMedia
            sx={{ height: 80, backgroundSize: '96px', bgcolor: '#363636', m: 2, outline: 1, outlineColor: '#AD8E37', borderRadius: 2 }}
            image={props.enemyPokemon.front_default}
            title={props.enemyPokemon.name}
          />
          <CardContent>
            <Typography variant="body1" sx={{ color: 'ghostwhite' }}>
              <strong>HP:</strong> {props.enemyPokemon.hp}
            </Typography>
            <Typography variant="body1" sx={{ color: 'ghostwhite' }}>
              <strong>Attack:</strong> {props.enemyPokemon.attack}
            </Typography>
            <Typography variant="body1" sx={{ color: 'ghostwhite' }}>
              <strong>Defense:</strong> {props.enemyPokemon.defense}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-around', p: 2 }}>
            <Button variant='solid' sx={{ bgcolor: 'gold' }} size="medium" onClick={() => fightHandle(props, setStatus)}><strong>Fight</strong></Button>
            <Button variant='soft' sx={{ bgcolor: 'lightblue' }} size="medium" onClick={() => captureHandle(props, setStatus)}><strong>Capture</strong></Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}
