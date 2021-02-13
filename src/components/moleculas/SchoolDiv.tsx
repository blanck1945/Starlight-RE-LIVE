import React from "react"
import Image from "../image"
import styles from "./SchoolDiv.module.scss"
import { Link } from "gatsby"
import { CharacterInterface, SchoolInterface } from "../../interfaces/School"

interface SchoolDivProps {
  school: SchoolInterface
}

const SchoolSection = ({ school }: SchoolDivProps) => {
  const {
    desc,
    chara,
    school_img: {
      childImageSharp: { fluid },
    },
  } = school

  const charaDis = chara.map((el): any => (
    <Link to={el.slug}>
      {console.log(el)}
      <Image
        key={el.id}
        image={el.profile_img.childImageSharp.fluid}
        imgClass={styles.charaImgSchool}
      />
    </Link>
  ))

  console.log(charaDis)
  return (
    <div>
      <Image image={fluid} imgClass={styles.schoolImg} />
      <p>{desc}</p>
      <div className={styles.charaDiv}>{charaDis}</div>
    </div>
  )
}

export default SchoolSection
