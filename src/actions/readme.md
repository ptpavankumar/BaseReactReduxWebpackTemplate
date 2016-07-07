Events happening in the application are called Actions
Actions are plain objects containing a description of an event

Actions are functions that pass information for a specific type

e.g. 

rateCourse() -> Action Creators

RATE_COURSE -> Action Types

rating: rating -> any object that is serializable

rateCourse(rating) {

  return { type: RATE_COURSE, rating: rating }

}

NOTE: Do not pass a function or Promises as part of Action objects
NOTE: Action type has the same name as Action Creators

