import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

interface RegisterErrors {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
}

export function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found: RegisterErrors = {};

    if (name.trim().length < 3) {
      found.name = "En az 3 karakter olmalı.";
    }
    if (!email.includes("@")) {
      found.email = "Geçerli bir e-posta girin.";
    }
    if (password.length < 6) {
      found.password = "Şifre en az 6 karakter olmalı.";
    }
    if (password2 !== password) {
      found.password2 = "Şifreler aynı değil.";
    }

    setErrors(found);
    setSent(Object.keys(found).length === 0);
  }

  return (
    <div className="form-kart">
      <h2 className="bolum-baslik">Kayıt Ol</h2>

      {sent && (
        <div className="basari-kutusu">
          <p>Kayıt başarılı! Gerçek kayıt Sprint 10'da.</p>
        </div>
      )}

      <form className="form" noValidate onSubmit={handleSubmit}>
        <div className="form-grup">
          <label htmlFor="name">Ad Soyad</label>
          <input
            id="name"
            name="name"
            placeholder="Ali Veli"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined}
          />
          {errors.name && <span className="hata-metni">{errors.name}</span>}
        </div>

        <div className="form-grup">
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="a@b.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
          />
          {errors.email && <span className="hata-metni">{errors.email}</span>}
        </div>

        <div className="form-grup">
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={errors.password ? true : undefined}
          />
          {errors.password && <span className="hata-metni">{errors.password}</span>}
        </div>

        <div className="form-grup">
          <label htmlFor="password2">Şifre (tekrar)</label>
          <input
            type="password"
            id="password2"
            name="password2"
            placeholder="******"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            aria-invalid={errors.password2 ? true : undefined}
          />
          {errors.password2 && (
            <span className="hata-metni">{errors.password2}</span>
          )}
        </div>

        <button type="submit" className="btn btn-kaydet">
          Kayıt ol
        </button>

        <div className="auth-linkler" style={{ marginTop: "1rem" }}>
          <Link to="/login" className="btn-link">
            Zaten hesabın var mı? Giriş yap
          </Link>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
