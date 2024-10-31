import AuthHeader from "./AuthHeader.jsx";
import BackButton from "./BackButton.jsx";
import {Card, CardContent, CardFooter, CardHeader} from "../../../components/ui/card.tsx";

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
        <Card className="xl:w-5/12 md:w-2/3 sm-3/4 shadow-md">
            <CardHeader>
                <AuthHeader label={label} title={title}>
                </AuthHeader>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    );
}