import { FC, useState } from "react";
import { addTask } from "../../redux/taskSlice/taskSlice";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Button from "@mui/material/Button";
import "./Input.scss";
import { useDispatch } from "react-redux";

export const Input: FC = () => {
  const [arrow, setArrow] = useState(true);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <label>
      {arrow ? (
        <ArrowDropUpIcon onClick={() => setArrow(false)} className="arrow" />
      ) : (
        <ArrowDropDownIcon onClick={() => setArrow(true)} className="arrow" />
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
