import React from "react";
import TextComponentStyles from "./TextComponent.module.css";

function TextComponent(props) {
	return (
		<div className={TextComponentStyles.textStyle} onClick={props.onClick}>
			{props.text}
		</div>
	);
}

export default TextComponent;
