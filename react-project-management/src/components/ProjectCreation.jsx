import { forwardRef } from 'react';


const ProjectCreation = forwardRef(function ProjectCreation({ saveProject }, ref) {
    return (
        <>
            <div className="col-span-2">
                <form ref={ref}>
                    <button >Cancel</button>
                    <button onClick={saveProject}>Save</button>
                    <label>TITLE</label>
                    <input type="text" name="title" />
                    <label>DESCRIPTION</label>
                    <input type="text" name="description" />
                    <label>DUE DATE</label>
                    <input type="date" name="dueDate" />
                </form>
            </div>
        </>)
});

export default ProjectCreation;