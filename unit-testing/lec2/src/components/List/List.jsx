import { useState } from "react"


function List() {
  const [newItem, setNewItem] = useState('');
  const [list, setList] = useState(["Item 1","Item 2","Item 3"]);

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem]);
    }, 500)
  }

  function removeFromList(item) {
    setTimeout(() => {
      setList(state => state.filter(item => item !== item));
    }, 500)
  }

  return (
    <>
      <input placeholder="Add Item" value={newItem} onChange={e => setNewItem(e.target.value)} />
      <button onClick={addToList}>Add</button>
      <ul>
        {list.map(item => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List