import "./header.scss";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-left">
          <span className="logo">LOGO</span>
        </div>
        <div className="header-right">
          <a className="link" href="">
            Trang chủ
          </a>
          <a className="link" href="">
            Giới thiệu
          </a>
          <a className="link" href="">
            Liên hệ
          </a>
        </div>
      </header>
    </>
  );
}
