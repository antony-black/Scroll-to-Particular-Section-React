export default function Tab({ children, onClick, backgroundColor }) {
  return (
    <div className="button-container">
      <button onClick={onClick} style={{ backgroundColor }}>
        {children}
      </button>
    </div>
  );
}
