import { Container, Grid, CardContent, Typography, Card } from "@material-ui/core";
import CountUp from 'react-countup';
import classNames from 'classnames';

import styles from './Cards.module.css';

let cx = classNames.bind(styles);

const Cards = ( props ) => {
    console.log(props.data);
    if(!props.data){
        return "Loading.....";
    }
    
    return (
        <Container maxWidth="md">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item  xs={12} md={4} component={Card} className={cx(styles.card, styles.confirmed)}>
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
                            Number of active cased of Covid-19
                        </Typography>    
                    </CardContent>
                </Grid>
                <Grid item  xs={12} md={4} component={Card} className={cx(styles.card, styles.recovered)}>
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
                            Number of recoveries from Covid-19
                        </Typography>    
                    </CardContent>
                </Grid>
                <Grid item  xs={12} md={4} component={Card} className={cx(styles.card, styles.deaths)}>
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
                            Number of deaths caused by Covid-19
                        </Typography>    
                    </CardContent>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Cards;