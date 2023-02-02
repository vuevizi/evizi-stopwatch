import React, {useEffect, useState} from 'react';
import * as S from './style';
import {Record, TimeState} from '../../interfaces/interfaces';
import {useAppDispatch} from '../../redux/hooks';
import {
  addRecord,
  deleteAllRecord,
} from '../../features/RecordTime/RecordTime.slice';

let timer: any;
const Watch: React.FC = () => {
  const dispatch = useAppDispatch();
  const [time, setTime] = useState<TimeState>({
    areRunning: false,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  const startWatch = (): void => {
    if (!time.areRunning) {
      setTime((prevState) => {
        return {
          ...prevState,
          areRunning: true,
        };
      });
      timer = setInterval(() => pace(), 10);
    }
  };

  const stopWatch = (): void => {
    if (time.areRunning) {
      clearInterval(timer);
      setTime((prevState) => {
        return {
          ...prevState,
          areRunning: false,
        };
      });
      clearInterval(timer);
    }
  };

  const handleResetWatch = (): void => {
    clearInterval(timer);
    setTime((prevState) => {
      return {
        ...prevState,
        areRunning: false,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      };
    });
    dispatch(deleteAllRecord());
  };

  const pace = (): void => {
    setTime((prevState) => {
      return {
        ...prevState,
        milliseconds: prevState.milliseconds + 10,
      };
    });
  };

  const formatTimeMilliseconds = (value: number): string => {
    let cloneValue = value.toString();
    if (cloneValue.length < 1) {
      return cloneValue;
    }
    if (cloneValue.length < 2) {
      cloneValue = '00' + cloneValue;
    }
    if (cloneValue.length < 3) {
      cloneValue = '0' + cloneValue;
    }
    return cloneValue.slice(-3, -1);
  };

  const formatTime = (value: number): string => {
    let cloneValue = value.toString();
    if (cloneValue.length < 2) {
      cloneValue = '0' + cloneValue;
    }
    return cloneValue;
  };
  const handleAddRecord = (): void => {
    const dataRecordToRedux: Record = {
      minutes: formatTime(time.minutes),
      seconds: formatTime(time.seconds),
      milliseconds: formatTimeMilliseconds(time.milliseconds),
    };
    dispatch(addRecord(dataRecordToRedux));
  };
  //UseEffect
  useEffect(() => {
    if (time.milliseconds >= 1000) {
      setTime((prevState) => {
        return {
          ...prevState,
          seconds: prevState.seconds + 1,
          milliseconds: 0,
        };
      });
    }
    if (time.seconds >= 59) {
      setTime((prevState) => {
        return {
          ...prevState,
          minutes: prevState.minutes + 1,
          seconds: 0,
          milliseconds: 0,
        };
      });
    }
    if (time.seconds >= 59) {
      setTime((prevState) => {
        return {
          ...prevState,
          hours: prevState.hours + 1,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
        };
      });
    }
  }, [time.milliseconds]);

  return (
    <S.WatchContainer data-test="watch-container">
      <S.Watch data-test="watch">
        <div className="watch__minutes-container">
          <h1
            data-test="minutes"
            id="minutes"
          >
            {formatTime(time.minutes)}
          </h1>
        </div>
        :
        <div className="watch__seconds-container">
          <h1
            data-test="seconds"
            id="seconds"
          >
            {formatTime(time.seconds)}
          </h1>
        </div>
        :
        <div className="watch__milliseconds-container">
          <h1
            data-test="milliseconds"
            id="milliseconds"
          >
            {formatTimeMilliseconds(time.milliseconds)}
          </h1>
        </div>
      </S.Watch>
      <S.WatchActionContainer data-test="watch-actions">
        {time.areRunning ? (
          <S.WatchButtonStop
            id="button-stop"
            data-test="button-stop"
            onClick={stopWatch}
          >
            Stop
          </S.WatchButtonStop>
        ) : (
          <S.WatchButtonStart
            data-test="button-start"
            onClick={startWatch}
          >
            Start
          </S.WatchButtonStart>
        )}
        {time.areRunning ? (
          <S.WatchButtonMark
            data-test="button-mark"
            onClick={handleAddRecord}
          >
            Mark
          </S.WatchButtonMark>
        ) : (
          <S.WatchButtonReset
            data-test="button-reset"
            onClick={handleResetWatch}
          >
            Reset
          </S.WatchButtonReset>
        )}
      </S.WatchActionContainer>
    </S.WatchContainer>
  );
};

export default Watch;
