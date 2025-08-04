import foto from "./assets/IMG-20240516-WA0003.jpg"
import {  useEffect, useState } from "react"
import "swiper/css";
import "swiper/css/navigation";
import {ContactSection,ProjectsSection,AboutContainer,FlexContainer} from "./StyledComponents"
import arrowR from "./assets/right-arrow-svgrepo-com.svg"
import arrowL from "./assets/left-arrow-svgrepo-com.svg"
import { useWindowSize } from "./Size";

function App() {
  const [currentRepos, setCurrentRepos]= useState(0)
  const [repos, setRepos] = useState([]);
  const { width, height } = useWindowSize();

 useEffect(() => {
  async function renderData() {
    try {
      const response = await fetch("https://api.github.com/users/Mattferreira1/repos");
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }
  
  renderData();
}, []);
// console.log(repos[currentRepos]);


  return (
    <FlexContainer>
      <AboutContainer>
        <img className="about-image" src={foto} alt="" />
        <div className="about-text">
          <h1>Matheus Ferreira</h1>
          <p>Estudante e desenvolvedor web</p>
          {/* <p>Full-stack Developer</p> */}
        </div>
      </AboutContainer>
      <ProjectsSection>     
        <h1>Projetos</h1>

            <h1>{width}</h1>
            {width<= 425 ?(
              <div className="listaRepositorios">
                <img src={arrowL} onClick={()=> currentRepos>0 && setCurrentRepos(currentRepos-1)}/>
                  <div className="repositorios">
                  {repos&&(
                    
                      <div>{repos[currentRepos].name}</div>
                    
                  )}
                  
                </div>
              <img src={arrowR} onClick={()=> currentRepos<repos.length-1 && setCurrentRepos(currentRepos+1)}/>
              </div>
            ):(
              <div className="grade-repositorios">
                <div>oi</div>
                <div>oi</div>
                <div>oi</div>
                <div>oi</div>
              </div>
            )}
          
      
            
      </ProjectsSection>
      
      <ContactSection>
        <h1>contato</h1>
        <form action="">
          <div>
            <label htmlFor="name">nome</label>
            <input type="text" placeholder="Digite seu nome"/>
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input type="email" placeholder="Digite seu email"/>
          </div>

          <div>
            <label htmlFor="mesagem">mensagem</label>
            <textarea name="mesagem" id="" cols="30" rows="10"></textarea>
          </div>
        </form>
      </ContactSection>
    </FlexContainer>
  )
}

export default App
