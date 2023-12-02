"use client";

import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header";
import Dialog from "./components/dialog";
import "./style/main.scss";
import { useState } from "react";
import { todosMockData } from "./mock/todos.mock";
import Left from "./components/left";
import Right from "./components/right";

export interface TodoInfo {
  _id?: number;
  title?: string;
  description?: string;
  tags?: string[];
  level?: number;
}

export default function Home() {
  const [items, setItems] = useState<TodoInfo[]>(todosMockData);
  const [finishedItems, setFinishedItems] = useState<TodoInfo[]>([]);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<number | null>(null);

  const showDialog = () => setDialogVisible(true);
  const cancelDialog = () => setDialogVisible(false);

  const appendTodoItem = (params: TodoInfo) => {
    const prevItems = [...items];
    setItems([...prevItems, { ...params, _id: prevItems.length }]);
    setDialogVisible(false);
    setActiveId(prevItems.length);
  };

  const removeTodoItem = () => {
    setItems((prevItems) => prevItems.filter((item) => item._id !== activeId));
    setActiveId(null);
  };

  const finishTodoItem = (activeId: number | null) => {
    const item = items.find((it) => it._id === activeId);
    if (!item) return;
    setFinishedItems((prevItems) => [...prevItems, item]);
    removeTodoItem();
  };

  const renderCard = (item: TodoInfo) => (
    <Card
      key={item._id}
      activeId={activeId}
      setActiveId={setActiveId}
      item={item}
    />
  );

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-around">
        {activeId !== null && <Left removeTodoItem={removeTodoItem} />}
        <div className="center">{items.map(renderCard)}</div>
        {activeId !== null && (
          <Right activeId={activeId} finishTodoItem={finishTodoItem} />
        )}
      </main>
      {!dialogVisible && <Footer showDialog={showDialog} />}
      <Dialog
        visible={dialogVisible}
        onCancel={cancelDialog}
        onSubmit={appendTodoItem}
      />
    </div>
  );
}
