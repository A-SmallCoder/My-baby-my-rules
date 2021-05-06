import React from 'react'
import './style.css'
import { Chart } from 'react-charts'

/**
* @author Andrew Small
* @function Stats
**/

const Stats = (props) => {

    const data = React.useMemo(
        () => [
          {
            label: 'This week',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
          },
          {
            label: 'lst week',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
          }
        ],
        []
      )
     
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )

  return(
    <div>
        Coming soon
        <div className="chartHolder">
            <Chart data={data} axes={axes} />
        </div>
        
    </div>
   )

 }

export default Stats