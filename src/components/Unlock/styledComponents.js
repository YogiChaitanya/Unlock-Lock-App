// Style your elements here

import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  background-size: cover;
  height: 100vh;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`
export const Button = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  border-radius: 5px;
  padding: 8px;
`
export const LockCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const LockImage = styled.img`
  background-image: url(${props => props.lockImage});
  width: 100px;
`
