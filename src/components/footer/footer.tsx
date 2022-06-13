import { FC } from "react";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../hook/useTypeSelector";
import {
  deleteTask,
  filterActiveTask,
  filterCompletedTask,
  filterAllTask,
} from "../../redux/taskSlice/taskSlice";
import "./footer.scss";

export const Footer: FC = () => {
  const dispatch = useDispatch();
  const { task } = useTypesSelector((state) => state.taskReducer);
  return (
    <div className="footer">
      <div className="footer__items">{task.length} items left</div>
      <div className="footer__checkboxContainer">
        <div
          onClick={() => dispatch(filterAllTask())}
          className="footer__checkbox "
        >
          All
        </div>
        <div
          onClick={() => dispatch(filterActiveTask())}
          className="footer__checkbox "
        >
          Active
        </div>
        <div
          onClick={() => dispatch(filterCompletedTask())}
          className="footer__checkbox"
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
