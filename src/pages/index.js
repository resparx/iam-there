import React, {useState, useEffect , Fragment} from "react"
import styled, {css} from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { SmileOutlined } from '@ant-design/icons';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
  animation: gradient 10s ease infinite;

  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
  }
}

h1, p {
    text-align: center;
  }

  a {
    opacity: 0;
  }
`

const OverLay = styled.div`
background: rgba(0,0,0,0.4);
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Cont1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
opacity: ${({showHeadPhone})=> showHeadPhone ? `0` : `1`};
transition: all 2000ms ease;
`

const Cont2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
opacity: ${({showHeadPhone})=> showHeadPhone ? `1` : `0`};
transition: all 600ms ease 200ms;
p{
  margin-top: 12px;
}

${(showHeadPhone) => showHeadPhone && css`
svg {
  font-size: 44px;
  animation: pulse 2s ease infinite;

  @keyframes pulse {
    0%
  {
    transform: scale( .85 );
  }
  50%
  {
    transform: scale( 1 );
  }
  100%
  {
    transform: scale( .85 );
  }
  
}
}`};
`

const IndexPage = () => {

  const [showHeadPhone,setHeadPhone] = useState(false);
  const [headPhonesConnected,setHeadPhonesConnected] = useState(false)
  
  useEffect(()=>{

    setTimeout(()=>{
      setHeadPhone(true)
    },5000)

    navigator.mediaDevices.addEventListener('devicechange', (e) => {
      console.log(e,"eee")
      setHeadPhonesConnected(true)
    })

  },[])
  
  return (
  <Layout>
    <Background>
    <OverLay>
    {!showHeadPhone && <Cont1 showHeadPhone={showHeadPhone}>
    <h1>Hey Nisha </h1>
    <p>I feel it's hard for you<br/> and I just wanted to try something to <br/> make you feel better <i class="far fa-laugh-beam"></i> </p>
    </Cont1>}
    <Cont2 showHeadPhone={showHeadPhone}>
    <i class="fas fa-headphones-alt"></i>
    <p>Connect your headphones</p>
    </Cont2>
    </OverLay>
    <audio autoplay loop>
      <source src="johann_sebastian_bach_air.mp3"/>
    </audio>
    </Background>
  </Layout>
)
}
export default IndexPage
