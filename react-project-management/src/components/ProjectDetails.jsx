import { forwardRef } from 'react';
import Tasks from './Tasks';

const ProjectDetails = forwardRef(function ProjectDetails({ project, onDelete, onAddTask, onDeleteTask, tasks }, ref) {

    const formattedDate = new Date(project.dueDate)
        .toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

    return (
        <div className='w-[35rem] mt-16'>
            <header className='pb-4 mb-4 border-b-2 border-stone-300' >
                <div className='flex items-center justify-between'>
                    <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.title}</h1>
                    <button className='text-600 hover:text-stone-950' onClick={onDelete}>Delete</button>
                </div>
                <div className='flex flex-col'>
                <p className='text-stone-600 whitespace-pre-wrap mb-2'>{project.description}</p>
                <p className='text-stone-600 mb-2'  >{formattedDate}</p>
                </div>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />

        </div>
    )
});

export default ProjectDetails;