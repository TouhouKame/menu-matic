import { useState } from "react";
import "./App.css";

const initialMenu = [
  {
    name: "Beef Carpaccio",
    description: "Thinly sliced raw beef, buratta cheese, pickles",
    price: 10,
    id: 124356634,
  },
  {
    name: "Risotto",
    description: "Tomato risotto in a creamy sauce",
    price: 8,
    id: 13141525,
  },
];

function Button({ text, handler }) {
  return <button onClick={handler}>{text}</button>;
}

function App() {
  const [menuItems, setMenuItems] = useState([...initialMenu]);
  const [showForm, setShowForm] = useState(true);

  function onShowForm() {
    setShowForm(!showForm);
  }

  function handleSubmitItem(item) {
    setMenuItems((items) => [...items, item]);
  }

  return (
    <main className="app">
      <Header showForm={showForm} handleShowForm={onShowForm} />
      <Menu menuItems={menuItems} />
      {showForm && <FormAddMenuItem />}
    </main>
  );
}

function Header({ showForm, handleShowForm }) {
  return (
    <>
      <header>
        <h1>Menu Matic</h1>
        <Button
          text={showForm ? "Hide Form" : "Show Form"}
          handler={handleShowForm}
        />
      </header>
    </>
  );
}

function Menu({ menuItems }) {
  return (
    <section>
      {menuItems.map((item) => (
        <MenuItem
          name={item.name}
          description={item.description}
          price={item.price}
          key={item.id}
        />
      ))}
    </section>
  );
}

function MenuItem({ name, description, price, key }) {
  return (
    <div>
      <i>❌</i>
      <div key={key}>
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
      </div>
    </div>
  );
}

function FormAddMenuItem({}) {
  const [itemName, setItemName] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName || !itemDesc) return;
  }

  return (
    <form>
      <input
        className="item-name"
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Name"
      ></input>
      <input
        className="item-description"
        type="text"
        value={itemDesc}
        onChange={(e) => setItemDesc(e.target.value)}
        placeholder="Description"
      ></input>
      <input
        className="item-price"
        type="text"
        value={itemPrice}
        onChange={(e) => setItemPrice(+e.target.value)}
        placeholder="Price(optional)"
      ></input>
      <Button text="Submit" handler={handleSubmit} />
    </form>
  );
}

export default App;
