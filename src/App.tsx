import { useState } from "react";

function App() {
  const [toDoItems, setToDoItems] = useState<string[]>(["Walk the dog"]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (inputValue) {
      setToDoItems([...toDoItems, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index: number) => {
    setToDoItems(toDoItems.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-wrapper">
      <h1>To Do List</h1>

      <div className="add-item">
        <input
          onChange={handleInputChange}
          placeholder="Add a new to do item"
          type="text"
          value={inputValue}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>

      <ul>
        {toDoItems.map((toDoItem, index) => (
          <div key={`${toDoItem}-${index}`} className="list-item">
            <li>{toDoItem}</li>
            <button onClick={() => handleRemoveItem(index)}>X</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
