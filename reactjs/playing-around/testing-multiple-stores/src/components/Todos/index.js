const Todos = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item.taskName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
