import { mount, configure } from "enzyme";
import { TextField } from "@mui/material";
import Login from "../Login";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Test case for testing login", () => {
  let wrapper;

  it("Check if two text fields exist", () => {
    wrapper = mount(<Login />);
    expect(wrapper.find(TextField).length).toEqual(2);
  });

  test("Username check", () => {
    wrapper = mount(<Login />);

    // Get all TextFields, get first, get input element from it, simulate change
    wrapper
      .find(TextField)
      .at(0)
      .find("input")
      .simulate("change", { target: { value: "user" } });

    expect(wrapper.find(TextField).at(0).props().value).toEqual("user");
  });
  test("Password check", () => {
    wrapper = mount(<Login />);

    // Get all TextFields, get first, get input element from it, simulate change
    wrapper
      .find(TextField)
      .at(0)
      .find("input")
      .simulate("change", { target: { value: "password" } });

    expect(wrapper.find(TextField).at(0).props().value).toEqual("password");
  });
});
