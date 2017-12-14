// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

/* moshimoji */
// child components
import ChapterPages from 'src/components/modules/reader/ChapterPages';

// other
import readerProps from 'src/components/modules/reader/props';

// ----------------------
// COMPONENT CODE

/* COMPONENT FACTORY: ChapterView
ChapterView returns a presentational component which renders the view for a
chapter for a given series.
  Input:
  * seriesKey - string or int used to identify series in uri, dropdown, and etc.
  * datum - the key for the chapter to be rendered
Implementation note: ChapterViewRoutes generates the view component to pass
to ViewRoutesFromData by calling ChapterView.
*/
// TODO: figure out if prop types can apply to a component factory
const ChapterView = seriesKey => ({ datum }) => {
  const chapterKey = datum;
  return (
    <div>
      <h4>{`${seriesKey} - Chapter ${chapterKey}`}</h4>
      <ChapterPages seriesKey={seriesKey} chapterKey={chapterKey} />
    </div>
  );
};

ChapterView.propTypes = {
  datum: readerProps.chapterKey.isRequired,
}

export default ChapterView;
