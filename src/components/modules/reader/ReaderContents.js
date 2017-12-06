// ----------------------
// IMPORTS

/* NPM */
import React from 'react';
import { Route } from 'react-router-dom';

/* Moshimoji */
// child components
import SeriesSelectForm from 'src/components/modules/reader/SeriesSelectForm';

// styles
import { css } from 'src/styles';

// ----------------------
// COMPONENT CODE

// const bucket = s3Cli

/* COMPONENT: Reader */
// Reader specifies the contents for the Reader module and gets passed to Module
const ReaderContents = ({ styles }) => (
  <div>
    {
    // TODO: make this into a dropdown menu with input
    }
    <Route render={props => <SeriesSelectForm {...props} />} />
  </div>
);

ReaderContents.title = 'Reader';

ReaderContents.styles = {};

export default ReaderContents;
