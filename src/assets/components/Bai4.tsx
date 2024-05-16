import React, { useState } from 'react';

const Bai4: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [submittedProgress, setSubmittedProgress] = useState<number | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmittedProgress(progress);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="progress">Tiến độ hoàn thành: {progress}%</label>
                <input
                    type="range"
                    id="progress"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => setProgress(Number(e.target.value))}
                />
                <button type="submit">Submit</button>
            </form>
            {submittedProgress !== null && (
                <div id="result">
                    <p>Tiến độ hoàn thành: {submittedProgress} %</p>
                </div>
            )}
        </div>
    );
};

export default Bai4;
