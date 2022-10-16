import style from "./transaction.module.css";

export const TransactionHistory = ({items}) =>{
   const transactionRender = items.map((item) =>{
      return(
         <tr className={style.row} key={item.id}>
        <td className={style.item}>{item.type}</td>
        <td className={style.item}>{item.amount}</td>
        <td className={style.item}>{item.currency}</td>
      </tr>
      );
   });
   return (
      <table className={style.transactionHistory}>
        <thead className={style.head}>
          <tr>
            <th className={style.headitem}>Type</th>
            <th className={style.headitem}>Amount</th>
            <th className={style.headitem}>Currency</th>
          </tr>
        </thead>
          <tbody>{transactionRender}</tbody>
      </table>
    );

}