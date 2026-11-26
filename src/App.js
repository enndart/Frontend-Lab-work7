import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';

const goodsData = [
  {
    id: 1,
    title: 'Mechanical Keyboard',
    price: 3200,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'><rect x='8' y='34' width='112' height='60' rx='10' fill='%2337474f'/><rect x='16' y='44' width='12' height='10' rx='2' fill='%23eceff1'/><rect x='32' y='44' width='12' height='10' rx='2' fill='%23eceff1'/><rect x='48' y='44' width='12' height='10' rx='2' fill='%23eceff1'/><rect x='64' y='44' width='12' height='10' rx='2' fill='%23eceff1'/><rect x='80' y='44' width='12' height='10' rx='2' fill='%23eceff1'/><rect x='96' y='44' width='16' height='10' rx='2' fill='%2329b6f6'/><rect x='16' y='59' width='16' height='10' rx='2' fill='%23eceff1'/><rect x='36' y='59' width='12' height='10' rx='2' fill='%23eceff1'/><rect x='52' y='59' width='12' height='10' rx='2' fill='%23eceff1'/><rect x='68' y='59' width='12' height='10' rx='2' fill='%23eceff1'/><rect x='84' y='59' width='28' height='10' rx='2' fill='%23ff7043'/><rect x='16' y='74' width='20' height='10' rx='2' fill='%23eceff1'/><rect x='40' y='74' width='48' height='10' rx='2' fill='%23eceff1'/><rect x='92' y='74' width='20' height='10' rx='2' fill='%23eceff1'/></svg>"
  },
  {
    id: 2,
    title: 'Gaming Mouse',
    price: 1850,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'><path d='M64 12 C64 4, 80 4, 80 14' stroke='%2337474f' stroke-width='4' fill='none'/><rect x='38' y='16' width='52' height='96' rx='26' fill='%2337474f'/><path d='M38 42 C38 26, 48 16, 62 16 L62 52 L38 52 Z' fill='%23546e7a'/><path d='M90 42 C90 26, 80 16, 66 16 L66 52 L90 52 Z' fill='%23546e7a'/><rect x='60' y='26' width='8' height='18' rx='4' fill='%2329b6f6'/><path d='M46 76 C46 92, 82 92, 82 76' stroke='%2329b6f6' stroke-width='4' fill='none' stroke-linecap='round'/></svg>"
  },
  {
    id: 3,
    title: '4K Monitor',
    price: 14500,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'><rect x='12' y='18' width='104' height='68' rx='6' fill='%2337474f'/><rect x='18' y='24' width='92' height='54' rx='2' fill='%2329b6f6'/><polygon points='18,78 52,44 76,68 92,52 110,78' fill='%230288d1'/><rect x='54' y='86' width='20' height='16' fill='%2378909c'/><rect x='38' y='102' width='52' height='8' rx='4' fill='%23546e7a'/></svg>"
  },
  {
    id: 4,
    title: 'Studio Headphones',
    price: 4100,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'><path d='M24 68 A40 40 0 0 1 104 68' stroke='%2337474f' stroke-width='10' fill='none' stroke-linecap='round'/><rect x='16' y='62' width='18' height='42' rx='9' fill='%2329b6f6'/><rect x='30' y='66' width='10' height='34' rx='5' fill='%23546e7a'/><rect x='94' y='62' width='18' height='42' rx='9' fill='%2329b6f6'/><rect x='88' y='66' width='10' height='34' rx='5' fill='%23546e7a'/></svg>"
  },
  {
    id: 5,
    title: 'Condenser Microphone',
    price: 2900,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'><rect x='48' y='14' width='32' height='54' rx='16' fill='%2378909c'/><line x1='48' y1='30' x2='80' y2='30' stroke='%2337474f' stroke-width='3'/><line x1='48' y1='42' x2='80' y2='42' stroke='%2337474f' stroke-width='3'/><line x1='48' y1='54' x2='80' y2='54' stroke='%2337474f' stroke-width='3'/><path d='M36 48 A28 28 0 0 0 92 48' stroke='%2337474f' stroke-width='6' fill='none' stroke-linecap='round'/><rect x='60' y='76' width='8' height='28' fill='%23546e7a'/><rect x='40' y='104' width='48' height='8' rx='4' fill='%2337474f'/></svg>"
  },
  {
    id: 6,
    title: 'HD Webcam',
    price: 2150,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'><circle cx='64' cy='54' r='36' fill='%2337474f'/><circle cx='64' cy='54' r='22' fill='%23263238'/><circle cx='64' cy='54' r='12' fill='%2329b6f6'/><circle cx='59' cy='49' r='4' fill='%23ffffff'/><circle cx='64' cy='26' r='3' fill='%2366bb6a'/><path d='M42 88 L30 108 L98 108 L86 88 Z' fill='%23546e7a'/></svg>"
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Image />

      <hr className="separator" />

      <h2>Галерея товарів</h2>
      <div className="goods-gallery">
        {goodsData.map((item) => (
          <GoodsCard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;