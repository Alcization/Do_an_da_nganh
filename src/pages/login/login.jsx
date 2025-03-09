import React, { useState } from "react";
import styles from './login.module.css';
import LoginFarm from '../../assets/loginFarm.png';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Vui lòng nhập đầy đủ email và mật khẩu");
            return;
        }

        if (!validateEmail(email)) {
            alert("Địa chỉ email không hợp lệ");
            return;
        }

        try {
            // const response = await fetch("https://api.example.com/login", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({ email, password })
            // });

            // const data = await response.json();

            // if (!response.ok) {
            //     throw new Error(data.message || "Đăng nhập thất bại");
            // }

            // console.log("Đăng nhập thành công:", data);
            if (email === "loc.nguyenkhanh@hcmut.edu.vn" && password === "123456") {
                window.location.href = "/user/dashboard";
            } else {
                alert("Đăng nhập thất bại");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className={styles.login_container} style={{ boxSizing: 'border-box' }}>
            <div className={styles.login_form}>
                <h2 className={styles.welcome1}>Chào bạn trở lại 👋</h2>
                <p className={styles.welcome2}>Lại một ngày mới bắt đầu. Hôm nay là ngày của bạn.</p>
                <p className={styles.welcome2}>Đăng nhập để bắt đầu quản lý nông trại.</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>Email</label>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Nhập email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className={styles.label}>Mật khẩu</label>
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Nhập mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className={styles.forgot_password}>
                        <a href="#">Quên mật khẩu?</a>
                    </div>

                    <button className={styles.login_btn} type="submit">Đăng nhập</button>
                </form>

                <div className={styles.separator}>Hoặc</div>

                <button className={styles.google_login}>
                    <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
                    Đăng nhập với Google
                </button>

                <p className={styles.register_link}>
                    Chưa có tài khoản? <a href="#">Đăng ký</a>
                </p>

                <footer className={styles.footer}>© 2025 TẤT CẢ QUYỀN ĐƯỢC BẢO HỘ</footer>
            </div>

            <div className={styles.login_image}>
                <img src={LoginFarm} alt="Vertical Farming" />
            </div>
        </div>
    );
};

export default Login;