import React from 'react'

const Pagination = ({goNextPage, goPrevPage}) => {
  return (
    <div>
        {goNextPage && <button onClick={goNextPage}>Next</button>}
        {goPrevPage && <button onClick={goPrevPage}>Previous</button>}
    </div>
  )
}

export default Pagination