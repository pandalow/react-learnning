import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';


export default function ProjectCreation({ handleSave ,onCancel}) {
    const modalRef = useRef();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function saveProject() {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        if (title.trim() === '' || description.trim() === '' || dueDate.trim() === '') {
            modalRef.current.open();
            return;
        }
        handleSave({
            title: title,
            description: description,
            dueDate: dueDate
        })
    }


    return (
        <>
            <Modal ref={modalRef} buttonCaption='Okay'>
                <h2 className='text-xl font-bold text-stone-500 mt-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops , No input detected</p>
            </Modal>
            <div className="w-[35rem] ">
                <menu className='flex item-center justify-end gap-4 my-4'>
                    <ul>
                        <li><button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>Cancel</button></li>
                        <li><button className='px-6 py-2 bg-stone-800 text-stone-50 hover:text-stone-950' onClick={saveProject}>Save</button></li>
                    </ul>
                </menu>
                <div>
                    <Input type="text" name="title" label="Title" ref={titleRef} />
                    <Input name="description" label="Description" isTextArea ref={descriptionRef} />]
                    <Input type="date" name="dueDate" label="Due Date" ref={dueDateRef} />
                </div>
            </div>
        </>)
};