import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';

const InfoCard = ({ id, type, title, content, onDelete}) => {
  return (
    <Card sx={{ minWidth:200,maxWidth: 345,margin: "10px" }} variant="outlined">
      <CardContent> 
        <Typography gutterBottom variant="h5" component="div">
          <Alert severity={type}>{title}</Alert>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onDelete(id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}

export default InfoCard;