// -----------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
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

// other
import readerProps from 'src/components/modules/reader/props';

// -----------------
// COMPONENT CODE

// TODO: get chapters list from GraphQL using Apollo
const chapters = ['1', '2', '3'];

/* FUNCTION FACTORY: chapterToUriPath
 *  chapterToUriPath returns a function to map a chapter to the uri path for its
 *  view.
 *    Inputs:
 *    + seriesKey - string or int used to identify series in uri, dropdown, and
 *      etc.
 */
const chapterToUriPath = seriesKey => chapterKey => (
  `/reader/${seriesKey}/${chapterKey}`
);

/* COMPONENT FACTORY: ChapterViewRoutes
 *  ChapterViewRoutes returns a stateless functional component which renders the
 *  routes for the chapter views of a given series.
 *    Inputs:
 *    + seriesKey - string or int used to identify series in uri, dropdown, and etc.
 *  could adjust ViewRoutesFromData to follow more of a HOC pattern:
 *  e.g. ViewRoutesFromData(data, datumToUriPath, ViewComponent)
 *  or ViewRoutesFromSpecs(ViewSpecs)
 */
// TODO: figure out if prop types might apply to a component factory somehow,
// or if I should validate seriesKey some other way
const ChapterViewRoutes = seriesKey => () => (
  <ViewRoutesFromData
    data={chapters}
    datumToUriPath={chapterToUriPath(seriesKey)}
    ViewComponent={ChapterView(seriesKey)} />
);

/* COMPONENT: ChapterDropdownSelectForm
 *  ChapterDropdownSelectForm renders a dropdown select form to select a chapter
 *  to view from a given series.
 *    Inputs:
 *    + props
 *      + history - object representing browsing history; from Route HOC
 *      + seriesKey - string or int used to identify series in uri, dropdown,
 *        and etc.
 */
// TODO: consider calling DropdownSelectForm as a view route instead of passing
// hist.
const ChapterDropdownSelectForm = ({ history, seriesKey }) => (
  <DropdownSelectForm
    history={history}
    options={chapters}
    optionLabel="chapter"
    optionToUriPath={chapterToUriPath(seriesKey)}
    Routes={ChapterViewRoutes(seriesKey)} />
);

ChapterDropdownSelectForm.proptypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  seriesKey: readerProps.seriesKey.isRequired,
};

export default ChapterDropdownSelectForm;
