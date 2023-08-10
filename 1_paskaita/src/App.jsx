const App = () => {

  return(
    <div className="mainBlock">
       <nav className="navCointainer">
          <img src="src/assets/react.svg" alt="" />
          <div>
            <a href="#">Home</a>
            <a href="#">Product</a>
            <a href="#">Company</a>
            <a href="#">Contact</a>
          </div>
       </nav>
       <main>
          <div className="headerImg">
              <h1>Header Image</h1>
          </div>
          <div className="aboutBlock">
              <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora, consequatur totam adipisci error cupiditate! Similique, eligendi, officiis est architecto odio commodi molestiae ut sit voluptatibus repellendus earum saepe debitis!</p>
              </div>
              <div>
                <h1>Company</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora, consequatur totam adipisci error cupiditate! Similique, eligendi, officiis est architecto odio commodi molestiae ut sit voluptatibus repellendus earum saepe debitis!</p>
              </div>
              <div>
                <h1>Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora, consequatur totam adipisci error cupiditate! Similique, eligendi, officiis est architecto odio commodi molestiae ut sit voluptatibus repellendus earum saepe debitis!</p>
              </div>
          </div>
          <div className="contentBlock">
            <div className="mainContent">
                <h1>Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laborum voluptatem doloribus aliquam adipisci dolores architecto molestias sequi? Voluptatem omnis iure tempora mollitia quidem repudiandae magni iusto veniam nisi natus?</p>
                <h2>Sub Header</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit laborum voluptatem doloribus aliquam adipisci dolores architecto molestias sequi? Voluptatem omnis iure tempora mollitia quidem repudiandae magni iusto veniam nisi natus?</p>
            </div>
            <div className="sideNav">
              <h2>Navigation</h2>
              <div className="menuLinks">
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">Company</a>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
       </main>
    </div>
  );
}

export default App;
