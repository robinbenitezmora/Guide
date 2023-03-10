import React from 'react'
import PropTypes from 'prop-types'

const TaskComponent = ({task}) => {
  return (
    <div>
      <h2>{task.name}</h2>
    </div>
  )
}

Task.propTypes = {
  task: PropTypes.instanceOf(Task)
}

export default TaskComponent;
