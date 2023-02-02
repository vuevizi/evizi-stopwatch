import {Watch} from "../components/";
import {mount, shallow} from "enzyme";
import configureStore from 'redux-mock-store';
import {Middleware} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import toJson from "enzyme-to-json";
import {findTestElement} from "../utils/test.utils";
import exp from "constants";

const middlewares: Middleware[] = [];
const mockStore = configureStore(middlewares)

describe("Watch", () => {
    let component:any;
    let watchContainer:any;
    let watch:any;
    let watchActions:any;
    let store;
    beforeEach(() => {
        store = mockStore({
            amountOfRecords: 0,
            timeRecords: [],
        });
        component = mount(
            <Provider store={store}>
                <Watch/>
            </Provider>
        );

    })

    test("renders without crash", () => {
        expect(component.length).toBe(1);
    });
    test("renders matching with snapshot",()=>{
        expect(toJson(component)).toMatchSnapshot();
    });
    test("renders right minutes,seconds,milliseconds elements",()=>{
        const minutesText = findTestElement(watch,"minutes");
        const secondsText = findTestElement(watch,"seconds");
        const millisecondsText = findTestElement(watch,"milliseconds");
        expect(millisecondsText.length).toEqual(1);
        expect(minutesText.length).toEqual(1);
        expect(secondsText.length).toEqual(1);
        expect(minutesText.text()).toEqual("00");
        expect(secondsText.text()).toEqual("00");
        expect(millisecondsText.text()).toEqual("00");
    });
    describe("Buttons test",()=>{
        let buttonStart:any;
        let buttonStop:any;
        let buttonMark:any;
        let buttonReset:any;
        beforeEach(()=>{
            watchActions = findTestElement(component,"watch-actions")
            watchContainer = findTestElement(component,"watch-container");
            watch = findTestElement(watchContainer,'watch');
            buttonStart = watchActions.find("#button-start");
            buttonStop = findTestElement(watchContainer,"button-stop");
            buttonMark = findTestElement(watchContainer,"button-mark");
            buttonReset = findTestElement(watchContainer,"button-reset");
        })
        test("Contains right texts inside",()=>{
            expect(buttonStart.text()).toEqual("Start");
        })
        test("First rendering appearance",()=>{

        })
    })
})
