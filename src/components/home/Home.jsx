import "./Home.css"
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
import { mainImg } from "../../assets/images";
import { motion } from "motion/react";
import { iconVariants, slideInVariants } from "../../utils/animation";



function Home() {

    const icons = [
        { id: 1, href: "", icon: <FaFacebookF /> },
        { id: 2, href: "", icon: <FaInstagram /> },
        { id: 3, href: "", icon: <FaGithub /> },
    ];

  return (
     
       
        <section className="home" id="home">
            <div className="container home-wrapper">
                <div className="media-icons">
                    {icons.map((item, index) => (
                       <motion.a 
                            href={item.href} 
                            key={item.id}
                            custom={index}
                            variants={iconVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false, amount: 0.5}}

                        >
                        {item.icon}
                       </motion.a> 
                    ))}
                    
                    
                </div>
                <div className="home-info">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}   
                        custom={0}
                        variants={slideInVariants("left", 0.5, 50, true)} 
                    >Hi, I am Ilay</motion.h1>
                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}   
                        custom={1}
                        variants={slideInVariants("left", 0.7, 50, true)}
                    >Front-end Developer</motion.h3>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}   
                        custom={2}
                        variants={slideInVariants("left", 0.9, 60, true)}>
                        I create stunning websites for your business, Highly experienced in web design and development
                    </motion.p>
                    <motion.a 
                        href=""
                        className="home-info-link inner-info-link"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}   
                        custom={4}
                        variants={slideInVariants("left", 0.9, 100, true)}
                    >
                        Contact me
                        <FaCircleArrowRight/>
                    </motion.a>
                </div>
                <motion.div className="home-img"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.5}}   
                    variants={slideInVariants("right", 0.5, 150, false)}
                >
                    <img src={mainImg} alt="man"/>
                </motion.div>
            </div>
            <a href="#about" className="scroll-down">
                Scroll down
                <FaArrowDownLong className="i"/>
            </a>
        </section>
        
     
  )
}

export default Home