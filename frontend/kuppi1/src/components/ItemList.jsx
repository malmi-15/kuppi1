function ItemList({ items }) {
  // ✅ prevent crash
  if (!Array.isArray(items)) {
    return <p>Loading...</p>;
  }

  if (items.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <div>
      <h2>Items</h2>

      {items.map((item) => (
        <div key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default ItemList;