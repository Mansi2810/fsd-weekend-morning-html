import React from 'react'
import { useState } from 'react'


export default function ButtonWithForm() {

    const[items, setItems] = useState([]);

    const[input, setInput] =useState('')

    function addNewItem() {
        const copy = items.concat([])

        copy.push(input)

        setItems(copy)

        setInput('')
    }

    function makeUpperCase() {
      let copy = items.concat([])

      copy = copy.map(x => x.toUpperCase())

      setItems(copy)
    }

    function makeLowerCase() {
      let copy = items.concat([])

      copy = copy.map(x => x.toLowerCase())

      setItems(copy)
    }

      function makeReverse() {
        let copy = items.concat([]);

        copy = copy.reverse()
       

        setItems(copy)
      }

      function sortAscending() {
        let copy = items.concat([])

        copy = copy.sort();

        setItems(copy)
      }
    
  return (
    <div>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={addNewItem}>Add</button>

        <button onClick={makeUpperCase}>Make Uppercase</button>

        <button onClick={makeLowerCase}>Make Lowercase</button>

        <button onClick={makeReverse}>Reverse</button>

        <button onClick={sortAscending}>Sort Ascending</button>
        <hr/>
        {
            // items.map(item => <MyButton label={item} />)

            items.map(item => <h1>{item}</h1>)
        }
    </div>
  )
}
