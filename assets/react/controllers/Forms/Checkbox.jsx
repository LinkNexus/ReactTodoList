import {forwardRef, useId} from "react";
import {Checkbox} from "../../../components/ui/checkbox.tsx";

export default forwardRef(({label, children, ...props}, ref) => {
    const id = useId();

    return (
        <div className="flex items-center space-x-2">
            <Checkbox {...props} id={id} />
            <label
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </label>

            {children}

        </div>
    )
});
