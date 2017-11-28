import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles } from 'react-with-styles';

// TODO: determine if I should only register once at the top level, or if I
// should actually import everywhere (rerunning with each import?)

// TODO: figure out how this interface works
ThemedStyleSheet.registerInterface(aphroditeInterface);

ThemedStyleSheet.registerTheme({
  color: 'green',
});

// TODO: determine the utility of exporting ThemedStyleSheet
export { css, withStyles, ThemedStyleSheet };
