import React from 'react'
import { Link } from 'react-router-dom'

function SearchResults({searchResults,active}) {
    console.log(searchResults)
    return (
        <>
        {active && (<div className='searchResults'>
            {searchResults.length != 0 ? searchResults.map(result => <Link to={`recipe/${result.id}`} style={{textDecoration:"none"}}>
                <div className='flex flex-as' style={{marginBottom:"20px"}}>
                    <img src={result.imageOne} alt="" style={{width:"80px",height:"70px",objectFit:"cover",marginRight:"10px",borderRadius:"15px"}} />
                    <h4>{result.title}</h4>
                </div>
            </Link>) : <h4 style={{marginBottom:"15px",textAlign:"center"}}>No Search Result Found</h4>}
        </div>)}
        </>
    )
}

export default SearchResults
