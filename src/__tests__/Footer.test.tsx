import toJson from "enzyme-to-json";
import {shallow} from "enzyme";
import {Footer} from "../layouts";
import {findTestElement} from "../utils/test.utils"
const setUpComponent = (props = {}) => {
    const component:any = shallow(<Footer {...props}/>)
    return component
}

describe("Footer",()=>{
    let component:any;
    beforeEach(()=>{
        component = setUpComponent();
    })
    test("render with out crash",()=>{
        expect(component.length).toBe(1);
    })
    test("render with right text",()=>{
        const footerText = findTestElement(component,"footer-text");
        expect(footerText.text()).toBe("Designed by Vu");
    })
})
