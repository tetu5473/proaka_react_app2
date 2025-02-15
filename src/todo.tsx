import React, { useState } from 'react';

// "Todo" 型の定義
type Todo = {
  content: string;
  readonly id: number;
};

// Todo コンポーネントの定義
const Todo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // Todoの配列を保持するステート
  const [text, setText] = useState(''); // フォーム入力のためのステート
  const [nextId, setNextId] = useState(1); // 次のTodoのIDを保持するステート

  // todos ステートを更新する関数
  const handleSubmit = () => {
    if (!text.trim()) return; // 入力が空白のみの場合は何もしない

    // 新しい Todo を作成
    const newTodo: Todo = {
      content: text,
      id: nextId,
    };

    // todos ステートを更新
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setNextId(nextId + 1);
    setText(''); // フォームの入力をクリア
  };

  // Todo の編集処理
  const handleEdit = (id: number, value: string) => {
  setTodos((todos) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        // 新しいオブジェクトを作成して返す
        return { ...todo, content: value };
      }
      return todo;
    });


    // todos ステートが書き換えられていないかチェック
    console.log('=== Original todos ===');
    todos.map((todo) => {
      console.log(`id: ${todo.id}, content: ${todo.content}`);
    });


    return newTodos;
  });
};


  return (
    <div>
      <h1>Todo リスト</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Todo を入力"
        />
        <button type="submit">送信</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              value={todo.content}
              onChange={(e) => handleEdit(todo.id, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
