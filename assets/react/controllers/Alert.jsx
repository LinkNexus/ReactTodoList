import {Alert, AlertDescription, AlertTitle} from "../../components/ui/alert.tsx";
import {AlertTriangle, Terminal} from "lucide-react";

export default function ({type, message, className, children}) {
    const variant = type === "danger" ? "destructive" : "default";

    if (!children && !message)
        return "";

    return (
        <Alert className={className} variant={variant}>
            <AlertHeader type={type} />
            <AlertDescription>
                {message ?? children}
            </AlertDescription>
        </Alert>
    )
}

function AlertHeader({type}) {
    switch (type) {
        case "success":
            return (
                <>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                </>
            );
        case "danger":
            return (
                <>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                </>
            );
    }
}