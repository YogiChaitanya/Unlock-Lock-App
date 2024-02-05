// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  CardContainer,
  LockCard,
  Button,
  LockImage,
} from './styledComponents'

const Unlock = () => {
  const [currentState, setterFun] = useState(ture)

  const onClickButton = () => {
    setterFun(prevState => !prevState)
  }

  const buttonText = currentState ? 'Lock' : 'Unlock'

  const lockImage = currentState
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  return (
    <BgContainer>
      <CardContainer>
        <LockCard>
          <LockImage src={lockImage} alt="lock img" />

          {currentState ? 'Your Device is Locked' : 'Your Device is Unlocked'}
        </LockCard>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </CardContainer>
    </BgContainer>
  )
}

export default Unlock
