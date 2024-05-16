import React from 'react';
import Balancer from 'react-wrap-balancer';

const HomeIntro = () => {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center">
      <Balancer>
        <h1 className="text-center text-8xl">A bright future.</h1>
      </Balancer>
      <h1 className="text-center text-8xl">Together.</h1>
    </section>
  );
};

export default HomeIntro;
