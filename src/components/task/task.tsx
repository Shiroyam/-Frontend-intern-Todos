import { FC } from "react";
import { initialState } from "../../redux/taskSlice/taskSlice";
import "./task.scss";
import Checkbox from "@mui/material/Checkbox";

export const Task: FC = () => {
  return (
    <>
      {initialState.map((task) => (
        <div id={task.id} className="task">
          {task.completed ? <Checkbox defaultChecked /> : <Checkbox />}
          <div
            className={task.completed ? "task__text completed" : "task__text"}
          >
            {task.name}
          </div>
        </div>
      ))}
    </>
  );
};
