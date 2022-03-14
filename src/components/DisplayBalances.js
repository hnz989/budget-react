import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
  return (
    <Segment textAlign='center'>
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <DisplayBalance title='Income' value='1450.00' csize='3' ccolor='green' align='left' />
        </Grid.Column>
        <Grid.Column>
          <DisplayBalance title='Expenses' value='623.50' csize='3' ccolor='red' align='left' />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default DisplayBalances