
const ListItem = ({ item }) => {
  return (
    <li className="challenge-li">
        {JSON.stringify(item)}
    </li>
  )
}

export default ListItem;