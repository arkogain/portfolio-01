"use client";

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
  const rhForm = useForm();

  return (
    <>
      <div className="">
        <Form {...rhForm}>
          <FormField
            control={rhForm.control}
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
      </div>
    </>
  );
};

export default ContactForm;
