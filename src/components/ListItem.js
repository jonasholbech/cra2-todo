export default function ListItem(props) {
  return (
    <li className={props.completed ? "completed" : ""}>
      {props.task} <button>Delete</button>
    </li>
  );
}
