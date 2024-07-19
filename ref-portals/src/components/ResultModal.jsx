import { forwardRef, useImperativeHandle, useRef } from 'react';
import {createPortal} from'react-dom';

const ResultModal = forwardRef(function ResultModal({ remainingTime, targetTime, onReset }, ref) {
    const dialog = useRef();
    const userLost = remainingTime <= 0;
    const formattedTime = (remainingTime / 1000).toFixed(2);
    console.log(remainingTime, targetTime)
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)
    console.log(score)


    useImperativeHandle(ref, () => {
        return {
            open: () => dialog.current.showModal(),
        };
    });

    return createPortal (
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2> You Lost</h2>}
            {!userLost && <h2> You Got {score}</h2>}
            <p>The target time was <strong>{targetTime}</strong></p>
            <p>You stopped the timer with <strong> {formattedTime} second left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
        ,
        document.getElementById('modals')
    )
});
export default ResultModal;