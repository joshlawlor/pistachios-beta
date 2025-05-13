import React from "react";
import "./MenuPage.css";

const MenuPage = () => {
  return (
    <div className="menuMain">
      <div className="menu-container">
        <h1 className="menu-title">Our Menu</h1>

        <div className="menu-section">
          <h2>Appetizers</h2>
          <ul>
            <li><strong>Pistachio Hummus</strong> – Served with warm pita bread</li>
            <li><span className="price">$8.50</span></li>
            <li><strong>Loaded Fries</strong> – Topped with beer cheese, bacon, scallions</li>
            <li><span className="price">$7.00</span></li>
            <li><strong>Fried Pickle Chips</strong> – With buttermilk ranch</li>
            <li><span className="price">$6.00</span></li>
          </ul>
        </div>

        <div className="menu-section">
          <h2>Main Dishes</h2>
          <ul>
            <li><strong>Pistachio-Crusted Salmon</strong> – With lemon dill sauce</li>
            <li><span className="price">$19.00</span></li>
            <li><strong>Smash Burger Sliders</strong> – Griddled beef, caramelized onion, house sauce</li>
            <li><span className="price">$14.00</span></li>
            <li><strong>Hot Honey Chicken Sandwich</strong> – Buttermilk fried chicken, pickles, brioche bun</li>
            <li><span className="price">$15.50</span></li>
          </ul>
        </div>

        <div className="menu-section">
          <h2>Desserts</h2>
          <ul>
            <li><strong>Pistachio Gelato</strong> – Creamy, nutty perfection</li>
            <li><span className="price">$5.50</span></li>
            <li><strong>Baklava</strong> – With pistachios and honey syrup</li>
            <li><span className="price">$6.00</span></li>
          </ul>
        </div>

        <div className="menu-section">
          <h2>Drinks</h2>
          <ul>
            <li><strong>House Pistachio Latte</strong></li>
            <li><span className="price">$4.25</span></li>
            <li><strong>Green Gold Martini</strong> – Vodka, pistachio syrup, lemon</li>
            <li><span className="price">$11.00</span></li>
            <li><strong>Craft Brews</strong> – Seasonal local beers</li>
            <li><span className="price">$7.00</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
