import { forwardRef } from 'react';
const ProjectDetails = forwardRef(function ProjectDetails({ project, handleAddTask }, ref) {
    return (
        <>
            <div>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <p>{project.dueDate}</p>
                <h2>Tasks</h2>
                <form ref={ref} onSubmit={handleAddTask}>
                    <input type="text" name='task' />
                    <button type='submit'>Add Task</button>
                </form>
                {(project.tasks.length <= 0) ?
                    <p>No tasks yet</p>
                    :
                    <ul>
                        {project.tasks.map((task, index) => {
                            return (
                                <li key={index}>
                                    <input type="checkbox" />
                                    <span>{task}</span>
                                </li>
                            )
                        })
                        }
                    </ul>
                }
            </div>
        </>
    )
});

export default ProjectDetails;