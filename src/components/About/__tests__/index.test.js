import React from 'react';

import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from "..";

// ensure after each test, no leftover memory data that could give us false resluts 
afterEach(cleanup);

describe('About component', ()=>{
    // first test
    it('renders', ()=>{
        render (<About/>);
    });
    // // second test
    it('matches snapshot DOM node structure', ()=>{
        // render about
        const  {asFragment} = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })
    
})