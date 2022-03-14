import React from 'react'
import { Statistic } from 'semantic-ui-react'

function DisplayBalance({title,value,csize='tiny',ccolor='black', align}) {
  return (
    <Statistic size={csize} color={ccolor}>
        <Statistic.Label style={{ textAlign: {align} }}>
            {title}
        </Statistic.Label>
        <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  )
}

export default DisplayBalance