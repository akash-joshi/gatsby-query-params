import React from 'react'

import withRouter from 'gatsby-query-params'

function App({ search }) {
  console.log(search)
  return (
    <div>
        Hello
    </div>
  )
}

export default withRouter(App)
