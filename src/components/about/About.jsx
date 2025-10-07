import React from 'react'
import "./About.css"
import { aboutImg, portfolio } from '../../assets/images'
import { FaDownload } from "react-icons/fa";
import SectionTitle from '../sectionTitle/SectionTitle';
import { motion } from 'motion/react';
import { slideInVariants } from '../../utils/animation';
import { profList } from '../../data/profList';



function About() {
  return (
    
        <section className="about section" id="about">
            <div className="container flex-center">
                <SectionTitle title="About me" subtitle="About me"/>
                {/* <h2 className="inner-title">About me</h2>
                <h3 className="inner-second-title">About me</h3> */}
                <div className="about-wrapper">
                    <motion.div className="about-img"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}   
                        variants={slideInVariants("left", 0.9, 100, false)}
                    >
                        <img src={portfolio} alt="about"/>
                    </motion.div>
                    <div className="about-info">
                        <div className="description">
                            <motion.h3
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: false, amount: 0.5}}   
                                custom={0}
                                variants={slideInVariants("right", 0.5, 50, true)}
                            >
                                I'm Adilbek
                            </motion.h3>
                            <motion.h4
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: false, amount: 0.5}}   
                                custom={0}
                                variants={slideInVariants("right", 0.5, 50, true)}
                            >
                                A Lead <span>Full-Stack Developer</span> based in <span>Atyrau</span>
                            </motion.h4>
                            <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: false, amount: 0.5}}   
                                custom={0}
                                variants={slideInVariants("right", 0.5, 50, true)}
                            >
                                I design and develop services for customers specializing creating stylish, modern
                                websites,
                                web services and online stores. My passion is to design digital user experiences through
                                meaningful interactions. Check out my Portfolio
                            </motion.p>
                        </div>
                        <ul className="professional-list">
                            {profList.map((item, index) => (
                                <motion.li className="list-item"
                                    key={item.id}
                                    custom={index}
                                    variants={slideInVariants("right", 0.6, 40, true)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: false, amount: 0.5}}
                                 >
                                    <span className="number">{item.number}</span>
                                    <span className="text">{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.a href="/Profile.pdf" download className="inner-info-link"
                            custom={3}
                            variants={slideInVariants("bottom", 0.7, 60, false)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false, amount: 0.5}}
                        >Download
                            <FaDownload/>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>

  )
}

export default About