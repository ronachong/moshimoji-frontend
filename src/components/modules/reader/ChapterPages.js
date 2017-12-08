// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

/* Moshimoji */
// child components
import PageView from 'src/components/modules/reader/PageView';


// ----------------------
// COMPONENT CODE

/* COMPONENT: ChapterPages */
// ChapterPages
const ChapterPages = ({ seriesKey, chapterKey }) => {
  const pages = ['1', '2', '3', '4', '5']; // TODO: get pages from graphql or w/e.
  return (
    <div>
      { pages.map(
        pageKey => (
          <div>
            <p>{`${seriesKey}, ch ${chapterKey}, pg ${pageKey}`}</p>
            <PageView />
          </div>
        ),
      ) }
    </div>
  );
};

export default ChapterPages;
