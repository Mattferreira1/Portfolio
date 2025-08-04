import styled from "styled-components"
import foto from "./assets/IMG-20240516-WA0003.jpg"
import Theme from "./Theme"
import { useEffect, useState } from "react"
function App() {

 const FlexContainer= styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  background-color: ${Theme.fundo};
  color: ${Theme.textoClaro};

  font-family: Helvetica, sans-serif;
  font-weight: 600;
  text-align: center;
  @media (min-width: 1024px){
    width: 80%;
    height: 100%;
    margin: auto;
  }

 `
 const AboutContainer= styled.section`
  width: 100%;
  padding: 1.5rem;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  & .about-image{
    width: 240px;
    height: 240px;
    border-radius: 99%;
    border: 4px solid transparent;
    text-align: center;
    outline: solid 2px ${Theme.roxoClaro};
  }
  & .about-text{
    width: 360px;

    border: 1px solid red;
    text-align: center;
    
  & > h1 {
    background: linear-gradient(90deg,rgba(138, 63, 252, 1) 0%, rgba(163, 91, 255, 1) 50%, rgba(111, 45, 189, 1) 79%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-clip: text;
    color: transparent;
  }
    &> p{
    font-weight: 600;
    color: #555555;
    }
  }


  @media (min-width: 1024px){
    flex-direction: row;
    justify-content: space-evenly;
    & .about-image{
      width: 320px;
      height: 320px;

    }
    & .about-text{
      width: 420px;
    }
  }
    @media (min-width: 1280px){
    justify-content: space-evenly;
    & .about-image{
      width: 460px;
      height: 460px;

    }
    & .about-text{
      width: 480px;
      &> p{
      font-weight: 600;
      font-size: 20px;
      color: #1b1a1a;
    }
    }
  }
 `

 const ProjectsSection= styled.section`

  width: 100%;
  border: 1px solid red;
  padding: 1.5rem;

 `

 const ContactSection= styled.section`

  width: 100%;
  border: 1px solid red;
  padding: 1.5rem;
  text-align: center;

  &> form{
    font-family:Helvetica, sans-serif;
    & div{
      display: flex;
      flex-direction: column;
      margin-top: 8px;

      & label{
        font-weight: 600;
        margin-bottom: 4px;
      }

      & input{
        width: 240px;
        margin: auto;
        padding: 0.5rem;
        border-radius: 5px ;
      }
      
      & textarea{
        width: 320px;
        resize: none;
        padding: 0.5rem;
        border-radius: 9px ;
        margin: auto;
      }
    }

  }
 `
  const [repos, setRepos]= useState()
  async function renderData(){
    await fetch("https:/api.github.com/users/Mattferreira1/repos")
    .then(res => res.json())
    .then(json=> setRepos(json))
  }

  useEffect( ()=>{
  renderData()
  }
    
  ,[])
  console.log(repos);
  
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
        <h1>projetos</h1>
        {
          repos.map((repo)=>((
            <p>{repo.name.replace(/-/g, ' ')}</p>
          )))
        }
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
