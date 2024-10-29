import {Card, CardContent, CardFooter, CardHeader} from "../ui/card.tsx";
import AuthHeader from "./auth-header.jsx";
import BackButton from "./back-button.jsx";

/**
 * @param {string} label
 * @param {string} title
 * @param {string} backButtonHref
 * @param {string} backButtonLabel
 * @param {React.ReactNode} children
 * @returns {JSX.Element}
 */
export default function CardWrapper({label, title, backButtonHref, backButtonLabel, children}) {
    return (
        <Card className="xl:w-1/3 md:w-1/2 shadow-md">
            <CardHeader>
                <AuthHeader label={label} title={title}>
                </AuthHeader>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    )
}