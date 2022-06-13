import { FC } from "react";
import "./task.scss";
import Checkbox from "@mui/material/Checkbox";
import { useTypesSelector } from "../../hook/useTypeSelector";

export const Task: FC = () => {
  const { task, filterBy } = useTypesSelector((state) => state.taskReducer);

  return (
    <>
      {task
        .filter((task) => {
          if (filterBy === "All") {
            return true;
          }

          if (filterBy === "Completed") {
            return task.completed;
          }

          if (filterBy === "Active") {
            return !task.completed;
          }
        })
        .map((task) => (
          <div key={task.id} className="task">
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
