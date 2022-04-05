import React, {useState} from 'react'
import styled from 'styled-components'
import MainTemplate from 'templates/MainTemplate/MainTemplate'
import sleeplogo from 'assets/images/sleep-logo.svg'

import Home from 'views/Home/Home'
import BedTime from 'views/BedTime/BedTime'
import WakeUpTime from 'views/WakeUpTime/WakeUpTime'
import Footer from 'components/Footer/Footer'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const App = () => {
  const [page, setPage] = useState('home');
  const [time, setTime] = useState('00:00');

  return (
    <MainTemplate>
      <Wrapper>
        <div>
          <img src={sleeplogo} />
        </div>
        <div>
          {
          page === 'home' 
          ? <Home setPage={setPage} setTime={setTime} /> 
          : page === 'resultbedtime' 
          ? <BedTime time={time} setPage={setPage} /> 
          : <WakeUpTime setPage={setPage} />}
        </div>
        <div>
          <Footer />
        </div>
      </Wrapper>
    </MainTemplate>
  )
}

export default App