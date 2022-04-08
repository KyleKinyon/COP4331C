import Character from "../Character";
import { mount, configure } from "enzyme";
import { TextField, Button, Typography } from "@mui/material";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'), 
  useNavigate: () => mockedUsedNavigate,
}));

describe('Character page test', () => {

  let wrapper;

    test('Loads textfield', ()=> {
      wrapper = mount(<Character />);
      expect(wrapper.find(TextField).length).toEqual(1);
    });

    test('Buttons loads', ()=> {
      wrapper = mount(<Character />);
      expect(wrapper.find(Button).length).toEqual(1);
    });

    test('Textfield loads and works', () => {
      wrapper = mount(<Character />);
      expect(wrapper.find(TextField).length).toEqual(1);

      wrapper.find(TextField).at(0).find("input").simulate("change", { target: { value: "Viola" } });
      expect(wrapper.find(TextField).at(0).props().value).toEqual("Viola");
    });

    test('Character created text check', () => {
      wrapper = mount(<Character />);
      expect(wrapper.find(Typography).length).toEqual(2);
    });
})