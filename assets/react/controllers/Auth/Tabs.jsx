import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../../components/ui/tabs.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../../../components/ui/card.tsx";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../../../components/ui/form.tsx";
import {Input} from "../../../components/ui/input.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "../../../components/ui/popover.tsx";
import {Button} from "../../../components/ui/button.tsx";
import {cn} from "../../../lib/utils.ts";
import {format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {Calendar} from "../../../components/ui/calendar.tsx";
import ReactPasswordChecklist from "react-password-checklist";
import {RadioGroup, RadioGroupItem} from "../../../components/ui/radio-group.tsx";

export default function ({form}) {
    const password = form.getValues("password");
    const confirmPassword = form.getValues("confirmPassword");

    return (
        <Tabs defaultValue="personal" >
            <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="personal">Personal Infos</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="personal">
                <Card>
                    <CardHeader className="w-full flex flex-col items-center justify-center">
                        <CardTitle className="text-2xl font-medium">
                            Personal Infos
                        </CardTitle>
                        <CardDescription>Your personal information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
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
                            name="dateOfBirth"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Date of Birth</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    className={cn(
                                                        "pl-3 text-left font-normal w-full",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className= "ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="gender"
                            render={({field}) => (
                                <FormItem className="w-full">
                                    <FormLabel>Choose your gender</FormLabel>
                                    <FormControl className="w-full flex justify-between">
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex"
                                        >
                                            <FormItem className="flex items-center space-x-3">
                                                <FormControl>
                                                    <RadioGroupItem value="male" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Male</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3">
                                                <FormControl>
                                                    <RadioGroupItem value="female" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Female</FormLabel>
                                            </FormItem>

                                            <FormItem className="flex items-center space-x-3">
                                                <FormControl>
                                                    <RadioGroupItem value="other" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Other</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            <div className="w-full flex flex-col gap-y-4 align-center justify-center">
                                <h2 className="text-2xl font-medium">Password</h2>
                            </div>
                        </CardTitle>
                        <CardDescription>Choose a strong password</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input  {...field} type="password" placeholder="******" />
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
                                        <Input  {...field} type="password" placeholder="******" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <ReactPasswordChecklist
                            style={{
                                marginTop: "1rem"
                            }}
                            rules={["minLength", "specialChar", "number", "capital", "match"]}
                            value={password}
                            minLength={6}
                            iconSize={10}
                            valueAgain={confirmPassword}
                            messages={{
                                minLength: "Password must be at least 8 characters",
                                specialChar: "Password must contain at least one special character",
                                number: "Password must contain at least one digit",
                                capital: "Password must contain at least one uppercase letter",
                                match: "Passwords must match"
                            }} />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}