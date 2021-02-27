import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			margin: theme.spacing(1)
		}
	}
}));

export default function PrimaryButton(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Button variant="contained" color="primary">
				{props.text}
			</Button>
		</div>
	);
}
