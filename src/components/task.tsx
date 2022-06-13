import { FC } from "react";
import "./task.scss";
import Checkbox from "@mui/material/Checkbox";

export const Task: FC = () => {
  return (
    <div className="task">
      <Checkbox className="task__checkbox"/>
      <div className="task__text">Задача 1</div>
    </div>
  );
};
