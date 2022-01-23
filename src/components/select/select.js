import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { currentPhilosopher } from "../../common/utils/staticDataUtils";
import { getPhilosopherObjectIndex } from "../../static/utils/utils";
import "./select.css";

const Select = ({ options, onChangeHandler, isMobile }) => {
    const renderSelect = () => {
        if (isMobile) {
            return (
                <select className="dropDown" onChange={onChangeHandler} value={currentPhilosopher}>
                    {options && options.map(({ id, displayName, fullName, value }) => <option key={id} value={value}>{fullName}</option>)}
                </select>
            )
        }
        else {
            return (
                currentPhilosopher !== undefined && (
                    <Autocomplete
                        disableClearable
                        onChange={onChangeHandler}
                        getOptionLabel={(option) => option.fullName}
                        value={options[getPhilosopherObjectIndex(currentPhilosopher)]}
                        options={options}
                        size="small"
                        sx={{ width: 210 }}
                        renderInput={(params) => <TextField {...params} label="Philosopher" />}
                        ListboxProps={{ style: { maxHeight: '80vh' }, position: "bottom-start" }}
                    />
                )
            )

        }
    }

    return (renderSelect())
}

export default Select