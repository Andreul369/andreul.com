import React from 'react';
import Balancer from 'react-wrap-balancer';

const HomeIntro = () => {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center">
      <Balancer>
        <h1 className="text-center text-8xl">
          Let&apos;s bring an idea to a bright future.
        </h1>
      </Balancer>
      <h1 className="text-center text-8xl">Together.</h1>
    </section>
  );
};

export default HomeIntro;
