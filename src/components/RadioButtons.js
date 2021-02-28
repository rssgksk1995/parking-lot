import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";


export default function ErrorRadios(props) {
	return (
		<form>
			<FormControl component="fieldset">
				{props.headingName && (
					<FormLabel component="legend">{props.headingName}</FormLabel>
				)}
				<RadioGroup
					aria-label="quiz"
					name="quiz"
					value={props.selectedValue}
					onChange={props.onChange}
				>
					{props.data &&
						props.data.map(item => {
							return (
								<FormControlLabel
									key={item.value}
									value={item.value}
									name={item.label}
									control={<Radio style={{color:'black'}} />}
									label={item.label}
								/>
							);
						})}
				</RadioGroup>
			</FormControl>
		</form>
	);
}
