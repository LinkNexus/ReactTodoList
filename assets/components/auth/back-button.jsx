import {Button} from "../ui/button.tsx";

export default function BackButton({label, href}) {
    return (
        <Button variant="link" className="font-normal w-full" size="sm" asChild>
            <a className="text-center" href={href}>
                {label}
            </a>
        </Button>
    );
}