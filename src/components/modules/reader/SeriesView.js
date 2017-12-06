// -----------------
// IMPORTS

/* NPM */
import React from 'react';
import { Route } from 'react-router-dom';

/* moshimoji */
// child components
import ChapterSelectForm from 'src/components/modules/reader/ChapterSelectForm';


// -----------------
// COMPONENT CODE
/* COMPONENT: SeriesView */
// SeriesView ....
const SeriesView = ({ seriesOption }) => (
  <div>
    <h3>{seriesOption}</h3>
    <p>Description here</p>
    <p>Chapter dropdown here</p>
    <Route render={props => <ChapterSelectForm {...props} seriesOption={seriesOption} />} />
  </div>
);

export default SeriesView;
