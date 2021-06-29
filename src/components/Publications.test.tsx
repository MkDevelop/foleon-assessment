import React from "react";
import { render, screen } from "@testing-library/react";
import Publications from "./Publications";
import { QueryClientProvider, QueryClient } from "react-query";
import { LocalStorageMock } from "@react-mock/localstorage";

describe("Component: Publications", () => {
  test("renders filters", async () => {
    const queryClient = new QueryClient();

    render(
      <LocalStorageMock
        items={{ token: "0d808c480f512897d8dccc829cb132642426dd7c" }}
      >
        <QueryClientProvider client={queryClient}>
          <Publications />
        </QueryClientProvider>
      </LocalStorageMock>
    );
    const filter = await screen.getByTestId("select-filter");
    expect(filter).toBeInTheDocument();
  });

  test("renders search", async () => {
    const queryClient = new QueryClient();

    render(
      <LocalStorageMock
        items={{ token: "0d808c480f512897d8dccc829cb132642426dd7c" }}
      >
        <QueryClientProvider client={queryClient}>
          <Publications />
        </QueryClientProvider>
      </LocalStorageMock>
    );
    const filter = await screen.getByTestId("search");
    expect(filter).toBeInTheDocument();
  });

  test("renders filter button", async () => {
    const queryClient = new QueryClient();

    render(
      <LocalStorageMock
        items={{ token: "0d808c480f512897d8dccc829cb132642426dd7c" }}
      >
        <QueryClientProvider client={queryClient}>
          <Publications />
        </QueryClientProvider>
      </LocalStorageMock>
    );
    const filter = await screen.getByTestId("filter-button");
    expect(filter).toBeInTheDocument();
  });

  test("renders clear filter button", async () => {
    const queryClient = new QueryClient();

    render(
      <LocalStorageMock
        items={{ token: "0d808c480f512897d8dccc829cb132642426dd7c" }}
      >
        <QueryClientProvider client={queryClient}>
          <Publications />
        </QueryClientProvider>
      </LocalStorageMock>
    );
    const filter = await screen.getByTestId("clear-filters");
    expect(filter).toBeInTheDocument();
  });

  test("renders list", async () => {
    const queryClient = new QueryClient();

    render(
      <LocalStorageMock
        items={{ token: "0d808c480f512897d8dccc829cb132642426dd7c" }}
      >
        <QueryClientProvider client={queryClient}>
          <Publications />
        </QueryClientProvider>
      </LocalStorageMock>
    );
    const filter = await screen.getByTestId("list");
    expect(filter).toBeInTheDocument();
  });
});
