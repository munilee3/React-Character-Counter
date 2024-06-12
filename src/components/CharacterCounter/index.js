import {Component} from 'react'
import {v4} from 'uuid'
import {
  AppContainer,
  ResonsiveContainer,
  CounterContainer,
  InputContainer,
  CounterHeadingContainer,
  CounterHeading,
  Input,
  AddBtn,
  InputBtnContainer,
  ResultContainer,
  ResultItem,
  Result,
  Img,
} from './styledComponent'

class CharacterCounter extends Component {
  state = {resultArray: [], userInput: ''}

  onUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddWord = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newArray = {
      id: v4(),
      text: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      resultArray: [...prevState.resultArray, newArray],
      userInput: '',
    }))
  }

  render() {
    const {userInput, resultArray} = this.state
    const charactersListCount = resultArray.length
    const isCharacters = charactersListCount > 0
    return (
      <AppContainer>
        <ResonsiveContainer>
          <CounterContainer>
            <CounterHeadingContainer>
              <CounterHeading>
                Count the characters like a Boss...
              </CounterHeading>
            </CounterHeadingContainer>
            {isCharacters ? (
              <ResultContainer as="ul">
                {resultArray.map(eachResult => (
                  <ResultItem key={eachResult.id}>
                    <Result>
                      {eachResult.text} : {eachResult.textLength}
                    </Result>
                  </ResultItem>
                ))}
              </ResultContainer>
            ) : (
              <ResultContainer>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              </ResultContainer>
            )}
          </CounterContainer>
          <InputContainer>
            <CounterHeading align="true">Character Counter</CounterHeading>
            <InputBtnContainer onSubmit={this.onAddWord}>
              <Input
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onUserInput}
                value={userInput}
              />
              <AddBtn type="submit">Add</AddBtn>
            </InputBtnContainer>
          </InputContainer>
        </ResonsiveContainer>
      </AppContainer>
    )
  }
}

export default CharacterCounter
