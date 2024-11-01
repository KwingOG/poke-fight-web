import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TeamPokemonCard(props) {
  
  const selectHandle = () => {
    props.setSelectedPokemon();
  };

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
        <CardActions sx={{display:'flex',justifyContent:'space-around', p:2 }}>
        {props.isSelected ? 
          <Button variant='solid' sx={{bgcolor:'limegreen', color:'ghostwhite'}} size="medium"><strong>Selected</strong></Button> 
          : <Button variant='solid'sx={{bgcolor:'gold'}} size="medium" onClick={selectHandle}><strong>Select</strong></Button>}
      </CardActions>
      </CardContent>
    </Card>
  );
}