class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h3>Sheffield Pauper</h3>
        <nav>
            <ul>
            <li><a href="index.html">Home</a></li> 
            <li><a href="rules.html">Rules</a></li>
            <li><a href="schedule.html">Schedule</a></li>
            <li><a href="leaderboard.html">Leaderboard</a></li>
            <li><a href="2025.html">2025</a></li>
            </ul>
        </nav>
      </header>
    `;
  }
}
customElements.define('site-header', SiteHeader);