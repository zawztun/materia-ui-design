import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import useStyles from '../styles'

// const cards = [1,2,3,4,5,6,7,8,9,10,11,12]

const ProductComponents = () => {
    const classes = useStyles();
    const products = useSelector((state) => state.allProducts.products );
  
const renderlist = products.map((product) => {
    const {id, image, price, title, category} = product;
          return ( 
            <Grid item key={product.id} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                    <Link to = {`/product/${id}`}>
                        <CardMedia
                            className={classes.cardMedia} 
                            image={image} style = {{display:'cover'}}
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            {/* <Typography gutterBottom variant="h5" component="h2">
                            Heading
                            </Typography> */}
                            <Typography>
                                {title}
                            </Typography>
                        </CardContent>
                    </Link>
                    <CardActions>
                            <Typography>
                                $ {price}
                            </Typography>
                            <Typography>
                                {category}
                            </Typography>                    
                        <Button size="small" color="secondary">
                            BUY
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            );   
        });

    return (
        <>
         <CssBaseline />
         <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
                {renderlist}
          </Grid>
        </Container>
        </>
    )
}

export default ProductComponents
