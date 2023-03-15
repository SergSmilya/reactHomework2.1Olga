export default function Filter({ onFilterChange }) {
  return (
    <>
      <label>
        Return contacts by name
        <input type="text" name="filter" onChange={onFilterChange} />
      </label>
    </>
  );
}
