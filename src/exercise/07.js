// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

 // We're gonna take the items array (the items displayed on the front end.) look through the allItems array and find the one that isn't present on the page and add it to the page.
function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    const itemIds = items.map(i => i.id)
    setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id)) // Make a new array out of all the items whose id doesn't equal the one you just clicked. Aka remove an item.
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>  {/* Disable the add item button when the amount of items on the page is greater than or equal to the amount available in the array.*/}
        add item
      </button>
      <ul>
        {items.map(item => (
          <li key={item.id}> {/* Helps react keep track of what list item it's changing. Having an id is preferable because the key needs to match the list item. Don't use the index, use unique identifiers*/}
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
