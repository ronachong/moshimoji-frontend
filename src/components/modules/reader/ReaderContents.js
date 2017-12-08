// ----------------------
// IMPORTS

/* NPM */
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

/* COMPONENT: Reader */
// Reader specifies the contents for the Reader module and gets passed to Module
const ReaderContents = ({ styles }) => (
  <div>
    <Route render={props => <SeriesDropdownSelectForm {...props} />} />
  </div>
);

ReaderContents.title = 'Reader';

ReaderContents.styles = {};

export default ReaderContents;
