import React from "react";
import ToDoContextProvider from "../contexts/ToDoContext";
import ToDoList from "./ToDoList";
import ListForm from "./ListForm";

import "../App.css";
import Header from "./Header";

const App = () => {
    return (
        <ToDoContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <ListForm />
                        <ToDoList />
                    </div>
                </div>
            </div>
        </ToDoContextProvider>
    );
};

export default App;