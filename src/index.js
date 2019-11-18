/* eslint-disable no-restricted-syntax, guard-for-in */
import React from 'react';
import reactDOM from 'react-dom';
import Header from './components/header';
import Navigation from './components/navigation';
import Category from './components/category';
import items from '../data/items.yaml';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Category categoryData={items.svg} titleColor="#e970aa" />
    </div>
  );
}

reactDOM.render(<App />, document.getElementById('app'));
