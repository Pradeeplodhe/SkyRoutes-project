import React, { useState, useEffect } from 'react';
import './index.css';

const Navbar = ({ currentPath, setCurrentPath }) => {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <span>🕒 Monday To Friday - 10:00 Am - 5:00 Pm</span>
        </div>
        <div className="top-bar-right">
          <span>Follow Us</span>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">t</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">ig</a>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#/" onClick={() => setCurrentPath('#/')} className={currentPath === '#/' ? 'active' : ''}>Home</a></li>
          <li><a href="#/about" onClick={() => setCurrentPath('#/about')} className={currentPath === '#/about' ? 'active' : ''}>About</a></li>
          <li><a href="#/category" onClick={() => setCurrentPath('#/category')} className={currentPath === '#/category' ? 'active' : ''}>Category</a></li>
          <li><a href="#/shop" onClick={() => setCurrentPath('#/shop')} className={currentPath === '#/shop' ? 'active' : ''}>Shop</a></li>
          <li><a href="#/faq" onClick={() => setCurrentPath('#/faq')} className={currentPath === '#/faq' ? 'active' : ''}>FAQ</a></li>
          <li><a href="#/contact" onClick={() => setCurrentPath('#/contact')} className={currentPath === '#/contact' ? 'active' : ''}>Contact Us</a></li>
        </ul>
        <div className="logo">
          <h1>PIPA</h1>
        </div>
        <div>
          <button className="get-in-touch-btn" onClick={() => setCurrentPath('#/contact')}>Get In Touch</button>
        </div>
      </nav>
      <div className="scalloped-top"></div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="scalloped-divider"></div>
      <footer>
        <div className="footer-top">
          <div className="newsletter-section">
            <div className="newsletter-text">
              <h3>Sign Up For Exclusive<br />Deals & Latest Updates</h3>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter Your Email" />
              <button>Subscribe Now</button>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <div className="logo" style={{ marginBottom: '20px' }}>
                <h1 style={{ fontSize: '40px' }}>PIPA</h1>
              </div>
              <ul className="social-list">
                <li><span className="icon">f</span> Facebook</li>
                <li><span className="icon">t</span> Twitter</li>
                <li><span className="icon">ig</span> Instagram</li>
                <li><span className="icon">in</span> LinkedIn</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Categories</h4>
              <ul>
                <li><a href="#">Cream rolls</a></li>
                <li><a href="#">Chocolate Bars</a></li>
                <li><a href="#">Marshmellow</a></li>
                <li><a href="#">Horror Dream</a></li>
                <li><a href="#">Bubble Gum</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Home</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get In Touch</h4>
              <div className="contact-item">
                <span>📍</span>
                <div>
                  <strong>Location</strong>
                  <p>Princess Business Skypark, Scheme No 54, Indore-452010</p>
                </div>
              </div>
              <div className="contact-item">
                <span>✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>hello@pipa.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span>📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+00 (0) 123 456 780</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© PIPA Confectionery</div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </>
  );
};

const Home = () => (
  <div style={{ textAlign: 'center' }}>
    <section className="hero-section" style={{ minHeight: '600px', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '80px', color: 'var(--primary-pink)', marginBottom: '20px', fontFamily: 'Fredoka' }}>Welcome to PIPA!</h1>
      <p style={{ fontSize: '24px', color: '#555', maxWidth: '800px', margin: '0 auto 40px auto' }}>The best place to find your favorite sweets, candies, and magical treats.</p>
      <button className="get-in-touch-btn" style={{ padding: '15px 40px', fontSize: '20px' }} onClick={() => window.location.hash = '#/shop'}>Shop Now</button>
    </section>
    
    <div style={{ padding: '80px 40px', backgroundColor: '#fff' }}>
      <h2 style={{ fontSize: '40px', marginBottom: '50px' }}>Featured Treats</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ padding: '30px', backgroundColor: '#fef2f2', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
             <img src={`https://placehold.co/400x400/ffb3c6/ffffff?text=Treat+${i}`} alt="Treat" style={{ width: '100%', borderRadius: '50%', marginBottom: '20px' }} />
             <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Sweet Box {i}</h3>
             <p style={{ color: '#777' }}>A delightful mix of our best selling candies.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Shop = () => {
  const shopItems = [
    { title: 'Strawberry Dream', price: '$4.99', img: 'https://placehold.co/400x400/ffb3c6/ffffff?text=Strawberry' },
    { title: 'Choco Blast', price: '$5.99', img: 'https://placehold.co/400x400/8d6e63/ffffff?text=Chocolate' },
    { title: 'Mallow Clouds', price: '$3.99', img: 'https://placehold.co/400x400/4fc3f7/ffffff?text=Mallow' },
    { title: 'Rainbow Pops', price: '$2.99', img: 'https://placehold.co/400x400/ffca28/ffffff?text=Lollipop' },
    { title: 'Berry Twist', price: '$4.49', img: 'https://placehold.co/400x400/ab47bc/ffffff?text=Berry' },
    { title: 'Minty Fresh', price: '$3.49', img: 'https://placehold.co/400x400/26a69a/ffffff?text=Mint' },
    { title: 'Caramel Swirl', price: '$6.99', img: 'https://placehold.co/400x400/ff9800/ffffff?text=Caramel' },
    { title: 'Sour Patch', price: '$4.99', img: 'https://placehold.co/400x400/8bc34a/ffffff?text=Sour' },
  ];

  return (
    <div style={{ backgroundColor: '#fff5f2' }}>
      <section className="hero-section" style={{ minHeight: '300px', padding: '60px' }}>
        <div className="hero-content" style={{ textAlign: 'center', width: '100%' }}>
          <h2 style={{ fontSize: '60px', color: 'var(--primary-pink)', marginBottom: '10px' }}>Our Shop</h2>
          <p style={{ fontSize: '18px', color: '#666' }}>Browse all our delicious confectioneries</p>
        </div>
      </section>

      <div style={{ display: 'flex', maxWidth: '1400px', margin: '0 auto', padding: '40px' }}>
        {/* Sidebar Filters */}
        <div style={{ width: '250px', paddingRight: '40px' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Filters</h3>
          <ul style={{ listStyle: 'none', lineHeight: '2' }}>
            <li style={{ fontWeight: 'bold', color: 'var(--primary-pink)' }}>All Products</li>
            <li>Chocolates</li>
            <li>Gummies</li>
            <li>Marshmallows</li>
            <li>Hard Candy</li>
          </ul>

          <h3 style={{ fontSize: '24px', marginTop: '40px', marginBottom: '20px' }}>Price</h3>
          <input type="range" min="0" max="100" style={{ width: '100%', accentColor: 'var(--primary-pink)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginTop: '10px' }}>
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>

        {/* Product Grid */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
            {shopItems.map((item, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', borderRadius: '20px', padding: '20px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="shop-item">
                <img src={item.img} alt={item.title} style={{ width: '100%', borderRadius: '15px', marginBottom: '20px' }} />
                <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>{item.title}</h4>
                <div style={{ color: 'var(--primary-pink)', fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>{item.price}</div>
                <button className="get-in-touch-btn" style={{ width: '100%' }}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => (
  <div style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '60px' }}>
    <div style={{ flex: 1 }}>
      <img src="https://placehold.co/600x800/ffb3c6/ffffff?text=About+PIPA" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 40px rgba(231, 30, 98, 0.2)' }} alt="About Us" />
    </div>
    <div style={{ flex: 1 }}>
      <h2 style={{ color: 'var(--primary-pink)', fontSize: '50px', marginBottom: '20px', fontFamily: 'Fredoka' }}>Our Sweet Story</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
        Welcome to PIPA, where magic meets confectionery! We started with a simple dream: to bring endless joy through the sweetest, highest-quality treats.
      </p>
      <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
        Our masterful bakers and candy makers source the finest ingredients from around the world to deliver flavors that explode in your mouth. Whether you want an artisanal chocolate bar or a fluffy, giant marshmallow, PIPA has you covered.
      </p>
      <button className="get-in-touch-btn" onClick={() => window.location.hash = '#/contact'}>Contact Us Today</button>
    </div>
  </div>
);

const FAQ = () => {
  const faqs = [
    { q: "Do you offer international shipping?", a: "Yes, we ship our lovely sweets worldwide!" },
    { q: "Are your candies vegan?", a: "We have a dedicated selection of vegan options. Please check the product description for details." },
    { q: "What is your return policy?", a: "Due to the perishable nature of our products, we do not accept returns. However, if there is an issue with your order, please contact our support team." },
    { q: "Can I customize a gift box?", a: "Absolutely! You can choose the 'Custom Box' option in the shop and select your favorite items." }
  ];

  return (
    <div style={{ padding: '80px 40px', maxWidth: '800px', margin: '0 auto', minHeight: '60vh' }}>
      <h2 style={{ textAlign: 'center', fontSize: '50px', color: 'var(--primary-pink)', marginBottom: '50px', fontFamily: 'Fredoka' }}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ backgroundColor: '#fff5f2', padding: '30px', borderRadius: '15px', borderLeft: '5px solid var(--primary-pink)' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{faq.q}</h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => (
  <div style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '60px' }}>
    <div style={{ flex: 1, backgroundColor: '#fff', padding: '40px', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
      <h2 style={{ fontSize: '40px', color: 'var(--primary-pink)', marginBottom: '30px' }}>Send Us a Message</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input type="text" placeholder="Your Name" style={{ padding: '15px 20px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px' }} />
        <input type="email" placeholder="Your Email" style={{ padding: '15px 20px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px' }} />
        <textarea placeholder="Your Message" rows="6" style={{ padding: '15px 20px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '16px', resize: 'vertical' }}></textarea>
        <button className="get-in-touch-btn" style={{ padding: '15px', fontSize: '18px' }}>Send Message</button>
      </form>
    </div>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ fontSize: '40px', marginBottom: '20px', fontFamily: 'Fredoka' }}>Come Say Hi!</h2>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '40px' }}>We are always open to discuss new magical candy flavors or partnerships.</p>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'center' }}>
        <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary-pink)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px' }}>📍</div>
        <div>
          <strong style={{ display: 'block', fontSize: '18px' }}>Office Structure</strong>
          <span style={{ color: '#666' }}>Princess Business Skypark, Indore</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'center' }}>
        <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary-pink)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px' }}>✉️</div>
        <div>
          <strong style={{ display: 'block', fontSize: '18px' }}>Email Address</strong>
          <span style={{ color: '#666' }}>hello@pipa.com</span>
        </div>
      </div>
    </div>
  </div>
);

const Category = () => {
  const products = [
    { id: 1, title: 'Marshmallow', count: '(1 Product)', img: 'https://placehold.co/400x400/45b1ff/ffffff?text=Marshmallow', bg: '#e0f2fe' },
    { id: 2, title: 'Cream rolls', count: '(2 Products)', img: 'https://placehold.co/400x400/fecaca/ffffff?text=Cream+Rolls', bg: '#fef2f2' },
    { id: 3, title: 'Chocolate Bars', count: '(5 Products)', img: 'https://placehold.co/400x400/d8b4fe/ffffff?text=Chocolate', bg: '#faf5ff' },
    { id: 4, title: 'Horror surprise', count: '(1 Products)', img: 'https://placehold.co/400x400/fca5a5/ffffff?text=Surprise', bg: '#fef2f2' },
    { id: 5, title: 'Marshmallow', count: '(1 Product)', img: 'https://placehold.co/400x400/1d4ed8/ffffff?text=Marshmallow', bg: '#1d4ed8' },
    { id: 6, title: 'Cream rolls', count: '(2 Products)', img: 'https://placehold.co/400x400/fecaca/ffffff?text=Cream+Rolls', bg: '#fef2f2' },
    { id: 7, title: 'Chocolate Bars', count: '(5 Products)', img: 'https://placehold.co/400x400/d8b4fe/ffffff?text=Chocolate', bg: '#faf5ff' },
    { id: 8, title: 'Horror surprise', count: '(1 Products)', img: 'https://placehold.co/400x400/fca5a5/ffffff?text=Surprise', bg: '#fef2f2' },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Category</h2>
          <div className="breadcrumb">
            Home / <span>Category</span>
          </div>
        </div>
        <div className="hero-logo-large">PIPA</div>
      </section>

      <section className="product-section">
        <div className="product-grid">
          {products.map((product) => (
            <div 
              className="product-card" 
              key={product.id}
              onClick={() => window.location.hash = '#/shop'}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-image-container" style={{ backgroundColor: product.bg }}>
                <img src={product.img} alt={product.title} />
              </div>
              <h4 className="product-title">{product.title}</h4>
              <span className="product-count">{product.count}</span>
            </div>
          ))}
        </div>
        <button className="more-btn" onClick={() => window.location.hash = '#/shop'}>
          More <span>⌄</span>
        </button>
      </section>
    </>
  );
};

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/category');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/': return <Home />;
      case '#/about': return <About />;
      case '#/category': return <Category />;
      case '#/shop': return <Shop />;
      case '#/faq': return <FAQ />;
      case '#/contact': return <Contact />;
      default: return <Category />;
    }
  };

  return (
    <div className="app-container">
      <Navbar currentPath={currentPath} setCurrentPath={setCurrentPath} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
