// -----------------
// IMPORTS

/* NPM */
import React from 'react';
import { Route } from 'react-router-dom';
import Select from 'react-select';
import PropTypes from 'prop-types';

// -----------------
// COMPONENT CODE

/* COMPONENT: ViewRoutesFromData
ViewRoutesFromData renders an array of view routes from provided data.
  Inputs:
  * data - an array of data to be mapped into view routes
  * datumToUriPath - the mapping function
  * ViewComponent - the view component to render for each route
*/
const ViewRoutesFromData = ({ data, datumToUriPath, ViewComponent }) => (
  data.map(
    datum => (
      <Route
        path={datumToUriPath(datum)}
        render={() => <ViewComponent datum={datum} />} />
    ),
  )
);

// TODO: check if we can get more specific with ViewComponents as a specific type component/class
ViewRoutesFromData.propTypes = {
  data: PropTypes.array.isRequired,
  datumToUriPath: PropTypes.func.isRequired,
  ViewComponent: PropTypes.func.isRequired,
};


/* COMPONENT: SelectDropdown
SelectDropdown renders a dropdown that accepts input and allows the user to
select an option.
Implementation note: this implementation of Select differs from the canonical
example since I only use the 'value' part of the option object. See: this.state
and the value prop.
*/
class SelectDropdown extends React.Component {
  state = {
    selectedOption: '',
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption.value });
  }

  render() {
    return (
      <Select
        name={`${this.props.optionLabel}-dropdown`}
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={
          // I think keys as options are all I need; no value|label
          this.props.options.map(option => (
            { value: option, label: option }
          ))
        } />
    );
  }
}

SelectDropdown.propTypes = {
  optionLabel: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};


/* COMPONENT: DropdownSelectForm
DropdownSelectForm renders a dropdown list from an array of options and
populates a new view based on the selected option on submit.
  Inputs:
  * history - the history object for React router
  * options - a string array for the options to render
  * optionLabel - a string to be used in the name attribute for the dropdown
  * optionToUriPath - the function to map option string to its view uri
  * Routes - an array of Route components for all the options provided
NOTE: DropdownSelectForm should itself be a view route in order to get the
history prop.
Instead of passing an instance of ViewRoutesFromData as Routes, I could pass
the ViewComponent and create the instance of ViewRoutesFromData in here.
Behavior: DropdownSelectForm uses the selected input to render a provided
route on submit.
*/
const DropdownSelectForm = ({ history, options, optionLabel, optionToUriPath, Routes }) => {
  let dropdown = null; // not sure if this init is necessary

  const handleSubmit = e => {
    e.preventDefault(); // TODO: look into this line and think it through
    history.push(optionToUriPath(dropdown.state.selectedOption));
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)} >
        <span>
          <SelectDropdown
            ref={
              // not sure if binding only works with this.__ attrs
              ref => { dropdown = ref; }
            }
            optionLabel={optionLabel}
            options={options} />
          { /* TODO: preferably eliminate need for submit button? */ }
          <button type="submit">Submit</button>
        </span>
      </form>
      <Routes />
    </div>
  );
};

// TODO: check if we can get more specific with routes as ViewRoutesFromData
DropdownSelectForm.propTypes = {
  ...SelectDropdown.propTypes,
  Routes: PropTypes.instanceOf(ViewRoutesFromData).isRequired,
};

export { DropdownSelectForm, ViewRoutesFromData };
