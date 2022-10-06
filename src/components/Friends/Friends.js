//Import PropTypes ↓
import PropTypes from "prop-types";
//Imporst CSS file with styles of component(Friends) ↓
import "./Friends.css";
//Code of element ↓
export default function Friends({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span
        className="status"
        style={{ background: isOnline ? "#44b14b" : "#fe5052" }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
//PropTypes ↓
Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
