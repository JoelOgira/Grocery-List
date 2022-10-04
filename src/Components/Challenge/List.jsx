import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <ul className="challenge-ul">
        {items.map(item => (
            <ListItem key={item.id} item={item} />
        ))}
    </ul>
  )
}

export default List;