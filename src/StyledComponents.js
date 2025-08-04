import styled from "styled-components"
import Theme from "./Theme"

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
    color: ${Theme.subtexto};
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
      width: 440px;
      height: 440px;

    }
    & .about-text{
      width: 480px;
      &> p{
      font-weight: 600;
      font-size: 20px;
    }
    }
  }
 `

 const ProjectsSection= styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 1.5rem;
  & .listaRepositorios{
    display: flex;
    justify-content: center;
    gap: 32px;
    & img {
    width: 32px;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.3);
    }
  }
    
    & .repositorios{
      width: 100%;
      display: flex;
      justify-content: center;
      &> div{
        width: 100%;
        height: 400px;
        border: 1px solid red;
        border-radius: 9px;
        color: #FFFFFF;
        padding: 20px;
        background: linear-gradient(135deg,rgba(138, 63, 252, 1) 0%, rgba(163, 91, 255, 1) 50%, rgba(111, 45, 189, 1) 79%);
      }
    }

  }
  & .grade-repositorios{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 12px;
    &> div{
      width: 100%;
      height: 100px;
      border:1px solid red;
    }
  }
    
 `

 const ContactSection= styled.section`

  width: 100%;
  border: 1px solid red;
  padding: 1.5rem;
  

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

 export {ContactSection,ProjectsSection,AboutContainer,FlexContainer}