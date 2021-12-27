import propTypes from "prop-types";

const Filter = ({ state, onChange }) => {
  return (
    <label htmlFor={state}>
      <input
        type="text"
        placeholder="Find contact"
        value={state}
        onChange={onChange}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  state: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
export default Filter;
