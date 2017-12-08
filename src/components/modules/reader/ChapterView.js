// ----------------------
// IMPORTS

/* NPM */
import React from 'react';

/* moshimoji */
// child components
import ChapterPages from 'src/components/modules/reader/ChapterPages';


// ----------------------
// COMPONENT CODE

/* COMPONENT: ChapterView */
// ChapterView ... TODO: complete this description
const ChapterView = seriesKey => ({ datum }) => {
  const chapterKey = datum;
  return (
    <div>
      <h4>{`${seriesKey} - Chapter ${chapterKey}`}</h4>
      <ChapterPages seriesKey={seriesKey} chapterKey={chapterKey} />
    </div>
  );
};

export default ChapterView;
