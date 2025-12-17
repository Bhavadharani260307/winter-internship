import { useSearchParams } from 'react-router-dom';
import State from './State.jsx';
import Props from './props.jsx';

const LearningReact = () => {
    const [searchParams] = useSearchParams();
    const section = searchParams.get('section');
   
    return (
        <div>
            <h1>Learning React</h1>
            <p>This page is all about Learning React</p>
                 
            {(!section || section === 'props') && (
                <>
                    <hr />
                    <h2>Props Example</h2>
                    <Props hi="Hello Sankarii!!" grade="12th" age={18} img="\vite.svg" />
                </>
            )}
        
            {(!section || section === 'state') && (
                <>
                    <hr />
                    <h2>State Management</h2>
                    <State />
                </>
            )}
        </div>
    )
}
export default LearningReact;