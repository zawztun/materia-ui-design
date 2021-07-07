
import React ,{useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ProductComponents from './ProductComponents'
import {setProducts} from '../redux/actions/ProductAction'
import useStyles from '../styles'


import axios from 'axios';

const ProductList = ()=> {
  const classes = useStyles();
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err)=>{
      console.log("Error :" , err)
    });
    dispatch(setProducts(response.data))
  }

useEffect(()=>{
      fetchProduct()
},[])
console.log((products))


  return (
    <React.Fragment>
      <CssBaseline />
      <main className = "container">
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Welcome to Material UI
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <ProductComponents/>
      </main>
    </React.Fragment>
  );
}

export default ProductList;


