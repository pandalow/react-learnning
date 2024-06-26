
import '../index.css'
export default function UserInput({onChangeInput,input}) {
    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment:</label>
                    <input
                        type="number"
                        value={input.initialInvestment}
                        required onChange={(event) => onChangeInput('initialInvestment', event.target.value)}
                        name="initialInvestment"
                    />
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input
                        type="number"
                        value={input.annualInvestment}
                        required onChange={(event) => onChangeInput('annualInvestment', event.target.value)}
                        name="annualInvestment"
                    />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>EXPECTED RETURN</label>
                    <input
                        type="number"
                        value={input.expectedReturn}
                        required onChange={(event) => onChangeInput('expectedReturn', event.target.value)}
                        name="expectedReturn"
                        />
                </p>
                <p>
                    <label>DURATION</label>
                    <input
                        type="number"
                        value={input.duration}
                        required onChange={(event) => onChangeInput('duration', event.target.value)}
                        name="duration"
                    />
                </p>
            </div>
        </section>
    );
}