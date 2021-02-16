import React from "react"
import Layout from "../components/layout"
import styles from "./CharacterTemplate.module.scss"

const CharacterTemplate = ({ pageContext, location }) => {
  const { character } = pageContext

  const splitWord = (word: string) => {
    const newArr = word.split(" ")
    return newArr
  }

  return (
    <Layout location={location}>
      <div
        className={styles.characterBg}
        style={{ backgroundColor: character.color }}
      >
        <div className={styles.charaDiv}>
          <div>
            <span className={styles.nameBg}>
              {splitWord(character.chara_name)[0]}
            </span>
            <span>{splitWord(character.chara_name)[1]}</span>
          </div>
          <div className={styles.characterInfo}></div>
          <div className={styles.characterImg}></div>
        </div>
      </div>
    </Layout>
  )
}

export default CharacterTemplate
