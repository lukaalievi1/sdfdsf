import React, { useState } from "react";

interface TodoItem {
  value: string;
  checked: boolean;
}

export default function Todo(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [array, setArray] = useState<TodoItem[]>([]);
  const [localStorageItem, setLocalStorageItem] = useState<string>("");

  const handleAddTodoItem = (): void => {
    if (value === "") {
      alert("Input is required!");
    } else {
      setArray((prev) => [...prev, { value, checked: false }]);
      setValue("");
    }
  };

  const handleDeleteItem = (todoItem: string): void => {
    const deletedItem = array.find((item) => item.value === todoItem);

    if (deletedItem && deletedItem.checked === false) {
      alert("You should check your list first");
    } else {
      setArray((prev) => prev.filter((item) => item.value !== todoItem));
    }
  };

  const handleCheckboxChange = (index: number): void => {
    setArray((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSendButtonClick = (): void => {
    localStorage.setItem("inputValue", value);
    const storedValue = localStorage.getItem("inputValue");
    setLocalStorageItem(storedValue || "");
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddTodoItem}>Add</button>
      <button onClick={handleSendButtonClick}>Update Local Storage</button>
      <div>
        {array.map((item, index) => (
          <div style={{ display: "flex" }} key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            <li
              style={{
                listStyle: "none",
                textDecoration: item.checked ? "line-through" : "none",
              }}
            >
              {item.value}
            </li>
            <button onClick={() => handleDeleteItem(item.value)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <h1>{localStorageItem}</h1>
      </div>
    </div>
  );
}