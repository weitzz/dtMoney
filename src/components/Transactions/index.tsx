import React from 'react';

 import { Container } from './styles';

const Transactions: React.FC = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Títutlo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desev Site</td>
            <td className="deposit">R$12.000</td>
            <td>Desev</td>
            <td>02/05/21</td>
          </tr>
          <tr>
            <td >Aluguel</td>
            <td className="withdraw">- R$1.000</td>
            <td>Desev</td>
            <td>02/05/21</td>
          </tr>
      
        </tbody>
      </table>
    </Container>
  )
}

export default Transactions;