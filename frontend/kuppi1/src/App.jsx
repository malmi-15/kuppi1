import { useEffect, useState } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import { getItems } from "./api";

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await getItems();
      console.log("API RESPONSE:", res.data);

      // ✅ SAFE handling (no crash)
      setItems(res.data?.data || res.data || []);
    } catch (err) {
      console.error(err);
      setItems([]); // fallback
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Item Manager</h1>

      <ItemForm onItemAdded={fetchItems} />

      {/* ✅ Always safe */}
      <ItemList items={items || []} onRefresh={fetchItems} />
    </div>
  );
}

export default App;