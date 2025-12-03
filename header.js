class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header style="background-color:#6495ED">
        <h3 style="float:left;padding:30px;margin:0px;color:white">Sheffield Pauper</h3>
        <nav style="float:left;padding:30px">
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