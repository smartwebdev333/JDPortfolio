import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Jack Desiv's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Smart Code Solution</Link></h2>
          <p>
            Leading a software development team with sophisticated hands-on experiences.
          </p>
          <p>
            Make everything happen by magic of code.
          </p>
        </div>
      </header>
      <div className="title">
        <h2><Link to="/">OUR TEAM SUMMARY</Link></h2>
        <textarea rows="6" cols="50" readOnly>
          Senior Software Engineers with 7 years of experiences in software development and
          management focused on  building perfectly efficient and maintainable software
          according to business objectives and needs of clients.
          Specializes in Web & Mobile development with expertise and have built a solid foundation
          of development from problem solving to taking an idea for a site
          through each stage of development.
          Mainly focused on developing commercial products such as
          E-commerce , Health Care and Real Estates
          and able to complete projects efficiently and satisfy customers
          with attractive user-friendly products.
        </textarea>
      </div>
    </article>
  </Main>
);

export default Index;
