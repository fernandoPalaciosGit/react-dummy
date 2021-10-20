export function GrudgeItem({ grudge, toggleForgiven }) {
  return (
    <article className="Grudge">
      <h3>{grudge.person}</h3>
      <p>{grudge.reason}</p>
      <div className="Grudge-controls">
        <label className="Grudge-forgiven">
          <input
            type="checkbox"
            checked={grudge.forgiven}
            onChange={() =>
              toggleForgiven({ ...grudge, forgiven: !grudge.forgiven })
            }
          />
          Forgiven
        </label>
      </div>
    </article>
  );
}
