export default function Title({ logo, title }) {
  return (
    <>
      <header id="header">
        <img src={logo} alt="" />
        <h1>{title}</h1>
      </header>
    </>
  );
}
