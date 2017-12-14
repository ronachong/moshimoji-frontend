// ----------------------
// IMPORTS

/* NPM */
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

/* Moshimoji */
// child components
import SeriesDropdownSelectForm from 'src/components/modules/reader/SeriesDropdownSelectForm';

// styles
import { css } from 'src/styles';

// ----------------------
// COMPONENT CODE

// const bucket = s3Cli

/* COMPONENT: Reader
Reader specifies the contents for the Reader module and gets passed to Module
  Inputs:
  * styles: an object matching ReaderContents.styles
*/
// TODO: add styling
const ReaderContents = ({ styles }) => (
  <div>
    <Route render={props => <SeriesDropdownSelectForm {...props} />} />
  </div>
);

ReaderContents.title = 'Reader';

ReaderContents.styles = {};

ReaderContents.propTypes = {
  // TODO: figure out if it makes sense to validate against object id
  styles: PropTypes.object.isRequired,
};

export default ReaderContents;
