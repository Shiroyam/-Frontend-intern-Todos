import { FC } from "react";
import "./footer.scss"

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__items">0 items left</div>
      <div className="footer__checkboxContainer">
        <div className="footer__checkbox ">All</div>
        <div className="footer__checkbox ">Active</div>
        <div className="footer__checkbox">Completed</div>
      </div>
      <div className="footer__clearBtn">Clear completed</div>
    </div>
  );
};
