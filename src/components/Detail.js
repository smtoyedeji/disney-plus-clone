import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://source.unsplash.com/random/?ironman-suit/" alt=""/>
      </Background>
      <ImageTitle>
        <img src="https://source.unsplash.com/random/?coco/" alt=""/>
      </ImageTitle>
      <Controls>
        <PlayBtn>
          <img src="/images/play-icon-black.png" alt=""/>
          <span>PLAY</span>
        </PlayBtn>
        <TrailerBtn>
          <img src="/images/play-icon-white.png" alt=""/>
          <span>TRAILER</span>
        </TrailerBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GroupWatchBtn>
          <img src="/images/group-icon.png" alt=""/>
        </GroupWatchBtn>
      </Controls>
      <MovieDetail>
        2018 • 7m • Family, Fantasy, Kids, Animation
      </MovieDetail>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris. Pellentesque habitant morbi tristique senectus et. Hac habitasse platea dictumst quisque. Et tortor at risus viverra adipiscing. Bibendum neque egestas congue quisque egestas diam in arcu.
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  margin-top: 60px;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;
`
const PlayBtn = styled.button`
  padding: 0 24px;
  margin-right: 22px;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 56px;
  background-color:  rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;

  &:hover {
    background-color: rgb(190, 190, 190);
  }

`
const TrailerBtn = styled(PlayBtn)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    background-color: rgb(0, 0, 0);
  }

`

const AddBtn = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid #FFF;
  background-color: #FFF;
  cursor: pointer;

  span {
    font-size: 30px;
  }

`

const GroupWatchBtn = styled(AddBtn)`
  background-color: rgb(0, 0, 0);

`

const MovieDetail = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px; 
  min-height: 20px;
  margin-top: 20px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px; 
  margin-top: 16px;
  max-width: 760px;
  color: rgb(249, 249, 249);

`