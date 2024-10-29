import CardWrapper from "./card-wrapper.jsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {RegisterSchema} from "../../../schema/index.ts";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../ui/form.tsx";
import {Input} from "../ui/input.tsx";
import {Button} from "../ui/button.tsx";
import {useState} from "react";
import {useFormStatus} from "react-dom";
import {Loader2} from "lucide-react";

export default function RegisterForm({backButtonHref}) {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: ""
        }
    });

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data);
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
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" placeholder="example@domain.com" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="John Doe" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder="******" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" placeholder="******" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type="submit" className="w-full">
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