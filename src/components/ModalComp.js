import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: 'transparent',
    outline: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
		width: 250
  },

}));

export default function ModalComp(props) {
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const body = (
		<div style={modalStyle} className={classes.paper}>
			{props.body}
		</div>
	);

	return (
		<div style={{textAlign: 'center'}}>
			<Modal
				open={props.open}
				onClose={props.handleClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				{body}
			</Modal>
		</div>
	);
}
