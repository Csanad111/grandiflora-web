import React, { useState } from 'react';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*\d).{8,}$/;

export default function LoginScreen({ onBack, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isEmailValid = EMAIL_REGEX.test(email);
  const isPasswordValid = PASSWORD_REGEX.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (isEmailValid && isPasswordValid) {
      onLoginSuccess();
    }
  };

  const getValidationIndicator = (isValid, isEmpty) => {
    if (isEmpty && !submitted) return null;
    if (isValid) {
      return (
        <div className="size-[24px] rounded-full flex items-center justify-center flex-shrink-0 ml-2 bg-accent transition-colors duration-300">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="absolute inset-0 z-10 font-serif">
      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute top-[60px] left-[20px] w-10 h-10 flex items-center justify-center z-20 text-primary hover:bg-black/5 hover:scale-110 active:scale-95 rounded-full transition-all duration-300 outline-none"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Titles */}
      <div className="absolute top-[110px] left-[35px]">
        <h1 className="text-primary text-[30px] font-display leading-tight mb-3 tracking-wide">
          Bejelentkezés
        </h1>
        <p className="text-black text-[16px]">
          Jó újra látni téged
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="absolute top-[204px] left-[22px] right-[22px]">
          <div className={`relative w-full h-[50px] bg-white border ${(!isEmailValid && (email.length > 0 || submitted)) ? 'border-red-400' : 'border-separator'} rounded-[15px] flex items-center px-[20px] focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/20 transition-all duration-300`}>
            <input
              type="email"
              placeholder="E-mail cím"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-black text-[16px] placeholder:text-muted outline-none"
            />
            {getValidationIndicator(isEmailValid, email.length === 0)}
          </div>
        </div>

        {/* Password Input */}
        <div className="absolute top-[278px] left-[22px] right-[22px]">
          <div className={`relative w-full h-[50px] bg-white border ${(!isPasswordValid && (password.length > 0 || submitted)) ? 'border-red-400' : 'border-primary'} rounded-[15px] flex items-center px-[20px] focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/20 transition-all duration-300`}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Jelszó (min. 8 karakter, 1 szám)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-black text-[16px] placeholder:text-muted outline-none"
            />
            {/* Eye icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="flex-shrink-0 text-muted hover:text-primary transition-colors mr-2 outline-none"
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
        </div>

        {/* Forgot password */}
        <button type="button" className="absolute top-[344px] right-[22px] text-primary text-[14px] hover:underline underline-offset-2 tracking-wide">
          Elfelejtetted a jelszavad?
        </button>

        {/* Login Button */}
        <button
          type="submit"
          className="absolute top-[384px] left-[22px] right-[22px] h-[50px] bg-primary rounded-[25px] flex items-center justify-center text-white text-[20px] font-display tracking-[0.14px] hover:bg-primary-dark transition-all duration-300 active:scale-[0.95] hover:shadow-[0_8px_20px_rgba(94,110,94,0.3)] outline-none"
        >
          Belépés
        </button>
      </form>

      {/* OR separator */}
      <div className="absolute top-[460px] left-[22px] right-[22px] flex items-center gap-[10px]">
        <div className="h-[1px] flex-1 bg-separator"></div>
        <span className="text-primary text-[16px] font-display tracking-[0.11px]">vagy</span>
        <div className="h-[1px] flex-1 bg-separator"></div>
      </div>

      {/* Register link */}
      <div className="absolute top-[506px] w-full flex justify-center items-center gap-1 text-[16px]">
        <span className="text-primary">Szeretnél csatlakozni?</span>
        <button className="text-primary font-display hover:underline underline-offset-2 tracking-[0.11px]">
          Regisztráció
        </button>
      </div>
    </div>
  );
}
