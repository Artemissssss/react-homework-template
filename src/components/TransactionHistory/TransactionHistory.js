//Import PropTypes ↓
import PropTypes from "prop-types";
//Imporst CSS file with styles of component(TransactionHistory) ↓
import "./TransactionHistory.module.css";
//Code of element ↓
export default function TransactionHistory({ type, amount, currency }) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
//PropTypes ↓
TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
