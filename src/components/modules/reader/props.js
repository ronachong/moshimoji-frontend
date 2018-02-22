import PropTypes from 'prop-types';

const readerProps = {
  // seriesKey: key used to identify series in dropdowns, page uris, and to make
  // series-related queries to GraphQL. so far, my idea is to use the series
  // title as the key.(but I need to think about if the node id is more appropriate)
  seriesKey: PropTypes.string,
  // chapterKey: key used to identify chapters in dropdowns, page uris, and to
  // make chapter-related queries to GraphQL. so far, my idea is to use chapter
  // number as the key (but I need to think about if the node id is more appropriate)
  chapterKey: PropTypes.string,
};

export default readerProps;
