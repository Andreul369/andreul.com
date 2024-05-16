import React from 'react';

import * as Icons from '@/components/icons';
import { Button, Card, CardContent, CardHeader, CardTitle } from './ui';

const Socials = () => {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Find me on</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="p-4">
            <Icons.GitHub className="size-8" />
          </Button>
          <Button variant="outline" className="p-4">
            <Icons.LinkedIn className="size-8" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default Socials;
