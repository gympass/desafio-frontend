import React from "react";
import { render } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { MockedProvider } from "@apollo/client/testing";
import BigNumber, { QUERY } from "./BigNumber";

const withMockedProvider = (Component, mocks) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {Component}
  </MockedProvider>
);

const mocks = [
  {
    request: {
      query: QUERY,
      variables: {
        login: "gympass",
      },
    },
    result: {
      data: {
        user: {
          id: "id_test",
          name: null,
          repositories: { edges: [] },
        },
      },
      loading: false,
      error: false,
    },
  },
];

describe("BigNumber component", () => {
  it("deve validar se a mensagem loading é exibida", async () => {
    var { getByText } = render(
      withMockedProvider(<BigNumber login="gympass" />, mocks)
    );
    var t = getByText("Loading...");
    expect(t).toBeDefined();
  });
});
