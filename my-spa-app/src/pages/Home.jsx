import { useState, useEffect, useCallback } from "react";

const Home = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Додаємо нове завдання
  const addTodo = useCallback(() => {
    if (inputValue.trim()) {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  }, [inputValue]);

  // Видаляємо завдання
  const removeTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  // Позначаємо завдання як виконане/не виконане
  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <div>
      <h1>TODO List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Додати</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                marginLeft: "10px",
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              style={{
                marginLeft: "auto",
                backgroundColor: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
