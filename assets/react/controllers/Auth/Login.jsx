import {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema} from "../../../../schema/index.ts";
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
import {Loader2} from "lucide-react";
import Checkbox from "../Forms/Checkbox.jsx";
import Alert from "../Alert.jsx";
import CardWrapper from "./CardWrapper.jsx";

export default function ({backButtonHref, errorMessage, csrfToken, emailValue}) {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            _username: emailValue,
            _password: "",
            _csrf_token: csrfToken,
            _remember_me: true
        }
    });

    return (
        <CardWrapper
            label="Login to your account"
            title="Sign In"
            backButtonHref={backButtonHref}
            backButtonLabel="Don't have an account? Register here"
        >
            <Alert type="danger" className="mb-3">
                { errorMessage }
            </Alert>

            <Form {...form}>
                <form method='POST' action='' className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="_username"
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

                        <FormField
                            control={form.control}
                            name="_remember_me"
                            render={({field}) => (
                                <FormItem>
                                    <Checkbox checked={true} label="Remember Me" {...field} />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="_csrf_token"
                            render={({field}) => (
                                <Input {...field} type="hidden" />
                            )}
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
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