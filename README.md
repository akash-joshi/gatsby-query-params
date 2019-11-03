# gatsby-query-params

> Get query params of the current URL in Gatsby

[![NPM](https://img.shields.io/npm/v/gatsby-query-params.svg)](https://www.npmjs.com/package/gatsby-query-params) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm add gatsby-query-params
```

## Function Signature

1. getSearchParams - Return query parameters as an object.

```jsx
import { getSearchParams } from "gatsby-query-params";

const searchParams = getSearchParams();
```

2. useQueryParam - Return query parameter for a specific key. If it doesn't exist, returns a set default value ( default null ).

```jsx
import { useQueryParam } from "gatsby-query-params";

const value = useQueryParam(key, defaultValue);
```

## Usage

```jsx
import React, {useState, useEffect} from 'react'
import { useQueryParam, getSearchParams } from "gatsby-query-params";

function App() {
  
  const name = useQueryParam("name", "Akash"); // key, defaultValue
  console.log(name); // log query param
  console.log(getSearchParams()); // Log all parameters

  return (
    <div>
      Hello
    </div>
  )
}

export default App
```

## License

GPLV3 © [akash-joshi](https://github.com/akash-joshi)
