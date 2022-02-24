import styled from 'styled-components'

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 10px;
  width: 800px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
`

export const GameDiv = styled.div`
  display: flex;
  background-color: #223a5f;
  height: 100vh;
  padding: 10px;
  justify-content: center;
`

export const RenderDiv = styled.div``

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  height: 100px;
  width: 90px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ScoreHeading = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.fontSize}px;
  margin-bottom: ${props => props.marginBottom}px;
`
export const BottomContainer = styled.div``

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 800px;
`

export const ImageTag = styled.img`
  width: 200px;
  margin-right: 60px;
`
export const ButtonEl = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const GameResultContainer = styled.div`
  background-color: #223a5f;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SubDiv = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
`

export const GameResultImage = styled.img`
  width: 100px;
`

export const GameResult = styled.p`
  color: #ffffff;
`

export const GameP = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
`
export const PlayAgainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PlayAgainBtn = styled.button`
  font-family: 'Roboto';
  color: #223a5f;
  border-radius: 8px;
  border: none;
  height: 30px;
  width: 100px;
  cursor: pointer;
`

export const PlayContainer = styled.div`
  display: flex;
`
export const RulesBtn = styled.button`
  align-self: ${props => props.alignSelf};
`

export const RulesContainer = styled.div`
  background-color: #ffffff;
  min-height: 50vh;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
`

export const RulesImage = styled.img`
  height: 400px;
  width: 400px;
  background-size: cover;
`
