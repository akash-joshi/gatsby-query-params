import { useEffect, useState } from 'react'
import queryString from 'query-string'

const getSearchParams = () => {
  const [searchParams, setSearch] = useState({})

  useEffect(() => {
    setSearch(document.location.search ? queryString.parse(document.location.search) : {})
  }, [document.location.search])
  
  return searchParams;
}

const useQueryParam = (key, defaultState) => {
  const searchParams = getSearchParams();
  return searchParams[key] ? searchParams[key] : defaultState ? defaultState : null;
}

export {
  getSearchParams,
  useQueryParam
}
