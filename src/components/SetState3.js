import React, { useState } from 'react'
// import Row from 'react-bootstrap/Row';

export default function SetState3(props) {
  const [name, setName] = useState("Ali");
  function handleNameChange(e) {
    setName(e.target.value)
  }
  return (
    <div>
      <section> <input className='my-4' type="text" value={name} onChange={handleNameChange} /> </section>
    </div>
  )
}
