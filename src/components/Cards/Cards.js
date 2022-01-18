import { Container, Grid, CardContent, Typography, Card } from "@material-ui/core";
import CountUp from 'react-countup';
//import cx from 'className';

//import styles from './Cards.module.css';

const Cards = ( props ) => {
    console.log(props.data);
    if(!props.data){
        return "Loading.....";
    }
    
    return (
        <Container maxWidth="md">
            <Grid container spacing={3}>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                           Infected
                        </Typography>
                        <Typography  variant="h5">
                           <CountUp start={0} end={ props.data.confirmed.value } duration={2.5} separator="," />
                        </Typography>  
                        <Typography color="textSecondary" gutterBottom>
                            
                        </Typography>  
                        <Typography  variant="body2">
                            
                        </Typography>    
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography  variant="h5">
                           <CountUp start={0} end={ props.data.recovered.value } duration={2.5} separator="," />
                        </Typography>  
                        <Typography color="textSecondary" gutterBottom>
                           
                        </Typography>  
                        <Typography  variant="body2">
                           
                        </Typography>    
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                           Deaths
                        </Typography>
                        <Typography  variant="h5">
                        <CountUp start={0} end={ props.data.deaths.value } duration={2.5} separator="," />
                        </Typography>  
                        <Typography color="textSecondary" gutterBottom>
                           
                        </Typography>  
                        <Typography  variant="body2">
                            
                        </Typography>    
                    </CardContent>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cards;