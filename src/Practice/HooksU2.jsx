import React from 'react'
import { useState, useEffect } from 'react'

export default function HooksU2() {
    const [count, setCount]= useState(0);
  return (
    <div>
      <p>Count:</p>
      <button>Add</button>
    </div>
  )
}
