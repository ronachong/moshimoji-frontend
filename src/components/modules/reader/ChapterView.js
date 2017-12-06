// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import LazyLoad from 'react-lazyload';


/* Moshimoji */
// kit
import config from 'kit/config';

// styles
import { withStyles, css } from 'src/styles';


// ----------------------
// COMPONENT CODE

// const bucket = s3Cli

const imgKey = 'd3e15681-8e27-4dc1-9b2f-1d23498faca8.png';

/* COMPONENT: ChapterPages */
// ChapterPages
// TODO: (high) with styles issue
// TODO: figure out if loading one large, combined image might be preferrable to
// lazy loading each page in a series.
// TODO: prop types
const ChapterPages = () => (
  <div>
    <LazyLoad>
      <img
        src={`${config.cdnEndpoint}${imgKey}`}
        alt="comic page" />
    </LazyLoad>
  </div>
);

export default ChapterPages;

// ChapterPages.styles = {
//   pageImg: {
//     width: '50%',
//     height: '50%',
//   },
// };
//
// export default withStyles(ChapterPages.styles)(ChapterPages);
