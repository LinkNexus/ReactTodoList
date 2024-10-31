import {Button} from "@/components/ui/button";

export default function ({label, href}) {
    return (
        <Button variant="link" className="font-normal w-full" size="sm" asChild>
            <a className="text-center" href={href}>
                {label}
            </a>
        </Button>
    );
}