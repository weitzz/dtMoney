import React from 'react';
 import { Container } from './styles';
import Summary from '../Summary';
import Transactions from '../Transactions';
const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary/>
      <Transactions/>
    </Container>
  )
}

export default Dashboard;