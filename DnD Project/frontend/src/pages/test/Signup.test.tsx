import Signup from './Signup';
import { mount, configure } from "enzyme";
import { TextField } from "@mui/material";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Test case for testing signup", () => {
  let wrapper;

  it("Check if two text fields exist", () => {
    wrapper = mount(<Signup />);
    expect(wrapper.find(TextField).length).toEqual(6);
  });

  test("Username check", () => {
    wrapper = mount(<Signup />);

    // Get all TextFields, get first, get input element from it, simulate change
    wrapper
      .find(TextField)
      .at(0)
      .find("input")
      .simulate("change", { target: { value: "user" } });

    expect(wrapper.find(TextField).at(0).props().value).toEqual("user");
  });

  test("Password check", () => {
    wrapper = mount(<Signup />);

    // Get all TextFields, get first, get input element from it, simulate change
    wrapper
      .find(TextField)
      .at(0)
      .find("input")
      .simulate("change", { target: { value: "password" } });

    expect(wrapper.find(TextField).at(0).props().value).toEqual("password");
  });

  test("First Name check", () => {
    wrapper = mount(<Signup />);

    // Get all TextFields, get first, get input element from it, simulate change
    wrapper
      .find(TextField)
      .at(0)
      .find("input")
      .simulate("change", { target: { value: "firstname" } });

    expect(wrapper.find(TextField).at(0).props().value).toEqual("firstname");
  });

  test("Last Name check", () => {
    wrapper = mount(<Signup />);

    // Get all TextFields, get first, get input element from it, simulate change
    wrapper
      .find(TextField)
      .at(0)
      .find("input")
      .simulate("change", { target: { value: "firstname" } });

    expect(wrapper.find(TextField).at(0).props().value).toEqual("firstname");
  });

  test("Email check", () => {
    wrapper = mount(<Signup />);

    // Get all TextFields, get first, get input element from it, simulate change
    wrapper
      .find(TextField)
      .at(0)
      .find("input")
      .simulate("change", { target: { value: "email" } });

    expect(wrapper.find(TextField).at(0).props().value).toEqual("email");
  });

  test("Confirm Password check", () => {
    wrapper = mount(<Signup />);

    // Get all TextFields, get first, get input element from it, simulate change
    wrapper
      .find(TextField)
      .at(0)
      .find("input")
      .simulate("change", { target: { value: "confirm" } });

    expect(wrapper.find(TextField).at(0).props().value).toEqual("confirm");
  });

});
