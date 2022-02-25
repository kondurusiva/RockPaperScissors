import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseFill} from 'react-icons/ri'

import {
  HeaderDiv,
  Heading,
  GameDiv,
  ScoreHeading,
  ScoreContainer,
  BottomContainer,
  ItemContainer,
  ImageTag,
  ButtonEl,
  RenderDiv,
  GameResultContainer,
  GameResultImage,
  GameResult,
  GameP,
  SubDiv,
  PlayAgainContainer,
  PlayAgainBtn,
  PlayContainer,
  RulesBtn,
  RulesContainer,
  RulesImage,
} from './styledComponents'

class GameCard extends Component {
  state = {
    score: 0,
    isPlay: true,
    resultOfGame: '',
    userChoiceImage: '',
    opponentChoiceImage: '',
  }

  findResult = (userChoice, opponentChoice) => {
    let result

    if (userChoice === opponentChoice) {
      result = 'IT IS DRAW'
    } else if (userChoice === 'PAPER' && opponentChoice === 'SCISSORS') {
      result = 'YOU LOSE'
    } else if (userChoice === 'PAPER' && opponentChoice === 'ROCK') {
      result = 'YOU WON'
    } else if (userChoice === 'SCISSORS' && opponentChoice === 'PAPER') {
      result = 'YOU WON'
    } else if (userChoice === 'SCISSORS' && opponentChoice === 'ROCK') {
      result = 'YOU LOSE'
    } else if (userChoice === 'ROCK' && opponentChoice === 'PAPER') {
      result = 'YOU LOSE'
    } else if (userChoice === 'ROCK' && opponentChoice === 'SCISSORS') {
      result = 'YOU WON'
    }

    return result
  }

  Header = () => {
    const {score} = this.state

    return (
      <HeaderDiv>
        <Heading>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </Heading>
        <ScoreContainer>
          <ScoreHeading marginBottom={0}>Score</ScoreHeading>
          <ScoreHeading fontSize={20} marginBottom={5}>
            {score}
          </ScoreHeading>
        </ScoreContainer>
      </HeaderDiv>
    )
  }

  renderGameResult = () => {
    const {userChoiceImage, opponentChoiceImage, resultOfGame} = this.state
    console.log(resultOfGame)

    const onClickPlayAgain = () => {
      this.setState({
        isPlay: true,
        userChoiceImage: '',
        opponentChoiceImage: '',
      })
    }

    return (
      <GameResultContainer>
        <PlayContainer>
          <SubDiv>
            <GameP>YOU</GameP>
            <GameResultImage src={userChoiceImage} alt="your choice" />
          </SubDiv>
          <SubDiv>
            <GameP>OPPONENT</GameP>
            <GameResultImage src={opponentChoiceImage} alt="opponent choice" />
          </SubDiv>
        </PlayContainer>
        <PlayAgainContainer>
          <GameResult>{resultOfGame}</GameResult>
          <PlayAgainBtn onClick={onClickPlayAgain} type="button">
            PLAY AGAIN
          </PlayAgainBtn>
        </PlayAgainContainer>
      </GameResultContainer>
    )
  }

  render() {
    const {choiceList} = this.props
    const {isPlay} = this.state

    return (
      <GameDiv>
        <RenderDiv>
          {this.Header()}
          {isPlay ? (
            <BottomContainer>
              <ItemContainer>
                {choiceList.map(eachItem => {
                  const onClickImage = () => {
                    const randomNumber = Math.floor(Math.random() * 3)
                    const userChoice = eachItem.id
                    const opponentChoice = choiceList[randomNumber].id
                    const result = this.findResult(userChoice, opponentChoice)

                    if (result === 'YOU WON') {
                      this.setState(prevState => ({
                        score: prevState.score + 1,
                      }))
                    } else if (result === 'YOU LOSE') {
                      this.setState(prevState => ({score: prevState.score - 1}))
                    }
                    this.setState({
                      isPlay: false,
                      userChoiceImage: eachItem.imageUrl,
                      opponentChoiceImage: choiceList[randomNumber].imageUrl,
                      resultOfGame: result,
                    })
                  }

                  return (
                    <ButtonEl
                      key={eachItem.id}
                      type="button"
                      onClick={onClickImage}
                      data-testid={`${eachItem.id.toLowerCase()}Button`}
                    >
                      <ImageTag src={eachItem.imageUrl} alt={eachItem.id} />
                    </ButtonEl>
                  )
                })}
              </ItemContainer>
            </BottomContainer>
          ) : (
            this.renderGameResult()
          )}
        </RenderDiv>
        <Popup
          modal
          trigger={
            <RulesBtn type="button" alignSelf="flex-end">
              Rules
            </RulesBtn>
          }
          position="top left"
        >
          {close => (
            <>
              <RulesContainer>
                <RulesBtn type="button" onClick={() => close()}>
                  <RiCloseFill />
                </RulesBtn>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesContainer>
            </>
          )}
        </Popup>
      </GameDiv>
    )
  }
}

export default GameCard
