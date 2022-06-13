import { FC, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Button from '@mui/material/Button';
import "./Input.scss";

export const Input: FC = () => {
  const [arrow, setArrow] = useState(true);
  return (
    <label>
      {arrow ? (
        <ArrowDropUpIcon onClick={() => setArrow(false)} className="arrow" />
      ) : (
        <ArrowDropDownIcon onClick={() => setArrow(true)} className="arrow" />
      )}
      <Button className="btn" variant="contained">Add</Button>
      <input className="input" placeholder="What needs to be done?"></input>
    </label>
  );
};
