// -----------------
// IMPORTS

/* NPM */
import React from 'react';
import Select from 'react-select';
import { Route } from 'react-router-dom';

/* moshimoji */
// child components
import SeriesView from 'src/components/modules/reader/SeriesView';


// -----------------
// COMPONENT CODE

// TODO: get series list from GraphQL using Apollo
const series = ['foo1', 'foo2', 'foo3'];

const seriesPath = seriesOption => (
  `/reader/${seriesOption}`
);

/* COMPONENT: SeriesRoutes */
// SeriesRoute ....
const SeriesRoutes = () => (
  series.map(
    seriesOption => (
      <Route
        path={seriesPath(seriesOption)}
        render={() => <SeriesView seriesOption={seriesOption} />} />
    ),
  )
);

/* COMPONENT: SeriesSelectDropdown */
// SeriesSelectDropdown ....
// TODO: create a base component for select dropdowns and implement
class SeriesSelectDropdown extends React.Component {
  state = {
    selectedOption: '',
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  }

  render() {
    return (
      <Select
        name="selected-series"
        value={this.state.selectedOption.value}
        onChange={this.handleChange}
        options={series.map(seriesOption => (
          { value: seriesOption, label: seriesOption }
        ))} />
    );
  }
}

/* COMPONENT: SeriesSelectForm */
// SeriesSelectForm ....
// TODO: consider merging this and series select dropdown (for state reasons)
// TODO: consider pulling out series routes into a common parent container
class SeriesSelectForm extends React.Component {
  state = {
    selectedOption: '',
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.dropdown.state);
    console.log(this.props);
    this.props.history.push(seriesPath(this.dropdown.state.selectedOption.label));
  }

  render() {
    return (
      <div>
        <form
          ref={ref => { this.form = ref; }}
          onSubmit={e => this.handleSubmit(e)} >
          <span>
            <SeriesSelectDropdown ref={ref => { this.dropdown = ref; }} />
            <button type="submit">Submit</button>
          </span>
        </form>
        <SeriesRoutes />
      </div>
    );
  }
}

export default SeriesSelectForm;
