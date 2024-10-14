import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TopicPage = () => {
    const { topicId } = useParams();
    const [topic, setTopic] = useState(null);

    useEffect(() => {
        // Fetch topic data based on topicId
        const fetchTopic = async () => {
            try {
                const response = await fetch(`/api/topics/${topicId}`);
                const data = await response.json();
                setTopic(data);
            } catch (error) {
                console.error('Error fetching topic:', error);
            }
        };

        fetchTopic();
    }, [topicId]);

    if (!topic) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{topic.title}</h1>
            <p>{topic.description}</p>
            {/* Add more topic details as needed */}
        </div>
    );
};

export default TopicPage;