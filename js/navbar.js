class NavBar extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <nav class="navbar">
        <div class="brntitle">skill issue</div>
        <a class="tglnv">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="navlnks">
            <ul>
                <li><a href="index">home</a></li>
                <li><a href="aboutme">about me</a></li>
                <li><a href="socials">socials</a></li>
                <li><a href="ama">ask me anything</a></li>
            </ul>
        </div>
    </nav>
    
        `;
	}
}
customElements.define("nav-bar", NavBar);
