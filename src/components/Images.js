import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Images = () => {
  function imageBuilder(url, name) {
    return (
      <>
        {" "}
        <container className="p-1 rounded-md">
          <p className="text-xs text-center">{name}</p>
          <img
            className="flex bg-lt rounded-sm p-2 max-w-l mx-auto"
            src={url}
            alt={url}
          />
        </container>
      </>
    )
  }
  const data = useStaticQuery(graphql`
    {
      data: allFile(
        filter: { ext: { eq: ".png" } }
        sort: { order: DESC, fields: modifiedTime }
      ) {
        allArt: nodes {
          publicURL
          name
        }
      }
    }
  `)
  const allArt = data.data.allArt
  return (
    <div className="flex flex-col snap-center p-4">
      {allArt.map(art => {
        const url = art.publicURL
        const name = art.name
        return imageBuilder(url, name)
      })}
    </div>
  )
}

export default Images
