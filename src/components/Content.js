import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks1: 0,
      clicks2: 0
    };
  }

  handleFirstClick = () => {
    this.setState((prevState) => ({ clicks1: prevState.clicks1 + 1 }));
  };

  handleSecondClick = () => {
    this.setState((prevState) => ({ clicks2: prevState.clicks2 + 1 }));
  };

  getFirstStyle() {
    const { clicks1 } = this.state;
    if (clicks1 === 0) return {};
    return clicks1 % 2 === 1
      ? { backgroundColor: '#2a52be', color: '#ffffff' }
      : { backgroundColor: '#ff9800', color: '#000000' };
  }

  getSecondStyle() {
    const { clicks2 } = this.state;
    if (clicks2 === 0) return {};
    return clicks2 % 2 === 1
      ? { backgroundColor: '#2e7d32', color: '#ffffff' }
      : { backgroundColor: '#e91e63', color: '#ffffff' };
  }

  render() {
    return (
      <main>
        <p
          className="clickable"
          style={this.getFirstStyle()}
          onClick={this.handleFirstClick}
        >
          Освіта: Яворівська гімназія імені Осипа Маковея, м. Яворів; НТУУ "КПІ", м. Київ
        </p>

        <p
          className="clickable"
          style={this.getSecondStyle()}
          onClick={this.handleSecondClick}
        >
          <strong>Хобі:</strong>
        </p>

        <ul>
          <li>Програмування та розробка ПЗ</li>
          <li>Відеомонтаж і комп'ютерна графіка</li>
          <li>Відеоігри</li>
          <li>Читання літератури</li>
        </ul>

        <p><strong>Улюблені фільми:</strong></p>
        <ol>
          <li>"Темний Лицар" (The Dark Knight), 2008</li>
          <li>"Назад у майбутнє 3" (Back to the future 3), 1990</li>
          <li>"Стрінгер" (Nightcrawler), 2014</li>
          <li>"Пірати Карибського моря: На краю світу" (Pirates of the Caribbean: At World's End), 2007</li>
        </ol>

        <p>
          Яворів — місто в Україні, адміністративний центр Яворівської міської громади та Яворівського району Львівської області.
        </p>
        <p>
          Назву топоніма «Яворів» виводять від яворів, яких багато зростає в долині річки Шкло.
        </p>
        <p>
          За іншою версією назва міста як краю пішла від легендарного княжича Я́вора, про якого згадується в давньоруських хроніках XIII—XIV століть.
        </p>
      </main>
    );
  }
}

export default Content;