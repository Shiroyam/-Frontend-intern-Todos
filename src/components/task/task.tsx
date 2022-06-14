import { FC } from "react";
import "./task.scss";
import Checkbox from "@mui/material/Checkbox";
import { useTypesSelector } from "../../hook/useTypeSelector";
import { checkbox } from "../../redux/taskSlice/taskSlice";
import { useDispatch } from "react-redux";

export const Task: FC = () => {
  const { task, filterBy, flagTask } = useTypesSelector(
    (state) => state.taskReducer
  );
  const dispatch = useDispatch();

  return (
    <>
      {flagTask &&
        task
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
            <div
              role="checkbox"
              aria-checked={task.completed}
              data-testid="task-test"
              key={task.id}
              className="task"
            >
              <Checkbox
                checked={task.completed}
                onChange={() => dispatch(checkbox(task.id))}
              />
              <div
                className={
                  task.completed ? "task__text completed" : "task__text"
                }
              >
                {task.name}
              </div>
            </div>
          ))}
    </>
  );
};

export default Task;
