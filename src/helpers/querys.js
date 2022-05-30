export const fetchArt = graphql`
  {
    data: allFile(filter: { ext: { eq: ".png" } }) {
      allArt: nodes {
        publicURL
      }
    }
  }
`
