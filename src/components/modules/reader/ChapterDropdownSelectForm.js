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
import ChapterView from 'src/components/modules/reader/ChapterView';


// -----------------
// COMPONENT CODE

// TODO: get chapters list from GraphQL using Apollo
const chapters = ['1', '2', '3'];

/* FUNCTION FACTORY: chapterToUriPath */
// chapterToUriPath returns a function that can be used to map a chapter to the
// uri path for its view.
//    Inputs:
//    seriesKey - string or int used to identify series in uri, dropdown, and etc.
const chapterToUriPath = seriesKey => chapterKey => (
  `/reader/${seriesKey}/${chapterKey}`
);

/* COMPONENT FACTORY: ChapterViewRoutes */
// ChapterViewRoutes returns a stateless functional component which renders the
// routes for the chapter views of a given series.
//    Inputs:
//    seriesKey - string or int used to identify series in uri, dropdown, and etc.
// could adjust ViewRoutesFromData to follow more of a HOC pattern:
// e.g. ViewRoutesFromData(data, datumToUriPath, ViewComponent)
// or ViewRoutesFromSpecs(ViewSpecs)
// TODO: add prop types
const ChapterViewRoutes = seriesKey => () => (
  <ViewRoutesFromData
    data={chapters}
    datumToUriPath={chapterToUriPath(seriesKey)}
    ViewComponent={ChapterView(seriesKey)} />
);

/* COMPONENT: ChapterDropdownSelectForm */
// ChapterDropdownSelectForm renders a dropdown select form for all of the
// chapters of a given series.
//    Inputs:
//    seriesKey - string or int used to identify series in uri, dropdown, and etc.
// TODO: add prop types
// TODO: consider calling DropdownSelectForm as a view route instead of passing hist.
const ChapterDropdownSelectForm = ({ history, seriesKey }) => (
  <DropdownSelectForm
    history={history}
    options={chapters}
    optionLabel="chapter"
    optionToUriPath={chapterToUriPath(seriesKey)}
    Routes={ChapterViewRoutes(seriesKey)} />
);

export default ChapterDropdownSelectForm;
