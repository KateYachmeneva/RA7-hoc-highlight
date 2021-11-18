import React, { useState } from 'react';
import "./App.css";
import {initialData} from './initialData/initialData';
import List from "./components/List/List";


export default function App() {
    const [list, setList] = useState(initialData);

    return (
        <List list={list} />
    );
}