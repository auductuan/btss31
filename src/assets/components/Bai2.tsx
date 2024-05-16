import React, { useState } from 'react';

const Bai2: React.FC = () => {
    const [color, setColor] = useState('');
    const [submittedColor, setSubmittedColor] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmittedColor(color);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Màu sắc:</label>
                <input
                    type="text"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {submittedColor && (
                <div id="result">
                    <p>Color: {submittedColor}</p>
                </div>
            )}
        </div>
    );
};

export default Bai2;
