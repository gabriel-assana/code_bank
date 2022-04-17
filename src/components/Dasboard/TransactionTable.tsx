import '../../styles/dashboard/transactiontable.css';

import React, { useContext, useEffect, useState } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

export function TransactionTable () {

    const transactions = useContext(TransactionsContext);

  return(

    <div className="transactiontable">

        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.type}</td>
                  <td>{transaction.description}</td>
                  <td>R${transaction.value}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

    </div>

  )

}


