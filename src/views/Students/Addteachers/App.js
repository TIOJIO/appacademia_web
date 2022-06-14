import { Table ,Paper,TableHead ,TableBody,TableCell, TableRow} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import react from 'react'


const useStyles = makeStyles({
    main: {
        backgroundColor:"rgb(17, 141, 65)" 
    },
    head: {
        color:"white" 
    },
    
      
  });

const App = () =>{
    const classes = useStyles();
  return (
      <div>
      <Paper>
           <Table  sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
             <TableHead  className={classes.main}>
            <TableCell className={classes.head} >NAME</TableCell>
            <TableCell className={classes.head} >E-MAIL</TableCell>
            <TableCell className={classes.head} >PHONE&nbsp;(g)</TableCell>
            <TableCell className={classes.head} >DATE OF BIRTH&nbsp;(g)</TableCell>
            <TableCell className={classes.head} >PLACE OF BIRTH&nbsp;(g)</TableCell>
                </TableHead>

                <TableBody>
                    <tr>
                         <td>tiojio romain junior</td>
                         <td>tiojioromain@gmail.com</td>
                         <td>6 95913105</td>
                         <td>12/25/01</td>
                         <td>DOUALA</td>
                    </tr>
                    <tr>
                         <td>tiojio romain junior</td>
                         <td>tiojioromain@gmail.com</td>
                         <td>6 95913105</td>
                         <td>12/25/01</td>
                         <td>DOUALA</td>
                    </tr>
                   
                </TableBody>

          </Table>


      </Paper>
      <br/>

         <form>
               < input type='text' name ="nom" placeholder="votre nom ..." />
               < input type='email' name="email"  placeholder="votre email ..." />
               < input type='number' name="phone" placeholder="votre numero ..." />
               < input type='date' name="date" placeholder="votre date de..." />
               < input type='text' name="place" placeholder="votre lieu de ..." />
               <button type="submit"> add</button>
         </form>
</div>

      
  )
}

export default App;