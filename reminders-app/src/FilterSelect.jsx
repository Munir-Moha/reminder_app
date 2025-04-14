import PropTypes from "prop-types";

function FilterSelect(props) {
  return (
    <label htmlFor="filterReminders">
      Show tasks due:
      <select id="filterReminders" value={props.selectedFilter}>
        <option value="2day">within 2 Days</option>
        <option value="1week">within 1 week</option>
        <option value="30days">within 30 Days</option>
        <option value="all">Next any time</option>
      </select>
    </label>
  );
}

FilterSelect.propTypes = {
  selectedFilter: PropTypes.string,
  SetSelectedFilter: PropTypes.func,
};

FilterSelect.defaultProps = {
  selectedFilter: "all",
};

export default FilterSelect;
