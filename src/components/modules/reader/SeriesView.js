// -----------------
// IMPORTS

/* NPM */
import React from 'react';
import { Route } from 'react-router-dom';

/* moshimoji */
// child components
import ChapterDropdownSelectForm from 'src/components/modules/reader/ChapterDropdownSelectForm';

// other
import readerProps from 'src/components/modules/reader/props';


// -----------------
// COMPONENT CODE

/* COMPONENT: SeriesView
 *  SeriesView is a presentational component which renders the view for a
 *  given series.
 *    Input:
 *    + props
 *      + datum - the key for the series to be rendered
 *  Implementation note: SeriesViewRoutes passes SeriesView to ViewRoutesFromData
 *  to generate the view routes for all the series on moshimoji.
 */
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
};

SeriesView.propTypes = {
  datum: readerProps.seriesKey.isRequired,
};

export default SeriesView;
