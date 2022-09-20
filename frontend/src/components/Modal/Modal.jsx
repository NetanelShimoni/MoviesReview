import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import React, { forwardRef } from "react";
import YouTube from "react-youtube";
import { root } from "postcss";

const Modal = ({ isOpen, title, subTitle, onClickConfirm }) => {
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  const classNameRoot = {
    backgroundColor: "#000",
  };

  // const classes = useStyles(classNameRoot);

  return (
    // <div style={{ width: "800px", height: "800px" }}>
    <Dialog
      open={isOpen}
      // TransitionComponent={Transition}
      style={{ backgroundColor: "#000", color: "#000" }}
      keepMounted
      onClose={() => alert("close")}
      className={{ root: classNameRoot }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{subTitle}</DialogContentText>
      </DialogContent>
      <YouTube
        videoId={"7TavVZMewpY"}
        loading={"lazy"}
        style={{
          paddingLeft: "30px",
          paddingRight: "150px",
          borderRadius: "30px",
        }}
        opts={{
          height: "300",
          width: "300",
          playerVars: {
            autoplay: 1,
          },
        }}
      />
      <DialogActions>
        <Button onClick={() => onClickConfirm()}>OK</Button>
      </DialogActions>
    </Dialog>
    // </div>
  );
};

export default Modal;
