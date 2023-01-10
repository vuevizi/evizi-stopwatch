import React from 'react';
import {Table} from "antd";
import * as S from "./style"
import {useAppSelector} from "../../redux/hooks";
import {getTimeRecords} from "../../features/RecordTime/RecordTime.slice";
const TableTimer:React.FC = () => {
    const timeRecord = useAppSelector(getTimeRecords);
    const dataSource = timeRecord.map((record,index)=>{
        return {
            key: record.id,
            round: record.id,
            time: `${record.minutes}:${record.seconds}:${record.milliseconds}`
        }
    })


    const columns = [
        {
            title: 'Round',
            dataIndex: 'round',
            key: 'round',

        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',

        },

    ];
    return (
        <>
            <S.TableContainer pagination={false} dataSource={dataSource} columns={columns} />
        </>
    );
};

export default TableTimer;