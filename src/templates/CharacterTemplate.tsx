import React from "react"
import Layout from "../components/layout"
import useSplitWord from "../hooks/useSplitWord"
import styles from "./CharacterTemplate.module.scss"

const CharacterTemplate = ({ pageContext, location }) => {
  const { character } = pageContext

  // Hook to split words
  const { splitWord } = useSplitWord(character.chara_name)

  return (
    <Layout location={location}>
      <div
        className={styles.characterBg}
        style={{ backgroundColor: character.color }}
      >
        <div className={styles.charaDiv}>
          <div>
            <span className={styles.nameBg}>{splitWord && splitWord[0]}</span>
            <span>{splitWord && splitWord[1]}</span>
          </div>
          <div className={styles.characterInfo}></div>
          <div className={styles.characterImg}></div>
        </div>
      </div>
    </Layout>
  )
}

export default CharacterTemplate
