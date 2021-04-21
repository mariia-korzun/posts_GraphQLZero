import { React, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client';
import { FETCH_DATA } from '../../query'
import Spinner from './spinner'
import './app.scss'

const App = () => {
    const { loading, error, data } = useQuery(FETCH_DATA, {
        variables: {
            options: {
              paginate: {
                page: 1,
                limit: 5
              }
            }
          }
    })
    if (loading) { return <Spinner /> }
    if (error) { return <h1>{error.toString()}</h1> }
    console.log(data)
    return (<p>{data.toString()}</p>)
}

export default App