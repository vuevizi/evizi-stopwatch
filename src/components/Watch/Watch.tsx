import React, {useEffect, useState} from 'react';
import * as S from "./style"
import {TimeState} from "../../interfaces/interfaces";

let timer: any;
const Watch: React.FC = () => {
    const [time, setTime] = useState<TimeState>({
        areRunning: false,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
    })
    const pace = (): void => {
        setTime(prevState => {
            return {
                ...prevState,
                milliseconds: prevState.milliseconds + 10
            }
        })


    }
    const startWatch = (): void => {
        if (!time.areRunning) {
            setTime(prevState => {
                return {
                    ...prevState,
                    areRunning: true,
                }
            })
            timer = setInterval(() => pace(), 10);
        }

    }
    const stopWatch = (): void => {
        if (time.areRunning) {
            clearInterval(timer);
            setTime(prevState => {
                return {
                    ...prevState,
                    areRunning: false,
                }
            })
            clearInterval(timer);

        }
    }
    const handleResetWatch = (): void => {
        clearInterval(timer);
        setTime(prevState => {
            return {
                ...prevState,
                areRunning: false,
                minutes: 0,
                seconds: 0,
                milliseconds: 0,
            }
        })
    }

    useEffect(() => {
        if (time.milliseconds > 1000) {
            setTime(prevState => {
                return {
                    ...prevState,
                    seconds: prevState.seconds + 1,
                    milliseconds: 0,
                }
            })
        }
        if (time.seconds > 59) {
            setTime(prevState => {
                return {
                    ...prevState,
                    minutes: prevState.minutes + 1,
                    seconds: 0,

                }
            })
        }
    }, [time.milliseconds])


    return (
        <S.WatchContainer>
            <S.Watch>
                <div className="watch__seconds-container">
                    <h1 id="seconds">{time.minutes}</h1>
                </div>
                :
                <div className="watch__seconds-container">
                    <h1 id="seconds">{time.seconds}</h1>
                </div>
                :
                <div className="watch__milliseconds-container">
                    <h1 id="milliseconds">{time.milliseconds}</h1>
                </div>
            </S.Watch>
            <S.WatchActionContainer>
                <S.WatchButton onClick={() => startWatch()}>Start</S.WatchButton>
                <S.WatchButton>Mark</S.WatchButton>
                <S.WatchButton onClick={() => stopWatch()}>Stop</S.WatchButton>
                <S.WatchButton onClick={() => handleResetWatch()}>Reset</S.WatchButton>
            </S.WatchActionContainer>
        </S.WatchContainer>

    );
};

export default Watch;