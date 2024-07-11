'use client';

import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
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
  CardHeader,
  CardTitle,
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <>
      <Card className="w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 md:w-3/5">
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
                <div className="flex flex-col justify-between gap-4 md:flex-row">
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

                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                  size="invisible"
                  ref={recaptchaRef}
                  hl="en"
                />

                <Button
                  type="submit"
                  variant="ghost"
                  disabled={isSubmitting}
                  className="border md:ml-auto md:w-1/2"
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <p>Sending...</p>
                      <Icons.Spinner className="ml-2 size-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <p>Send</p>
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
