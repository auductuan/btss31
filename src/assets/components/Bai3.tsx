import React, { useState } from 'react';

const Bai3: React.FC = () => {
    const [birthdate, setBirthdate] = useState('');
    const [submittedDate, setSubmittedDate] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmittedDate(birthdate);
    };

    const formatDate = (date: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-US', options);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="birthdate">Ngày sinh:</label>
                <input
                    type="date"
                    id="birthdate"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {submittedDate && (
                <div id="result">
                    <p>Ngày sinh: {submittedDate}</p>
                    <p>{formatDate(submittedDate)}</p>
                </div>
            )}
        </div>
    );
};

export default Bai3;
