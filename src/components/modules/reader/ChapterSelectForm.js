// -----------------
// IMPORTS

/* NPM */
import React from 'react';
import Select from 'react-select';
import { Route } from 'react-router-dom';


/* moshimoji */
// child components
import ChapterView from 'src/components/modules/reader/ChapterView';


// -----------------
// COMPONENT CODE

// TODO: get chapters list from GraphQL using Apollo
const chapters = ['1', '2', '3'];

const chapterPath = (seriesTitle, chapter) => (
  `/reader/${seriesTitle}/${chapter}`
);

/* COMPONENT: ChaptersRoutes */
// ChaptersRoute ....
const ChapterRoutes = seriesOption => (
  chapters.map(
    (chapter, i) => (
      <Route
        key={i}
        path={chapterPath(seriesOption.seriesOption, chapter)}
        render={() => <ChapterView chapter={chapter} />} />
    ),
  )
);

/* COMPONENT: ChapterSelectDropdown */
// ChapterSelectDropdown ....
// TODO: create a base component for select dropdowns and implement
class ChapterSelectDropdown extends React.Component {
  state = {
    selectedOption: '',
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  }

  render() {
    return (
      <Select
        name="selected-chapter"
        value={this.state.selectedOption.value}
        onChange={this.handleChange}
        options={chapters.map(chapter => (
          { value: chapter, label: chapter }
        ))} />
    );
  }
}

/* COMPONENT: ChapterSelectForm */
// ChapterSelectForm ....
// TODO: consider merging this and chapters select dropdown (for state reasons)
// TODO: consider pulling out chapters routes into a common parent container
class ChapterSelectForm extends React.Component {
  state = {
    selectedOption: '',
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(
      chapterPath(this.props.seriesOption, this.dropdown.state.selectedOption.value),
    );
  }

  render() {
    return (
      <div>
        <form
          ref={ref => { this.form = ref; }}
          onSubmit={e => this.handleSubmit(e)} >
          <span>
            <ChapterSelectDropdown ref={ref => { this.dropdown = ref; }} />
            <button type="submit">Submit</button>
          </span>
        </form>
        <ChapterRoutes seriesOption={this.props.seriesOption} />
      </div>
    );
  }
}

export default ChapterSelectForm;
