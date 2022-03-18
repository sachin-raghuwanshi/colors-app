import React from 'react'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const Posts = () => {
    let {category,id}=useParams()
    let [SearchParams,setSearchParams]=useSearchParams()
    console.log(SearchParams.get('price'))
    return (
        <div>
            <h1>posts-{category}-{id}-{SearchParams.get('cost')}</h1>
        </div>
    )
}

export default Posts
