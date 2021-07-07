import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from '../styles';
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {selectedProduct, removeSelectedProduct } from '../redux/actions/ProductAction'
import axios from 'axios';

const ProductDetails = (props) => {
    const classes = useStyles();
    const { productId } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
          console.log("Err: ", err);
        });
      dispatch(selectedProduct(response.data));
      console.log(response.data)
    };
  
    useEffect(() => {
      if (productId && productId !== "") fetchProductDetail(productId);
      return () => {
        dispatch(removeSelectedProduct());
      };
    }, [productId]);

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);}

    return (
        <div className = "container">
            {
                Object.keys(product).length === 0 ? (
                    <div>Loading</div>
                ):(
                    <Grid container direction = "column">
                    <Grid item container>
                        <Grid item xs = {2}/>
                            <Grid item  xs = {8} style = {{margin:'12em'}}>
                    <Card className={classes.root} >
                <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    Zaw
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                    <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
                />
                <CardMedia
                className={classes.media}
                image={image}
                title="title"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                   {description}
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                   <p>{price}</p> 
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                     {description}
                    </Typography>
                </CardContent>
                </Collapse>
            </Card>
            </Grid>
                <Grid item xs = {2}/>
            </Grid>
            </Grid>
                )
            }  
    </div>
    );
}
export default ProductDetails