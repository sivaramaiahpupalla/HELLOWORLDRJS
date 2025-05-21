import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {
  let data = useSelector((state) => {
    return (
      {
        balance: state.balance,
        fullName: state.fullName,
        mobile: state.mobile,
        accountNumber: state.accountNumber    
     }
    )
})
  return (
    <div className= "Counter">
    <h2>Account Deatils</h2>
    <table>
        <thead>
            <tr>
                <th>Account Number</th>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Balance</th>
                <th>Button</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{data.account.Number}</td>
                <td>{data.account.fullName}</td>
                <td>{data.account.mobile}</td>
                <td>{data.account.balance}</td>
                <td>
                    <button>Withdraw</button>
                    <span> </span>
                    <button>Add Money</button>
                </td>
            </tr>

                
        </tbody>
        

    </table>
    <table>
      <h2>TransactionDetails</h2>
        <thead>
            <tr>
                <th>ID</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {data.transaction.map((item,index) => {
                return (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.amount}</td>
                        <td>{item.type}</td>
                        <td>{item.date}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    </div>
  )
}
export default Account