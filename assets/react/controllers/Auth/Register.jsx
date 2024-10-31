import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterSchema} from "../../../../schema/index.ts";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../../../components/ui/form.tsx";
import {Input} from "../../../components/ui/input.tsx";
import {Button} from "../../../components/ui/button.tsx";
import {Info, Loader2} from "lucide-react";
import CardWrapper from "./CardWrapper.jsx";
import Tabs from "./Tabs.jsx";
import useToggle from "../../../hooks/useToggle.js";
import Checkbox from "../Forms/Checkbox.jsx";

export default function ({backButtonHref}) {
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
            dateOfBirth: null,
            termsAndConditions: false
        }
    });

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data);
    };

    console.log(checked);

    return (
        <CardWrapper
            label="Create an Account"
            title="Sign Up"
            backButtonHref={backButtonHref}
            backButtonLabel="Already have an account? Login here"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <Tabs form={form}/>
                        <TermsAndConditions checked={checked} onChange={setChecked} form={form} />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading ? true : form.watch("termsAndConditions")}>
                        {loading ?
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait</> :
                            "Sign Up"
                        }
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

function TermsAndConditions({form, checked, onChange}) {
    const handleChange = (e) => onChange(e.target.value);

    return (
        <FormField
            control={form.control}
            name="termsAndConditions"
            render={({field}) => (
                <FormItem>
                    <Checkbox value={checked} onChange={handleChange} {...field} label="Accept our terms and conditions" />
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}