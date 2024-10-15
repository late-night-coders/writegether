import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
type Props = {
    formControl: any
    name: string
    label: string
    placeholder?: string
    type?: "text" | "password"
}
export default function TextField({ formControl, name, placeholder = "", label, type = "text" }: Props) {
    return (
        <FormField
            control={formControl}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="font-bold">{label}</FormLabel>
                    <FormControl>
                        <Input type={type} placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
