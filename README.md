# gatsby-query-params

> Get query params of the current URL in Gatsby

[![NPM](https://img.shields.io/npm/v/gatsby-query-params.svg)](https://www.npmjs.com/package/gatsby-query-params) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm add gatsby-query-params
```

## Usage

```jsx
import React from 'react'

import withRouter from 'gatsby-query-params'

function App({ search }) {
  
  const { name } = search;

  return (
    <div>
        Hello {name}
    </div>
  )
}

export default withRouter(App)
```

## License

GPLV3 © [akash-joshi](https://github.com/akash-joshi)
