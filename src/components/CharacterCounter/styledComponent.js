import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
`

export const ResonsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
`

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffc533;
  width: 100%;
  height: 80vh;
  padding: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`

export const CounterHeadingContainer = styled.div`
  background-color: #ffbf1f;
  padding: 20px;
`

export const CounterHeading = styled.h1`
  color: ${props => (props.align ? '#ffc533' : '#334155')};
  font-family: 'roboto';
  font-size: 45px;
  font-weight: 500;
  text-align: ${props => (props.align ? 'center' : '')};
`

export const InputContainer = styled.div`
  background-color: #0f172a;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`
export const InputBtnContainer = styled.form`
  display: flex;
  margin-top: 40px;
`
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 3px;
  border: none;
  font-size: 20px;
  padding-left: 20px;
  outline: none;
  color: #475569;
`

export const AddBtn = styled.button`
  border: none;
  background-color: #ffc533;
  border-radius: 8px;
  padding: 10px 25px 8px 25px;
  font-size: 20px;
  color: #334155;
  font-weight: 600;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
`
export const ResultContainer = styled.div`
  padding: 13px;
  overflow-y: auto;
`
export const ResultItem = styled.li`
  list-style: none;
  margin-top: 0px;
`
export const Result = styled.p`
  color: #0f172a;
  font-family: 'roboto';
  font-weight: bold;
  font-size: 24px;
`
export const Img = styled.img`
  width: 100%;
`
