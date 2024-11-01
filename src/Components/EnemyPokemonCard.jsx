import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'

const fightHandle = (props) => {
  const pokemon = props
  console.log(pokemon)
  const promise =  axios.post('http://localhost:8080/enemy/fight', pokemon)
  .then((res) => alert(`Fighting: ${res.data.name}`))
  .catch(error => console.error("Error in fight:", error)) 
}

const captureHandle = (props) => {
  const pokemon = props
  const promise =  axios.post('http://localhost:8080/enemy/capture', pokemon)
  .then((res) => alert(`Capturing: ${res.data.name}`))
  .catch(error => console.error("Error in capture:", error)) 
}
export default function EnemyPokemonCard(props) {
  return (
    <Card sx={{ outline:3, outlineColor:'#AD8E37', paddingTop:1, width:180, bgcolor:'#242424', marginTop:'5%' }}>
        <Typography sx={{ color: 'ghostwhite', textTransform:'capitalize' }} gutterBottom variant="h5" component="div">
        <strong>{props.name}</strong>
        </Typography>
      <CardMedia
        sx={{height:80, backgroundSize:'96px', bgcolor:'#363636', m:2, outline:1, outlineColor:'#AD8E37', borderRadius:2}}
        image={props.front_default}
        title={props.name}
      />
      <CardContent>
        <Typography variant="body1" sx={{ color: 'ghostwhite' }}>
        <strong>HP:</strong> {props.hp}
        </Typography>
        <Typography variant="body1" sx={{ color: 'ghostwhite' }}>
          <strong>Attack:</strong> {props.attack}
        </Typography>
        <Typography variant="body1" sx={{ color: 'ghostwhite' }}>
        <strong>Defense:</strong> {props.defense}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'space-around', p:2 }}>
        <Button variant='solid'sx={{bgcolor:'gold'}} size="medium" onClick={() => fightHandle(props)}><strong>Fight</strong></Button>
        <Button variant='soft'sx={{ bgcolor:'lightblue'}} size="medium" onClick={() => captureHandle(props)}><strong>Capture</strong></Button>
      </CardActions>
    </Card>
  );
}
