import React from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

import { showModalNavbarActions } from "../../features/showModalNavbar";

const ModalBackground = (props) => {
  const dispatch = useDispatch();

  const hideModalNavbarHandler = () => {
    dispatch(showModalNavbarActions.setIsShowModalNavbar(false));
  };

  return (
    <div
      className="bg-gradient-to-b from-slate-800 to-transparent fixed top-0 bottom-0 left-0 right-0"
      onClick={hideModalNavbarHandler}
    ></div>
  );
};

const ModalContent = (props) => {
  const classes = `${props.className} fixed w-3/4 opacity-0 -top-10 left-1/2 -translate-x-1/2 bg-slate-200 rounded-lg shadow-lg z-30 animate-goSlowDown`;

  return <div className={classes}>{props.children}</div>;
};

const modal = document.getElementById("modal");

const ModalCard = (props) => {
  return (
    <React.Fragment>
      {createPortal(
        <ModalContent className={props.className}>
          {props.children}
        </ModalContent>,
        modal
      )}
      {createPortal(<ModalBackground />, modal)}
    </React.Fragment>
  );
};

export default ModalCard;
