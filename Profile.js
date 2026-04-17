const userProfile = {
  name: "Alex Sterling",
  bio: "Senior Frontend Developer & UI Architect based in Ibadan. Passionate about building accessible, high-performance web applications and mentoring the next generation of wizards.",
  avatarUrl: "https://i.pravatar.cc/300?img=11", // Placeholder avatar
  hobbies: ["Photography", "Chess", "Open Source", "Hiking"],
  dislikes: ["Poor Documentation", "Spaghetti Code", "Slow Internet"],
  socials: [
    {
      network: "twitter",
      url: "https://x.com",
      icon: "fa-brands fa-x-twitter",
    },
    {
      network: "github",
      url: "https://github.com",
      icon: "fa-brands fa-github",
    },
    {
      network: "linkedin",
      url: "https://linkedin.com",
      icon: "fa-brands fa-linkedin",
    },
  ],
};

function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

function renderProfile() {
  const root = document.getElementById("profile-root");

  const cardHtml = `
        <article class="profile-card" data-testid="test-profile-card">
            <div class="profile-layout">
                <figure class="profile-figure">
                    <img 
                        src="${userProfile.avatarUrl}" 
                        alt="Profile photo of ${userProfile.name}" 
                        data-testid="test-user-avatar"
                        class="profile-img"
                    />
                </figure>

                <div class="profile-info">
                    <header>
                        <h2 data-testid="test-user-name">${userProfile.name}</h2>
                        <div class="time-container" aria-live="polite">
                            <i class="fa-regular fa-clock"></i>
                            <span data-testid="test-user-time">${Date.now()}</span> ms
                        </div>
                    </header>

                    <p class="bio" data-testid="test-user-bio">${userProfile.bio}</p>

                    <nav class="social-links" data-testid="test-user-social-links">
                        ${userProfile.socials
                          .map(
                            (link) => `
                            <a href="${link.url}" 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               data-testid="test-user-social-${link.network}"
                               aria-label="Visit ${userProfile.name}'s ${link.network}"
                            >
                                <i class="${link.icon}"></i>
                            </a>
                        `,
                          )
                          .join("")}
                    </nav>

                    <div class="lists-wrapper">
                        <section class="hobbies-section">
                            <h3>Hobbies</h3>
                            <ul data-testid="test-user-hobbies">
                                ${userProfile.hobbies.map((h) => `<li>${h}</li>`).join("")}
                            </ul>
                        </section>

                        <section class="dislikes-section">
                            <h3>Dislikes</h3>
                            <ul data-testid="test-user-dislikes">
                                ${userProfile.dislikes.map((d) => `<li>${d}</li>`).join("")}
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    `;

  root.innerHTML = cardHtml;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  // Update time every 100ms for that high-precision "tech" feel
  setInterval(updateTime, 100);
});
