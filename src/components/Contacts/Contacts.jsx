export default function Contacts({ contacts, onDeleteClick }) {
  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            <div>
              {name}: {number}
            </div>
            <button type="button" onClick={() => onDeleteClick(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
