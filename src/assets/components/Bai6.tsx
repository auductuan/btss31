import React, { useState } from 'react';

const Bai6: React.FC = () => {
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Thông tin tài khoản:");
        console.log(userInfo);
    };

    return (
        <div>
            <h2>Thêm mới tài khoản</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Họ và tên:</label>
                    <input type="text" id="fullName" name="fullName" value={userInfo.fullName} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={userInfo.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="password">Mật khẩu:</label>
                    <input type="password" id="password" name="password" value={userInfo.password} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Nhập lại mật khẩu:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={userInfo.confirmPassword} onChange={handleChange} required />
                </div>
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
};

export default Bai6;
