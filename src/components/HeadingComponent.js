import React from "react";
import HeadingComponentStyles from "./HeadingComponent.module.css";

function HeadingComponent(props) {
	return (
		<div className={HeadingComponentStyles.textStyle} onClick={props.onClick}>
			{props.text}
		</div>
	);
}

export default HeadingComponent;
