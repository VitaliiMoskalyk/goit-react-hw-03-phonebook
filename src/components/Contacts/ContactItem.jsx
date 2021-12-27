import propTypes, { shape } from "prop-types";

const ContactItem = ({ data, deleteFunction }) => {
  return (
    data.length > 0 && (
      <ol>
        {data.map((el) => (
          <li key={el.id}>
            <p>{el.name}</p>
            <span>{el.number}</span>
            <button type="button" onClick={() => deleteFunction(el.id)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    )
  );
};

ContactItem.propTypes = {
  data: propTypes.arrayOf(shape).isRequired,
  deleteFunction: propTypes.func.isRequired,
};
export default ContactItem;
