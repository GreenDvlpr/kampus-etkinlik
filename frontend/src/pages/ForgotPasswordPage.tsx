import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = email.includes("@") ? "" : "Geçerli bir e-posta girin.";
    setError(found);
    setSent(found === "");
  }

  return (
    <div className="form-kart">
      <h2 className="bolum-baslik">Şifremi Unuttum</h2>
      <p className="aciklama-metin">
        Kayıtlı e-posta adresinizi yazın, şifre yenileme bağlantısı gönderelim.
      </p>

      {sent && (
        <div className="basari-kutusu">
          <p>Bağlantı {email} adresine gönderildi (demo).</p>
        </div>
      )}

      <form className="form" noValidate onSubmit={handleSubmit}>
        <div className="form-grup">
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ali@sdu.edu.tr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={error ? true : undefined}
          />
          {error && <span className="hata-metni">{error}</span>}
        </div>

        <button type="submit" className="btn btn-kaydet">
          Bağlantı gönder
        </button>

        <div className="auth-linkler" style={{ marginTop: "1rem" }}>
          <Link to="/login" className="btn-link">
            &larr; Girişe dön
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
