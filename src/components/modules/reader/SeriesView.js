// -----------------
// IMPORTS

/* NPM */
import React from 'react';
import { Route } from 'react-router-dom';

/* moshimoji */
// child components
import ChapterDropdownSelectForm from 'src/components/modules/reader/ChapterDropdownSelectForm';


// -----------------
// COMPONENT CODE

/* COMPONENT: SeriesView */
// SeriesView ....TODO: add description
// TODO: add prop types
const SeriesView = ({ datum }) => {
  const seriesKey = datum;
  return (
    <div>
      <h3>{seriesKey}</h3>
      <p>Description here</p>
      <p>Chapter dropdown here</p>
      <Route render={props => <ChapterDropdownSelectForm {...props} seriesKey={seriesKey} />} />
    </div>
  );
}

export default SeriesView;
