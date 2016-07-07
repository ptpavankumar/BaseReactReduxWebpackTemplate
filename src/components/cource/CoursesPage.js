import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: { title: "" }
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.courseRow = this.courseRow.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course: course
    });
  }

  onClickSave() {
    console.log('props>>>>>>>', JSON.stringify(this.props));
    console.log('state>>>>>>', this.state.course);
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (<div>
      <h1>Courses sample page!</h1>
      {this.props.courses.map(this.courseRow)}
      <h2>Add Course</h2>
      <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
      <input type="submit" onClick={this.onClickSave} value="Save" />
    </div>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCourses: () => {
      //dispatch(loadCourses());
    }
  };
};

CoursesPage.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  courses: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CoursesPage);

// export default CoursesPage;
