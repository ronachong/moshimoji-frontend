// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

/* Moshimoji */
// child components
import PageView from 'src/components/modules/reader/PageView';

// other
import readerProps from 'src/components/modules/reader/props';

// ----------------------
// COMPONENT CODE


const pages = ['1', '2', '3', '4', '5']; // TODO: get pages from graphql or w/e.

/* COMPONENT: ChapterPages
ChapterPages is a presentational component which renders all the page images
of a given chapter of a given series.
  Inputs:
  * seriesKey - string or int used to identify series in uri, dropdown, and etc.
  * chapterKey - string used to identify chapters in uri, dropdowns, and etc.
*/
const ChapterPages = ({ seriesKey, chapterKey }) => (
  pages.map(
    pageKey => (
      <div>
        <p>{`${seriesKey}, ch ${chapterKey}, pg ${pageKey}`}</p>
        <PageView />
      </div>
    ),
  )
);

ChapterPages.propTypes = {
  seriesKey: readerProps.seriesKey.isRequired,
  chapterKey: readerProps.chapterKey.isRequired,
};

export default ChapterPages;
