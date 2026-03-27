import React, { useState } from 'react';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*\d).{8,}$/;

export default function RegisterScreen({ onBack, onGoToLogin, onRegisterSuccess }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isEmailValid = EMAIL_REGEX.test(email);
  const isUsernameValid = username.trim().length >= 3;
  const isPasswordValid = PASSWORD_REGEX.test(password);
  const isPasswordConfirmValid = passwordConfirm === password && PASSWORD_REGEX.test(passwordConfirm);

  const handleRegister = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (isEmailValid && isUsernameValid && isPasswordValid && isPasswordConfirmValid) {
      setIsSuccess(true);
      setTimeout(() => {
        if (onRegisterSuccess) {
          onRegisterSuccess();
        } else {
          onGoToLogin();
        }
      }, 2000);
    }
  };

  const getValidationIndicator = (isValid, isEmpty) => {
    if (isEmpty && !submitted) return null;
    if (isValid) {
      return (
        <div className="absolute right-[14px] top-[14px] size-[22px] rounded-full flex items-center justify-center bg-accent transition-colors duration-300">
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    }
    return null;
  };

  if (isSuccess) {
    return (
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center backdrop-blur-3xl bg-white/50 animate-in fade-in duration-300">
        <div className="w-[120px] h-[120px] bg-accent rounded-full shadow-lg flex items-center justify-center mb-6">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-primary text-[32px] font-display mb-2 text-center tracking-wide leading-tight">
          Sikeres<br />regisztráció!
        </h2>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-10 w-full h-full flex flex-col bg-transparent">

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-[60px] left-[20px] w-10 h-10 flex items-center justify-center z-20 text-primary hover:bg-black/5 hover:scale-110 active:scale-95 rounded-full transition-all duration-300 outline-none"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Header text */}
      <div className="absolute top-[86px] left-[41px]">
        <h1 className="text-primary text-[30px] font-display tracking-wide mb-2 leading-tight">
          Regisztrálj
        </h1>
        <p className="text-primary text-[16px] font-body">
          Töltsd ki az adatokat
        </p>
      </div>

      <form onSubmit={handleRegister} className="absolute top-[210px] w-full px-[22px] flex flex-col gap-[20px]">

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail cím"
            className={`w-full h-[50px] bg-white border ${(!isEmailValid && (email.length > 0 || submitted)) ? 'border-red-400' : 'border-primary'} rounded-[15px] pl-[18px] pr-[45px] text-[16px] font-body text-primary placeholder:text-muted outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300`}
          />
          {getValidationIndicator(isEmailValid, email.length === 0)}
        </div>

        {/* Username Input */}
        <div className="relative">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Felhasználónév"
            className={`w-full h-[50px] bg-white border ${(!isUsernameValid && (username.length > 0 || submitted)) ? 'border-red-400' : 'border-primary'} rounded-[15px] pl-[18px] pr-[45px] text-[16px] font-body text-primary placeholder:text-muted outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300`}
          />
          {getValidationIndicator(isUsernameValid, username.length === 0)}
        </div>

        {/* Password Input */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Jelszó (min. 8 karakter, 1 szám)"
            className={`w-full h-[50px] bg-white border ${(!isPasswordValid && (password.length > 0 || submitted)) ? 'border-red-400' : 'border-primary'} rounded-[15px] pl-[18px] pr-[80px] text-[16px] font-body text-primary placeholder:text-muted outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-[45px] top-[15px] flex-shrink-0 text-muted hover:text-primary transition-colors outline-none"
          >
            {showPassword ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            ) : (
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7.5C1 7.5 4.27273 1.5 10 1.5C15.7273 1.5 19 7.5 19 7.5C19 7.5 15.7273 13.5 10 13.5C4.27273 13.5 1 7.5 1 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          {getValidationIndicator(isPasswordValid, password.length === 0)}
        </div>

        {/* Confirm Password Input */}
        <div className="relative">
          <input
            type={showPasswordConfirm ? "text" : "password"}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="Jelszó még egyszer"
            className={`w-full h-[50px] bg-white border ${(!isPasswordConfirmValid && (passwordConfirm.length > 0 || submitted)) ? 'border-red-400' : 'border-primary'} rounded-[15px] pl-[18px] pr-[80px] text-[16px] font-body text-primary placeholder:text-muted outline-none focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300`}
          />
          <button
            type="button"
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
            className="absolute right-[45px] top-[15px] flex-shrink-0 text-muted hover:text-primary transition-colors outline-none"
          >
            {showPasswordConfirm ? (
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            ) : (
              <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7.5C1 7.5 4.27273 1.5 10 1.5C15.7273 1.5 19 7.5 19 7.5C19 7.5 15.7273 13.5 10 13.5C4.27273 13.5 1 7.5 1 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="10" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          {getValidationIndicator(isPasswordConfirmValid, passwordConfirm.length === 0)}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-[50px] bg-primary text-white text-[20px] font-display tracking-[0.14px] rounded-[25px] flex items-center justify-center mt-[10px] hover:bg-primary-dark transition-all duration-300 active:scale-[0.95] hover:shadow-[0_8px_20px_rgba(94,110,94,0.3)] outline-none"
        >
          Tovább
        </button>

      </form>

      {/* OR separator */}
      <div className="absolute top-[596px] left-[22px] right-[22px] flex items-center gap-[10px]">
        <div className="h-[1px] flex-1 bg-separator"></div>
        <span className="text-primary text-[16px] font-display tracking-[0.11px]">vagy</span>
        <div className="h-[1px] flex-1 bg-separator"></div>
      </div>

      {/* Login link */}
      <div className="absolute top-[642px] w-full flex justify-center items-center gap-1 text-[16px]">
        <span className="text-primary font-body">Szeretnél bejelentkezni?</span>
        <button
          onClick={onGoToLogin}
          className="text-primary font-display hover:underline underline-offset-2 tracking-[0.11px]"
        >
          Bejelentkezés
        </button>
      </div>

    </div>
  );
}
