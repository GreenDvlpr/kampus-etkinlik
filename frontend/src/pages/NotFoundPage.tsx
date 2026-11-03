import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="hata-kutusu">
      <h2 className="bolum-baslik">Sayfa bulunamadı</h2>
      <p>Aradığınız sayfa ya da etkinlik yok.</p>
      <p style={{ marginTop: "1.5rem" }}>
        <Link to="/" className="btn btn-liste">
          Ana sayfaya dön
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
