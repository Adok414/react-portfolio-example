import { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        setIsVisible(window.scrollY > 300)
    }

    useEffect (() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        })
    }

  return (
    <button className={`btn scrollToTop flex-center ${isVisible ? "active" : ""}`} onClick={scrollTop}>
        <FaArrowUp/>
    </button>
  )
}

export default ScrollToTop