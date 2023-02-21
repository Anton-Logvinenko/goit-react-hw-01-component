import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ title, stats }) {
  console.log(stats);
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(el => (
          <li
            className={css.itemLable}
            style={{ backgroundColor: getRandomHexColor() }}
            key={el.id}
          >
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Цвет Lable..
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
