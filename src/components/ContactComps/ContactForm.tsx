import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const ContactForm = () => {
  //   const rhForm = useForm(()=>{
  //      Resolver: zodResolver(),
  //     defaultValues: {

  //     },

  //   }
  // );

  return (
    <>
      <Form>
        <FormField
          control={}
          name="..."
          render={() => (
            <FormItem>
              <FormLabel />
              <FormControl>{/* Your form field */}</FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </>
  );
};

export default ContactForm;
