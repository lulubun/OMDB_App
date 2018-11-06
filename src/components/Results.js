import React from "react";


const Result = (props) => {
    return(
        props.movies.map((m, i) => {
            const linkId = `https://www.imdb.com/title/${m.imdbID}/`
            const sentence = `is a ${m.Type} from ${m.Year}`
            return (
            <tr
                style={{
                    borderRadius: '7px',
                }}
                key={m.imdbID}
            >
                
                    <td style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        backgroundColor: i % 2 !== 0 ? '#999799' : 'null',
                        color: i % 2 !== 0 ? '#FFFB87' :  '#0A0908',
                        borderRadius: '7px',
                        border: '1px solid #FFFB87',
                        MozBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                        WebkitBoxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                        boxShadow: '5px 5px 5px rgba(68, 68, 68, 0.6)',
                        margin: '15px',
                        // justifyContent: 'center',
                    }}>
                        <div>
                            <a href={linkId}
                                target={'_blank'}
                                style={{
                                    textDecoration: 'none',
                                }}
                            >
                                <img
                                    src={m.Poster}
                                    style={{
                                        maxHeight: '150px',
                                        padding: '5px',
                                        borderRadius: '7px',
                                    }}
                                    alt={`poster for ${m.Title}`}
                                />
                            </a>
                        </div>
                        <div>
                            <h2>
                                {m.Title}
                            </h2>
                            <p>{sentence}</p>
                        </div>
                    </td>
            </tr>
        )
            })
    )
}

export default Result