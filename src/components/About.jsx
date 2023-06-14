import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { services } from '../constants'

const ServiceCard = ({index , title , icon}) => {
  return(
      <p>{title}</p>    
  )
}

const About = () => {
  return (
    <>
      <motion.div  variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a passionate and experienced software engineer with expertise 
        in both front-end and back-end development.I thrive in collaborative 
        environments and have a strong problem-solving mindset.
        Continuously learning and staying up to date with industry trends
        I am driven to create user-centric applications that have a positive impact on people's lives.
        I am excited to contribute my skills to innovative projects 
        and make a meaningful impact in the field of software engineering
        Let's work together to bring your ideas to life!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    
    
    </>

  );
};
export default About;
