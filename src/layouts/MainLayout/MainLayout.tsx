import React, {useRef} from 'react';
import {Header, Footer} from "../../layouts";
import * as S from "./style"
import {Watch, TableTimer} from "../../components";

const MainLayout: React.FC = () => {


    return (
        <>
            <Header></Header>
            <S.MainContent>
                <Watch/>
                <TableTimer/>
            </S.MainContent>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;