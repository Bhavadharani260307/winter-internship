import UseState from './Hooks/UseState.jsx';
import UseEffect from './Hooks/UseEffect.jsx';
import UseEffectAPI from './Hooks/UseEffectAPI.jsx';
import UseRef from './Hooks/UseRef.jsx';
import UseMemo from './Hooks/UseMemo.jsx';
import FakeImageAPI from './Hooks/FakeImageAPI.jsx';
import UseCallback from './Hooks/UseCallback.jsx';

const LearningHooks = () => {
    return (
        <div>
            <h1>Learning React Hooks</h1>
            <p>This page is all about React Hooks</p>
            
            <hr />
            <h2>useState Hook</h2>
            <UseState />
            
            <hr />
            <h2>useEffect Hook</h2>
            <UseEffect />
            
            <hr />
            <h2>useEffect with API</h2>
            <UseEffectAPI />
            
            <hr />
            <h2>Fake Image API</h2>
            <FakeImageAPI />
            
            <hr />
            <h2>useRef Hook</h2>
            <UseRef />
            
            <hr />
            <h2>useMemo Hook</h2>
            <UseMemo />
            
            <hr />
            <h2>useCallback Hook</h2>
            <UseCallback />
        </div>
    )
}

export default LearningHooks;