import { Tilt } from "react-tilt"
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant} from '../utils/motion'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through school projects and side projects that I took interest in. Each project has a summary and links to code repositories, as well as live demos in them. These display my ability to solve complex problems, manage projects with efficiently, as well as utilize different technologies.
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")