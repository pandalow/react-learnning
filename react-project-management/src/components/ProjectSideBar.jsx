import Button from './Button';
import {useRef} from 'react';

export default function ProjectSideBar({ handleAddProject, projects, onSelectProject, selectedProjectId, handleExport, handleImport }) {
    const fileInputRef = useRef();

    function handleImportClick(){
        fileInputRef.current.click();
    }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
            <div className='flex-col space-y-2'>
                <Button children='+ Add Project' className='w-full' onClick={handleAddProject} />
                <div className='flex justify-between space-x-1'>
                    <Button children='<< Export' className='w-full' onClick={handleExport} />
                    <input
                        type="file"
                        accept="application/json"
                        onChange={handleImport}
                        style={{ display: 'none' }}
                        id="file-input"
                        ref={fileInputRef}
                    />
                    <Button children='>> Import' className='w-full' onClick={handleImportClick} />
                </div>
            </div>
            <ul className='mt-8'>
                {projects.map(project => {
                    let cssClass = 'w-full text-left px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800';
                    if (project.id === selectedProjectId) {
                        cssClass += ' bg-stone-800 text-stone-200';
                    } else {
                        cssClass += ' bg-stone-400';
                    }
                    return (
                        <li key={project.id}>
                            <button
                                className={cssClass}
                                children={project.title}
                                onClick={() => onSelectProject(project.id)}
                            />
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
