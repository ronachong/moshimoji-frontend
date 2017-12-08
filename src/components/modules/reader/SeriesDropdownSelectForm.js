// -----------------
// IMPORTS

/* NPM */
import React from 'react';

/* moshimoji */
// base components
// TODO: import from base index instead
import {
  DropdownSelectForm,
  ViewRoutesFromData,
} from 'src/components/base/DropdownSelectForm';

// child components
import SeriesView from 'src/components/modules/reader/SeriesView';


// -----------------
// COMPONENT CODE

// TODO: get series list from GraphQL using Apollo
const series = ['foo1', 'foo2', 'foo3'];

/* FUNCTION: seriesToUriPath */
// seriesToUriPath can be used to map a series to the uri path for its view.
//    Inputs:
//    seriesKey - string or int used to identify series in uri, dropdown, and etc.
const seriesToUriPath = seriesKey => (
  `/reader/${seriesKey}`
);

/* COMPONENT: SeriesViewRoutes */
// SeriesRoute is a stateless functional component which renders the routes for
// the views of all the series on moshimoji.
// TODO: add prop types
const SeriesViewRoutes = () => (
  <ViewRoutesFromData
    data={series}
    datumToUriPath={seriesToUriPath}
    ViewComponent={SeriesView} />
);

/* COMPONENT: SeriesDropdownSelectForm */
// SeriesDropdownSelectForm renders a dropdown select form to select a series
// to view from all of the series on moshimoji.
//    Inputs:
//    seriesKey - string or int used to identify series in uri, dropdown, and etc.
// TODO: add prop types
// TODO: consider calling DropdownSelectForm as a view route instead of passing hist.
const SeriesDropdownSelectForm = ({ history, seriesKey }) => (
  <DropdownSelectForm
    history={history}
    options={series}
    optionLabel="series"
    optionToUriPath={seriesToUriPath}
    Routes={SeriesViewRoutes} />
);

export default SeriesDropdownSelectForm;
