import Item from "./Item";
function List(props) {
  return (
    <ul>
      <Item items={props.data} />
    </ul>
  );
}

export default List;
