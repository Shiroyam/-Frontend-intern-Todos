import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../hook/useTypeSelector";
import {
  deleteTask,
  filterActiveTask,
  filterCompletedTask,
  filterAllTask,
} from "../../redux/taskSlice/taskSlice";
import {
  clickAll,
  clickActive,
  clickCompleted,
} from "../../redux/toggleSlice/toggleSlice";
import "./footer.scss";


export const Footer: FC = () => {
  const dispatch = useDispatch();
  const { task } = useTypesSelector((state) => state.taskReducer);
  const { active, completed, all } = useTypesSelector(
    (state) => state.toggleReducer
  );

  return (
    <div className="footer">
      <div className="footer__items">{task.length} items left</div>
      <div className="footer__toggleContainer">
        <div
          onClick={() => (dispatch(filterAllTask()), dispatch(clickAll()))}
          className={all ? "footer__toggle active" : "footer__toggle"}
        >
          All
        </div>
        <div
          onClick={() => (dispatch(filterActiveTask()), dispatch(clickActive()))}
          className={active ? "footer__toggle active" : "footer__toggle"}
        >
          Active
        </div>
        <div
          onClick={() => (dispatch(filterCompletedTask()), dispatch(clickCompleted()))}
          className={completed ? "footer__toggle active" : "footer__toggle"}
        >
          Completed
        </div>
      </div>
      <div onClick={() => dispatch(deleteTask())} className="footer__clearBtn">
        Clear completed
      </div>
    </div>
  );
};
