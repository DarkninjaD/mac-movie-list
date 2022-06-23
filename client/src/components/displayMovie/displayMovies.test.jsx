import { render, screen } from "@testing-library/react";
import DisplayMovies from "./displayMovies";
// import { Response } from "node-fetch";
// import fetch from "../../mock/movieData";
// global.fetch = jest.fn(() => Promise.resolve(5));

describe("Display Movie Component", () => {
  it("Should render 5 Movies in a table", async () => {
    // Promise.resolve(new a(5));
    // const spy = jest.spyOn(DisplayMovies, "fetch");
    // const res = [{ test: "test" }];
    // spy.mockImplementations(() => Promise.resolve(res));
    render(<DisplayMovies />);
    const test = await screen.findAllByTestId("table-entry");
    expect(test.length).toBe(5);
  });
  it.todo("something");
});
