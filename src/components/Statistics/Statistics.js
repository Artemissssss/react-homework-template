//Import PropTypes ↓
import PropTypes from "prop-types";
//Imporst CSS file with styles of component(Statistics) ↓
import "./Statistics.css";
//Code of element ↓
export default function Statistics({ title, stats }) {
  function widthOfItem(i) {
    if (stats.length % 5 > 0 && i + 1 > stats.length - (stats.length % 5)) {
      return 300 / (stats.length % 5) + "px";
    } else {
      return "60px";
    }
  }
  return (
    <section
      className="statistics"
      style={{
        height:
          stats.length > 5
            ? 100 + (Math.floor(stats.length / 5) + 1) * 75 + "px"
            : "175px",
      }}
    >
      <h2 className="title">{title}</h2>
      <ul
        className="stat-list"
        style={{
          height:
            stats.length > 5
              ? (Math.floor(stats.length / 5) + 1) * 75 + "px"
              : "75px",
        }}
      >
        {stats.map((stats, i) => {
          const backColor = `rgb(${Math.floor(
            Math.random() * (255 - 0)
          )},${Math.floor(Math.random() * (255 - 0))},${Math.floor(
            Math.random() * (255 - 0)
          )})`;
          return (
            <li
              className="item"
              key={stats.id}
              style={{
                backgroundColor: true ? backColor : backColor,
                width: widthOfItem(i),
              }}
            >
              <span className="label">{stats.label}</span>
              <span className="percentage">{stats.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
//PropTypes ↓
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
Statistics.deafultProps = {
  title: "Upload stats",
};
