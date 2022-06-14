import { FC, MouseEvent, useState } from "react";
import { addTask, showTask } from "../../redux/taskSlice/taskSlice";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Button from "@mui/material/Button";
import "./Input.scss";
import { useDispatch } from "react-redux";

export const Input: FC = () => {
  const [arrow, setArrow] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const clickArrow = (e: MouseEvent) => {
    e.preventDefault();
    setArrow(!arrow);
    dispatch(showTask());
  };

  return (
    <label>
      {!arrow ? (
        <ArrowDropUpIcon onClick={clickArrow} className="arrow" />
      ) : (
        <ArrowDropDownIcon onClick={clickArrow} className="arrow" />
      )}
      <Button
        onClick={() => (dispatch(addTask(value)), setValue(""))}
        className="btn"
        variant="contained"
      >
        Add
      </Button>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="input"
        placeholder="What needs to be done?"
      ></input>
    </label>
  );
};
