import "./Home.css"
import { FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCircleArrowRight, FaArrowDownLong } from "react-icons/fa6";
import { mainImg, portfolio } from "../../assets/images";
import { motion } from "motion/react";
import { iconVariants, slideInVariants } from "../../utils/animation";



function Home() {

    const icons = [
        { id: 1, href: "https://wa.me/87759536877", icon: <FaWhatsapp /> },
        { id: 2, href: "https://www.instagram.com/adilbektokishov/", icon: <FaInstagram /> },
        { id: 3, href: "https://github.com/Adok414", icon: <FaGithub /> },
    ];

  return (
     
       
        <section className="home" id="home">
            <div className="container home-wrapper">
                <div className="media-icons">
                    {icons.map((item, index) => (
                       <motion.a 
                            target="_blank"
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
                    >Hi, I am Adilbek</motion.h1>
                    <motion.h3
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.5}}   
                        custom={1}
                        variants={slideInVariants("left", 0.7, 50, true)}
                    >Full-Stack Developer</motion.h3>
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
                    <img src={portfolio} alt="man"/>
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