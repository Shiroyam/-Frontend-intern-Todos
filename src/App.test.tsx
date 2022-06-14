import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import taskSlice from "./redux/taskSlice/taskSlice";
import {
  addTask,
  checkbox,
  filterActiveTask,
  filterCompletedTask,
  filterAllTask,
  deleteTask,
} from "./redux/taskSlice/taskSlice";
import { storeSetup } from "./redux/index";
import { Provider } from "react-redux";
const store = storeSetup();

describe("App", () => {
  test("Arrow click", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const arrowopen = screen.getByTestId("arrowopen-btn");
    expect(arrowopen).toBeInTheDocument();
    expect(screen.getByText("Тестовое задание")).toBeInTheDocument();

    fireEvent.click(arrowopen);
    expect(screen.getByTestId("arrowclose-btn")).toBeInTheDocument();
    expect(screen.queryByText("Тестовое задание")).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId("arrowclose-btn"));
    expect(screen.queryByTestId("arrowclose-btn")).not.toBeInTheDocument();
    expect(screen.getByText("Тестовое задание")).toBeInTheDocument();
  });

  describe("Reducer", () => {
    // test("addTask", () => {
    //   expect(
    //     taskSlice(
    //       { task: [], filterBy: "All", flagTask: true },
    //       addTask("Тестовое задание")
    //     )
    //   ).toEqual({
    //     filterBy: "All",
    //     flagTask: true,
    //     task: [
    //       {
    //         completed: false,
    //         id: "0.07647983619602883",
    //         name: "Тестовое задание",
    //       },
    //     ],
    //   });
    // });

    test("All", () => {
      expect(
        taskSlice(
          { task: [], filterBy: "All", flagTask: true },
          filterAllTask()
        )
      ).toEqual({ filterBy: "All", flagTask: true, task: [] });
    });

    test("Active", () => {
      expect(
        taskSlice(
          { task: [], filterBy: "Active", flagTask: true },
          filterActiveTask()
        )
      ).toEqual({ filterBy: "Active", flagTask: true, task: [] });
    });

    test("Completed", () => {
      expect(
        taskSlice(
          { task: [], filterBy: "completed", flagTask: true },
          filterCompletedTask()
        )
      ).toEqual({ filterBy: "Completed", flagTask: true, task: [] });
    });

    test("deleteTask", () => {
      expect(
        taskSlice(
          {
            task: [
              {
                name: "Тестовое задание",
                completed: false,
                id: "1",
              },
              {
                name: "Прекрасный код",
                completed: true,
                id: "2",
              },
            ],
            filterBy: "completed",
            flagTask: true,
          },
          deleteTask()
        )
      ).toEqual({
        filterBy: "completed",
        flagTask: true,
        task: [{ completed: false, id: "1", name: "Тестовое задание" }],
      });
    });

    test("Checkbox", () => {
      expect(
        taskSlice(
          { task: [], filterBy: "completed", flagTask: true },
          checkbox("2")
        )
      ).toEqual({ filterBy: "completed", flagTask: true, task: [] });
    });
  });
});
