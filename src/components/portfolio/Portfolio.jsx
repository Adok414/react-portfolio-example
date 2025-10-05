import SectionTitle from "../sectionTitle/SectionTitle"
import { portfolioData } from "../../data/portfolioData"
import "./Portfolio.css"
import PortfolioItem from "./PortfolioItem"


function Portfolio() {
  return (
     <section className="portfolio section" id="portfolio">
            <div className="container flex-center">
              <SectionTitle title="Portfolio" subtitle="Portfolio"/>
                
                <div className="portfolio-wrapper">
                  {portfolioData.map((item, index) => {
                    return (
                      <PortfolioItem key={item.id} item={item} index={index}/>
                    )
                  })}

                  
 
                </div>
            </div>
        </section>
  )
}

export default Portfolio