import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box, Typography } from '@material-ui/core';
//
import { BaseOptionChart } from './charts';


// ----------------------------------------------------------------------

const CHART_DATA = [
  
  {
    
    
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  },
  {
    name: 'Team C',
    type: 'line',
    data: [200, 225, 700, 425, 700, 0, 525,25]
  }
];

export default function AppWebsiteVisits() {
  const chartOptions = (BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: [
      '23:00',
      '03:00',
      '12:00',
      '14:00',
      '16:30',
      '20:00',
      '23:00'
    ]
  });

  return (
    <Card>
      <CardHeader title="market Overview"
           action={
            <Typography color='primary' variant='h5'>
              je viens a 
            
            
            je viens a 
          </Typography>
          } 
          />
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={264} />
      </Box>
    </Card>
  );
}
