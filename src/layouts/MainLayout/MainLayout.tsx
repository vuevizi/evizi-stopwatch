import React from 'react';
import {Header, Footer} from "../../layouts";
import * as S from "./style"
import {Watch, TableTimer} from "../../components";

const MainLayout: React.FC = () => {


    return (
        <>
            <Header data-test="header"></Header>
            <S.MainContent data-test="main-content">
                <Watch data-test="watch"/>
                <TableTimer data-test="table-timer"/>
            </S.MainContent>
            <Footer data-test="footer"></Footer>
        </>
    );
};

export default MainLayout;
