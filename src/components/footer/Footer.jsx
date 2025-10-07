import { followLinks, infoLinks } from "../../data/footerData"
import "./Footer.css"
import FooterLinkGroup from "./FooterLinkGroup"




function Footer() {
  const currentYear = new Date().getFullYear()
  return (
          <footer className="footer">
              <div className="container footer-wrapper">
                  <div className="about-group">
                      <h2>ATR11</h2>
                      <p>Full-Stack Web Developer</p>
                      <a href="#about">About me</a>
                  </div>
                  <div className="hr"></div>
                  <FooterLinkGroup title="More" links={infoLinks} isSocial={false}/>
                  
                  <div className="hr"></div>
                  <FooterLinkGroup title="Follow" links={followLinks} isSocial={true}/>
                  
              </div>
              <p className="footer-copyright">© <span className="year">{currentYear}</span> by Adilbek Tokishov. All rights reserved.</p>
          </footer>
  )
}

export default Footer