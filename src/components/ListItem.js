export default function ListItem(props) {
  //props.deleteItem
  function handleDelete() {
    props.deleteItem(props.id);
  }
  return (
    <li className={props.completed ? "completed" : ""}>
      {props.task} <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
