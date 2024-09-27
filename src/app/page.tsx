import Contact from '@/components/contact';
import HomeBanner from '@/components/home-banner';
import HoverEffectText from '@/components/hover-effect-text';
import Work from '@/components/work';

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <Work />
      <Contact />
      {/* <HoverEffectText /> */}
    </>
  );
}

{
  /* <div className="flex w-full flex-col gap-4 px-2 pt-4 md:flex-row">
<Card className="w-full backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
  <CardHeader>
    <CardTitle>{`<andreul />`}</CardTitle>
  </CardHeader>
  <CardContent>
    I&apos;m a passionate web developer with experience in building
    dynamic and responsive web applications. Skilled in integrating
    technologies like Supabase and Stripe, I create seamless and
    efficient user experiences.
  </CardContent>
</Card>
<Socials />
</div>

<Projects />

<div className="flex w-full flex-col gap-4 px-2 pb-4 pt-4 md:flex-row">
<Card className="flex w-full flex-grow flex-col backdrop-blur supports-[backdrop-filter]:bg-background/60 md:w-2/5">
  <CardHeader>
    <CardTitle>Skills</CardTitle>
  </CardHeader>
  <CardContent className="flex h-full flex-col justify-between">
    <div className="flex w-full flex-grow items-center justify-between">
      <Icons.Nextjs className="size-20 rounded-sm border p-4" />
      <Icons.React className="size-20 rounded-sm border p-4" />
      <Icons.Tailwind className="size-20 rounded-sm border p-4" />
    </div>
    <div className="flex flex-grow items-center justify-between">
      <Icons.ClerkHead className="size-20 rounded-sm border p-4" />
      <Icons.Supabase className="size-20 rounded-sm border p-4" />
      <Icons.Postgresql className="size-20 rounded-sm border p-4" />
      <Icons.MongoDb className="size-20 rounded-sm border p-4" />
    </div>
  </CardContent>
</Card>
<Contact />
</div> */
}
