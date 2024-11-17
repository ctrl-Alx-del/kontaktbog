function Item(props) {
  return (
    <>
      {props.items.map((item) => (
        <li key={item.id}>
          <p>{item.firstName}</p>
          <p>{item.lastName}</p>
          <p>{item.phone}</p>
          <p>{item.email}</p>
          <p>{item.company}</p>
          <p>{item.position}</p>
        </li>
      ))}
    </>
  );
}

export default Item;
