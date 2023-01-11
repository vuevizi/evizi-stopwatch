import styled, {css} from "styled-components";
import {ButtonWatchProps} from "../../interfaces/interfaces";

export const WatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const Watch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--text-color);
  font-size: 40px;
  & .watch__milliseconds-container {
    padding-inline: 2px;
    & #milliseconds {
      font-size: 60px;
      font-weight: bold;
    }
  }
  & .watch__seconds-container {
    & #seconds {
      font-size: 60px;
      font-weight: bold;
    }
  }
`
export const WatchActionContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  gap: 20px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  
`
export const WatchButtonStart = styled.button<ButtonWatchProps>`
  font-size: 24px;
  color: white;
  background-color: green;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translate(-2px,-2px);
    box-shadow: 7px 7px 12px 0px var(--text-color);
  }
  &:active {
    transform: translate(0,0);
    box-shadow: 0px 0px 0px 0px;
  }
`
export const WatchButtonStop = styled.button<ButtonWatchProps>`
  font-size: 24px;
  color: white;
  background-color: red;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translate(-2px,-2px);
    box-shadow: 7px 7px 12px 0px var(--text-color);
  }
  &:active {
    transform: translate(0,0);
    box-shadow: 0px 0px 0px 0px;
  }
`
export const WatchButtonReset = styled.button<ButtonWatchProps>`
  font-size: 24px;
  color: white;
  background: grey;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translate(-2px,-2px);
    box-shadow: 7px 7px 12px 0px var(--text-color);
  }
  &:active {
    transform: translate(0,0);
    box-shadow: 0px 0px 0px 0px;
  }
`
export const WatchButtonMark = styled.button<ButtonWatchProps>`
  font-size: 24px;
  color: var(--text-color);
  background: var(--primary-color);
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  
  &:hover {
    transform: translate(-2px,-2px);
    box-shadow: 7px 7px 12px 0px var(--text-color);
  }
  &:active {
    transform: translate(0,0);
    box-shadow: 0px 0px 0px 0px;
  }
  
`
