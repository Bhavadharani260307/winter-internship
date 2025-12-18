import { useState } from 'react';
import axios from 'axios';

const TestConnection = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const testBackendConnection = async () => {
        setLoading(true);
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8001';
            const response = await axios.get(`${backendUrl}/json`);
            setData(response.data);
            console.log('Backend connected successfully:', response.data);
        } catch (error) {
            console.error('Backend connection failed:', error);
            setData({ error: 'Connection failed' });
        }
        setLoading(false);
    };

    return (
        <div>
            <h2>Backend Connection Test</h2>
            <button onClick={testBackendConnection}>
                {loading ? 'Testing...' : 'Test Backend Connection'}
            </button>
            
            {data && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                    <h3>Response from Backend:</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default TestConnection;