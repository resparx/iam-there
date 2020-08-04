import React from "react"
import styled from "styled-components"
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

const Smiley = styled(SmileOutlined)`
font-size: 24px;
`

const IndexPage = () => (
  <Layout>
    <Background>
    <OverLay>
    <h1>Hey babe <i class="far fa-kiss-wink-heart"></i></h1>
    <p>I feel it's hard for you<br/> and I just wanted to give something for you </p>
    </OverLay>
    
    </Background>
  </Layout>
)

export default IndexPage
