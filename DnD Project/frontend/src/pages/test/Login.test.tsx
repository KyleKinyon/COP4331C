import Login from "../Login";
import { mount, configure } from "enzyme";
import { TextField } from "@mui/material";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// import { timeStamp } from "console";
// import { render, fireEvent } from "@testing-library/react";

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

  // it("password check", () => {
  //   wrapper = shallow(<Login />);
  //   wrapper
  //     .find('input[type="password"]')
  //     .simulate("change", { target: { name: "password", value: "pass" } });
  //   expect(wrapper.state("password")).toEqual("pass");
  // });

  // it("login check with right data", () => {
  //   wrapper = shallow(<Login />);
  //   wrapper
  //     .find('input[type="text"]')
  //     .simulate("change", { target: { name: "username", value: "user" } });
  //   wrapper
  //     .find('input[type="password"]')
  //     .simulate("change", { target: { name: "password", value: "pass" } });
  //   wrapper.find("button").simulate("click");
  //   expect(wrapper.state("isLogined")).toBe(true);
  // });

  // it("login check with wrong data", () => {
  //   wrapper = shallow(<Login />);
  //   wrapper
  //     .find('input[type="text"]')
  //     .simulate("change", { target: { name: "username", value: "user" } });
  //   wrapper
  //     .find('input[type="password"]')
  //     .simulate("change", { target: { name: "password", value: "pass" } });
  //   wrapper.find("button").simulate("click");
  //   expect(wrapper.state("isLogined")).toBe(false);
  // });
});
