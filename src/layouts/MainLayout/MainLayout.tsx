import React, {useRef} from 'react';
import {Header,Footer} from "../../layouts";
import * as S from "./style"
import {Watch} from "../../components";
const MainLayout:React.FC = () => {


    return (
        <>
            <Header></Header>
            <S.MainContent>

                    <Watch/>


            </S.MainContent>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;