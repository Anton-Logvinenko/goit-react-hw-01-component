import css from './TransactionHistory.module.css'

export function TransactionHistory({ items }) {
  const { id, type, amount, currency } = items;
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody >
        {items.map(item => (
          <tr className={css.tableRow} key={item.id}>
            <td className={css.tableData}>{item.type}</td>
            <td className={css.tableData}>{item.amount}</td>
            <td className={css.tableData}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
