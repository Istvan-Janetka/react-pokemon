import React from 'react'

const Pokemon = ({data}) => {

    const pokemonStyle = {

        color: "black",
        backgroundColor: "#ddd",
        padding: 10,
        marginBottom: 10
    }

  return (
    <div>
        {
            data.map(p => {

                return (
                
                    <div style={pokemonStyle} key={p.name}>
                        <h3>{p.name}</h3>
                        <a href={p.url}>{p.url}</a>
                    </div>
                
                )
            })
        }
    </div>
  )
}

export default Pokemon