import { OneSkill } from "./skillsStyle"
import html from "../../assets/html.png"
import js from "../../assets/javascript.png"
import css from "../../assets/css.png"
import react from "../../assets/react.png"
import sass from "../../assets/sass.png"
import bs from "../../assets/bootstrap-framework-logo.png"
const Skills = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-lg-4 my-4 ">
          <a href="https://www.w3schools.com/html/" className="text-decoration-none" target="blank">
            <OneSkill>
              {/* <img src="https://camo.githubusercontent.com/da7acacadecf91d6dc02efcd2be086bb6d78ddff19a1b7a0ab2755a6fda8b1e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667" alt="" /> */}
              <img src={html} alt="" />
              
              <p>HTML</p>
            </OneSkill>
          </a>
        </div>
        <div className="col-6 col-lg-4 my-4 ">
          <a href="https://www.w3schools.com/css/" className="text-decoration-none" target="blank">
            <OneSkill>
              <img src={css} alt="" />
              <p>CSS</p>
            </OneSkill>
          </a>
        </div>
        <div className="col-6 col-lg-4 my-4">
          <a href="https://getbootstrap.com" className="text-decoration-none" target="blank">
            <OneSkill>
              <img src={bs} alt="" />
              <p>Bootstrap</p>
            </OneSkill>
          </a>
        </div>
        <div className="col-6 col-lg-4 my-4" >
          <a href="https://sass-lang.com" className="text-decoration-none" target="blank">
            <OneSkill>
              <img src={sass} alt="" />
              <p>SASS</p>
            </OneSkill>
          </a>
        </div>
        <div className="col-6 col-lg-4 my-4">
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="text-decoration-none" target="blank">
            <OneSkill>
              <img src={js} alt="" />
              <p>Javascript</p>
            </OneSkill>
          </a>
        </div>
        <div className="col-6 col-lg-4 my-4">
          <a href="https://react.dev" className="text-decoration-none" target="blank">
            <OneSkill>
              <img src={react} alt="" />
              <p>React</p>
            </OneSkill>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Skills