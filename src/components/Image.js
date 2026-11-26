import React, { useState } from 'react';

function Image() {
  const [isVisible, setIsVisible] = useState(true);
  const [width, setWidth] = useState(350);

  const STEP = 50;
  const MIN_WIDTH = 150;
  const MAX_WIDTH = 1000;

  const handleAdd = () => {
    setIsVisible(true);
  };

  const handleZoomIn = () => {
    if (isVisible) {
      setWidth((prev) => Math.min(prev + STEP, MAX_WIDTH));
    }
  };

  const handleZoomOut = () => {
    if (isVisible) {
      setWidth((prev) => Math.max(prev - STEP, MIN_WIDTH));
    }
  };

  const handleRemove = () => {
    setIsVisible(false);
  };

  return (
    <section className="image-section">
      <div className="image-container">
        {isVisible && (
          <a
            href="https://uk.wikipedia.org/wiki/%D0%AF%D0%B2%D0%BE%D1%80%D1%96%D0%B2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/yavoriv1.jpg"
              alt="Ратуша міста Яворова"
              style={{ width: `${width}px`, height: 'auto' }}
            />
          </a>
        )}
      </div>

      <div className="controls-wrapper">
        <button onClick={handleAdd}>Додати</button>
        <button onClick={handleZoomIn}>Збільшити</button>
        <button onClick={handleZoomOut}>Зменшити</button>
        <button onClick={handleRemove}>Видалити</button>
      </div>
    </section>
  );
}

export default Image;