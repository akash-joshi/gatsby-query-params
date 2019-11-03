import React, {useState, useEffect} from 'react'
import { useQueryParam } from "gatsby-query-params";

function App() {
  
  const name = useQueryParam("name", "Akash");

  console.log(name);

  return (
    <div>
        {name}
    </div>
  )
}

export default App
