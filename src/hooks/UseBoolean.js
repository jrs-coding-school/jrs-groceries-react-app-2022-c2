import { useState } from "react";

function useBoolean(initialValue) {

    const [value, setValue] = useState(initialValue);

    function toggleValue(newValue) {
        if (newValue === undefined) {
            setValue(!value);
        } else {
            setValue(newValue)
        }
    }

    return [value, toggleValue];
}

export { useBoolean };