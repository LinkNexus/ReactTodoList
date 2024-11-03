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
    FormMessage
} from "../../../components/ui/form.tsx";
import {Button} from "../../../components/ui/button.tsx";
import {Info, Loader2} from "lucide-react";
import CardWrapper from "./CardWrapper.jsx";
import Tabs from "./Tabs.jsx";
import Checkbox from "../Forms/Checkbox.jsx";

export default function ({backButtonHref}) {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
            dateOfBirth: null,
            termsAndConditions: false,
            gender: null
        }
    });

    const onSubmit = (data) => {
        setLoading(true);
        //const formData = new FormData(data);

        fetch('/register/manage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(e => console.error(e.toString()))
        ;
    };

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
                        <TermsAndConditions form={form} />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading ? true : !form.getValues("termsAndConditions")}>
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

function TermsAndConditions({form}) {
    return (
        <FormField
            control={form.control}
            name="termsAndConditions"
            render={({field}) => (
                <FormItem>
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            {...field}
                            label="I agree to the Terms and Conditions"
                        />
                    </FormControl>
                    <FormDescription>
                         By creating an account, you agree to our <a href="#" className="text-primary hover:underline underline-offset-4">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline underline-offset-4">Privacy Policy</a>.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}