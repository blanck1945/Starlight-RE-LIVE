import React from "react"
import Layout from "../components/layout"
import styles from "./CharacterTemplate.module.scss"

const CharacterTemplate = ({ pageContext, location }) => {
  const { character } = pageContext
  console.log(character)
  return (
    <Layout location={location}>
      <div
        className={styles.characterBg}
        style={{ backgroundColor: character.color }}
      >
        <div className={styles.characterInfo}></div>
        <div className={styles.characterImg}></div>
      </div>
    </Layout>
  )
}

export default CharacterTemplate
