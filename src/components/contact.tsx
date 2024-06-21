'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import * as Icons from '@/components/icons';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/components/ui';
import { Textarea } from './ui/textarea';

const ContactSchema = z.object({
  name: z.string({ required_error: 'Please enter your name' }).min(3),
  subject: z.string({ required_error: 'Please add a subject' }).min(3),
  email: z.string().email({ message: 'Invalid email addresss' }),
  message: z.string({ required_error: 'Message field cannot be empty' }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const pathName = usePathname();

  // 1. Define your form.
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof ContactSchema>) {
    setIsSubmitting(true);

    try {
      const { name, subject, email } = values;
      toast.success('Message sent. Thank you!');
    } catch (error) {
      console.error('Caught error:', error);
      toast.error(`${error}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Card className="w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 md:w-3/5">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <CardContent>
          <section id="contact" className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full space-y-8"
              >
                <div className="flex justify-between gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="Name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Subject" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message here..."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <p>Sending...</p>
                      <Icons.Spinner className="ml-2 size-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <p>Send it</p>
                      <Icons.SendHorizontal className="ml-2 size-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </section>
        </CardContent>
      </Card>
    </>
  );
};

export default Contact;
