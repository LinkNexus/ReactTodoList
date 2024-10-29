import CardWrapper from "./card-wrapper.jsx";
import {useForm} from "react-hook-form";
import {useFormStatus} from "react-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema} from "../../../schema/index.ts";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form.tsx";
import {Input} from "../ui/input.tsx";
import {Button} from "../ui/button.tsx";
import {useState} from "react";
import {Loader2} from "lucide-react";

export default function LoginForm({backButtonHref}) {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data);
    };

    return (
        <CardWrapper
            label="Login to your account"
            title="Sign In"
            backButtonHref={backButtonHref}
            backButtonLabel="Don't have an account? Register here"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="_email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" placeholder="example@domain.com"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="_password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder="******"/>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        {loading ?
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait</> :
                            "Sign In"
                        }
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}