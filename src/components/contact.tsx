'use client';

import React, { useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import * as Icons from '@/components/icons';
import {
  Button,
  Card,
  CardContent,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/components/ui';
import { sendContactForm } from '@/lib/actions';
import { Textarea } from './ui/textarea';

const ContactSchema = z.object({
  name: z.string({ required_error: 'Please enter your name' }).min(3),
  subject: z.string({ required_error: 'Please add a subject' }).min(3),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must be less than 1000 characters' }),
});

const Contact = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  // 1. Define your form.
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      subject: '',
      email: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof ContactSchema>) {
    const token = await recaptchaRef.current?.executeAsync();
    const dataWithToken = { ...values, token };
    const result = await sendContactForm(dataWithToken as any);

    if (result.error) {
      toast.error(`${result.error}`);
    } else {
      toast.success('Message sent. Thank you!');
      form.reset();
    }
  }

  return (
    <section className="relative flex min-h-[100vh] w-full flex-col items-center justify-center px-4 md:px-16 lg:flex-row xl:px-32">
      <div className="w-full text-center lg:w-1/2">
        <h1 className="mb-6 w-full text-5xl font-medium tracking-tight">
          Speak your mind.
        </h1>
      </div>

      <div className="my-10 w-full lg:w-1/2">
        <Card className="w-full rounded-none bg-background">
          <CardContent className="pt-6">
            <section id="contact" className="w-full">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid w-full"
                >
                  <div className="flex flex-col justify-between gap-4 text-base md:flex-row">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="Name"
                              {...field}
                              className="h-16 rounded-none"
                            />
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
                            <Input
                              placeholder="Email"
                              {...field}
                              className="h-16 rounded-none"
                            />
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
                      <FormItem className="pt-4">
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            className="h-16 rounded-none"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="pt-4">
                        <FormControl>
                          <Textarea
                            placeholder="Write your message here..."
                            {...field}
                            className="rounded-none"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                    size="invisible"
                    ref={recaptchaRef}
                    hl="en"
                  />

                  <div className="mt-4 flex w-full justify-between gap-4">
                    <div className="hidden w-1/2 border border-transparent md:block"></div>
                    <Button
                      type="submit"
                      variant="ghost"
                      disabled={form.formState.isSubmitting}
                      className="h-16 w-full rounded-none border md:w-1/2"
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <p className="text-base">Sending...</p>
                          <Icons.Spinner className="ml-2 size-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          <p className="text-base">Send</p>
                          <Icons.SendHorizontal className="ml-2 size-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </section>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
