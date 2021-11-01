import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: 'auto',
    transition: '0.3s',
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
    '&:hover': {
      boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
    },
    padding: '6px',
  },
  media: {
    paddingTop: '2px',
  },
  content: {
    textAlign: 'left',
    padding: '5px',
  },
  divider: {
    margin: `5px 0`,
  },
  heading: {
    fontWeight: 'bold',
  },
  subheading: {
    lineHeight: 1.8,
  },
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard(props) {
  const [expanded, setExpanded] = useState(false);
  const productLists = props.productlist.additional_image_link;
  console.log('productLists', productLists);
  const nameArr = productLists.split(',');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component='img'
        image={props.productlist.image_link}
        alt='Product Icon'
      />
      <CardContent className={classes.content}>
        <Divider className={classes.divider} light />
        <Typography
          gutterBottom
          className={'MuiTypography--subheading'}
          variant={'caption'}
        >
          {'Unique Id: '} {props.productlist.gtin}
        </Typography>
        <Typography
          className={'MuiTypography--heading'}
          variant={'h6'}
          gutterBottom
        >
          {props.productlist.title}
        </Typography>

        <Typography gutterBottom style={{ fontSize: '16px' }}>
          {'Gender: '}
          {props.productlist.gender === 'male' ? 'Male' : 'Female'}
        </Typography>
        <Typography gutterBottom style={{ fontSize: '16px' }}>
          {'Price: '}
          {props.productlist.price}
        </Typography>
        <Typography gutterBottom style={{ fontSize: '16px' }}>
          {'Sale Price: '}
          {props.productlist.sale_price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          {nameArr.map((item) => (
            <CardMedia
              className={classes.media}
              component='img'
              image={item}
              alt='Product Icon'
            />
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
