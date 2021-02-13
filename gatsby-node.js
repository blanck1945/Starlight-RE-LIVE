const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built! Yuppy`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const CharaTemplate = path.resolve('src/templates/CharacterTemplate.tsx')
  const result = await graphql(`
  {
    allStrapiCharacter {
      nodes {
        id
        chara_name
        school
        student_id
        voice
        video
        color
        desc
        slug
        title
        school_logo
        profile_img {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`)
  result.data.allStrapiCharacter.nodes.forEach(character => {
    createPage({
      path: `characters/${character.slug}`,
      component: CharaTemplate,
      context: {
        title: character.title,
        character: character
      },
    })
  })
}