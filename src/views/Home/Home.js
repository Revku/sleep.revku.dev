import React from 'react'
import styled from 'styled-components'

// Components
import Box from 'components/Box/Box'
import Heading from 'components/Heading/Heading'
import Button from 'components/Button/Button'
import Paragraph from 'components/Paragraph/Paragraph'

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const Input = styled.input`
  display: block;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  margin-bottom: 30px;

  ::-webkit-calendar-picker-indicator{
    filter: invert(100%) sepia(5%) saturate(20%) hue-rotate(113deg) brightness(106%) contrast(105%);
  }
`;

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorWrapper = styled.p`
  padding: 15px 0;
  color: red;
`;

const Field = styled.div`
  margin: 20px 0;
`;

const NewVersionInfo = styled.p`
  max-width: 400px;

  b {
    color: rgb(231, 66, 66);
  }

  a {
    display: inline-block;
    margin-top: 10px;
    color: white;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    padding: 10px;
    background-color: ${({theme}) => theme.colors.secondary};
    border-radius: 5px;
  }
`;

const Home = ({setPage, setTime}) => {
  const [bedTime, setBedTime] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const submit = () => {
    setErrorMessage('');
    if (!bedTime) {
      setErrorMessage('Nie wpisano żadnej godziny!')
      return;
    } else {
      setTime(bedTime);
      setPage('resultbedtime');
    }
  }
  
  return (
    <Wrapper>
      <Box>
        <Heading>O KTÓREJ GODZINIE CHCESZ WSTAĆ?</Heading>
        <Paragraph>Aplikacja obliczy, o której godzinie musisz położyć się spać, aby wstać odpowiednio z cyklami snu.</Paragraph>

        <Field>
          <Label>GODZINA</Label>
          <Input type="time" onChange={(event) => setBedTime(event.target.value)} value={bedTime} />
        </Field>

        <Button onclick={submit}>O której godzinie muszę iść spać?</Button>
        <ErrorWrapper>{errorMessage}</ErrorWrapper>

        <NewVersionInfo><b>Uwaga!</b> Używasz starej wersji aplikacji!<br/> <a href='https://sen.revku.dev/'>Sprawdź nową wersję</a></NewVersionInfo>
      </Box>
      <Paragraph>Chcesz zasnąć teraz?</Paragraph>
      <Button onclick={() => setPage('wakeUpTime')}>O której godzinie muszę wstać?</Button>
    </Wrapper>
  )
}

export default Home