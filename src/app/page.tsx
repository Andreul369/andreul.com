import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

export default function Home() {
  return (
    <>
      <div className="relative mt-32 flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1>heelo</h1>
      </div>

      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' placeholder='Name of your project' />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='framework'>Framework</Label>
                <Select>
                  <SelectTrigger id='framework'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent position='popper'>
                    <SelectItem value='next'>Next.js</SelectItem>
                    <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                    <SelectItem value='astro'>Astro</SelectItem>
                    <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant='outline'>Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </>
  );
}
