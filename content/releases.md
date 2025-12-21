---
title: Releases
layout: releases
---

<div style="
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%) rotate(-12deg);
  background: black;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 10000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  display: inline-flex;
  align-items: center;
  gap: 15px;
">
  <span class="desktop-text">🚧 Work-In-Progress</span>
  <span class="mobile-text">🚧 W.I.P.</span>
  <button style="
    background: white;
    color: black;
    border: 2px solid black;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  " onclick="this.closest('[style*=&quot;position: fixed&quot;]').nextElementSibling.style.display = 'none'; this.closest('[style*=&quot;position: fixed&quot;]').style.display = 'none';">
    ×
  </button>
</div>

<div style="
  position: fixed;
  top: 275px;
  left: -80px;
  right: -80px;
  width: calc(100vw + 160px);
  background: repeating-linear-gradient(45deg, orange, orange 10px, white 10px, white 20px);
  height: 60px;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transform: rotate(-12deg);
  border-bottom: 5px solid #ff8c00;
">
</div>

<div style="height: 100px;"></div> <!-- Spacer for the fixed banner -->

<style>
.page-title, h1, .post-title, .entry-title {
  display: none !important;
}
body {
  background: linear-gradient(135deg, #f8fff8 0%, #e6ffe6 100%) !important;
}

/* Responsive banner text */
@media (max-width: 768px) {
  .desktop-text { display: none; }
  .mobile-text { display: inline; }
}
@media (min-width: 769px) {
  .desktop-text { display: inline; }
  .mobile-text { display: none; }
}
</style>

<style>
.release-notes {
  background: linear-gradient(135deg, #f8fff8 0%, #e6ffe6 100%);
  border-radius: 12px;
  padding: 2.5rem;
  margin: 2rem 0;
}
.release-wrapper {
  padding: 2rem;
}
.release-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.version-info h3 {
  color: #006400;
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
}
.version {
  color: #3B9C3F;
  font-style: italic;
  font-size: 1.3rem;
  margin: 0.25rem 0;
  font-weight: bold;
  text-decoration: none;
}
.codename {
  color: #3B9C3F;
  font-style: italic;
  font-size: 1.3rem;
  margin-top: 0.5rem;
  font-weight: 500;
}
.release-date {
  color: #2d5a2f;
  font-size: 1rem;
  background: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  border: 2px solid #A4D23B;
  font-weight: 600;
}
.release-blurb {
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  border-left: 4px solid #3B9C3F;
}
.release-blurb p {
  color: #2d5a2f;
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  font-style: italic;
}
.release-section {
  margin-bottom: 2rem;
}
.release-section h4 {
  color: #006400;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
}
.release-section ul {
  margin-bottom: 0;
  padding-left: 2rem;
}
.release-section li {
  color: #2d5a2f;
  margin-bottom: 0.75rem;
  line-height: 1.6;
  font-size: 1.05rem;
}
.highlight-item {
  background: rgba(59, 156, 63, 0.15);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border-left: 4px solid #3B9C3F;
  font-weight: 500;
}
.citation-box {
  background: rgba(248, 255, 248, 0.9);
  border: 2px solid #A4D23B;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 0.5rem;
  font-style: italic;
}
.citation-box ul {
  margin: 0;
  padding-left: 1.5rem;
}
.citation-box li {
  color: #2d5a2f;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  display: inline;
}
.citation-box li:not(:last-child)::after {
  content: ". ";
}
.citation-box li:last-child::after {
  content: ".";
}
.release-feature, .release-bugfix {
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: rgba(59, 156, 63, 0.05);
  border-radius: 6px;
  border-left: 3px solid #3B9C3F;
}
.feature-title, .bugfix-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #006400;
  margin-bottom: 0.5rem;
}
.github-link {
  color: #3B9C3F;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
}
.github-link:hover {
  text-decoration: underline;
}
.feature-description, .bugfix-description {
  color: #2d5a2f;
  font-size: 1rem;
  line-height: 1.5;
}
.contributors-section {
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  border: 2px solid #A4D23B;
}
.contributors-section h4 {
  color: #006400;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
}
.contributors-section h5 {
  color: #006400;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
}
.contributors-section ul {
  margin-bottom: 1rem;
  padding-left: 2rem;
}
.contributors-section li {
  color: #2d5a2f;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
.contributors-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}
.contributor-card {
  background: linear-gradient(135deg, rgba(248, 255, 248, 0.9), rgba(230, 255, 230, 0.9));
  border: 2px solid #3B9C3F;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #2d5a2f;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}
.contributor-card:hover {
  transform: translateY(-2px);
}
.first-time .contributor-card {
  border-color: #A4D23B;
  background: linear-gradient(135deg, rgba(255, 255, 248, 0.9), rgba(255, 255, 230, 0.9));
}
.release-stats {
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  border: 2px solid #A4D23B;
}
.release-stats h4 {
  color: #006400;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
}
.stat-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.stat-card {
  flex: 0 0 140px;
  aspect-ratio: 0.7;
  background: linear-gradient(135deg, rgba(248, 255, 248, 0.9), rgba(230, 255, 230, 0.9));
  border: 2px solid #3B9C3F;
  border-radius: 25px;
  padding: 0.5rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
.stat-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
}
.stat-card:nth-child(3) .stat-number {
  color: #00AA00;
}
.stat-card:nth-child(4) .stat-number {
  color: #AA0000;
}
.stat-emoji {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}
.stat-label {
  font-size: 0.8rem;
  color: #2d5a2f;
}
.release-issue {
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: rgba(59, 156, 63, 0.05);
  border-radius: 6px;
  border-left: 3px solid #3B9C3F;
}
.issue-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #006400;
  margin-bottom: 0.5rem;
}
.issue-description {
  color: #2d5a2f;
  font-size: 1rem;
  line-height: 1.5;
}
.release-breaking {
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: rgba(59, 156, 63, 0.05);
  border-radius: 6px;
  border-left: 3px solid #3B9C3F;
}
.breaking-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #006400;
  margin-bottom: 0.5rem;
}
.breaking-description {
  color: #2d5a2f;
  font-size: 1rem;
  line-height: 1.5;
}
@media (max-width: 768px) {
  .release-wrapper {
    padding: 0 !important;
  }
  .release-notes {
    padding: 0 0.25rem !important;
    margin: 1rem 0 0 0 !important;
    border-radius: 0 !important;
  }
  .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  .col-md-12 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .stat-card {
    flex: 0 0 calc((100% - 2rem) / 3);
    order: initial;
  }
  .stat-card:nth-child(4) {
    order: 6;
  }
  .stat-card:nth-child(5) {
    order: 5;
  }
  .stat-card:nth-child(6) {
    order: 4;
  }
}
</style>

<script>
$(document).ready(function() {
  $('#features').on('show.bs.collapse', function() {
    $(this).prev().find('.toggle-arrow').css('transform', 'rotate(0deg)');
  });
  $('#features').on('hide.bs.collapse', function() {
    $(this).prev().find('.toggle-arrow').css('transform', 'rotate(180deg)');
  });
  $('#breaking').on('show.bs.collapse', function() {
    $(this).prev().find('.toggle-arrow').css('transform', 'rotate(0deg)');
  });
  $('#breaking').on('hide.bs.collapse', function() {
    $(this).prev().find('.toggle-arrow').css('transform', 'rotate(180deg)');
  });
  $('#bugs').on('show.bs.collapse', function() {
    $(this).prev().find('.toggle-arrow').css('transform', 'rotate(0deg)');
  });
  $('#bugs').on('hide.bs.collapse', function() {
    $(this).prev().find('.toggle-arrow').css('transform', 'rotate(180deg)');
  });
  $('#issues').on('show.bs.collapse', function() {
    $(this).prev().find('.toggle-arrow').css('transform', 'rotate(0deg)');
  });
  $('#issues').on('hide.bs.collapse', function() {
    $(this).prev().find('.toggle-arrow').css('transform', 'rotate(180deg)');
  });
});
</script>

<div class="release-notes">
  <div class="release-header">
    <div class="version-info">
      <h3>⚽ GOLI = Godot + Lisp</h3>
      <div class="version">(v0.0.1-alpha1)</div>
      <div class="codename">"Kickoff"</div>
    </div>
    <div class="release-date">Dec 31st, 2025</div>
  </div>
  
  <div class="release-blurb">
    <p>Welcome to the first alpha release of GOLI! This foundational version establishes the core architecture for Lisp integration with the Godot game engine, providing a solid base for future development.</p>
  </div>

  <div class="image-showcase">
    <div class="image-grid" style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center;">
      <img src="/img/screenshot1.png" alt="GOLI Interface Screenshot" style="width: 100%; max-width: 300px; border-radius: 8px; margin: 0.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <img src="/img/screenshot2.png" alt="Lisp Code Example" style="width: 100%; max-width: 300px; border-radius: 8px; margin: 0.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <img src="/img/screenshot3.png" alt="Godot Integration Demo" style="width: 100%; max-width: 300px; border-radius: 8px; margin: 0.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    </div>
  </div>
  
  <div class="contributors-section">
    <h4>👥 Contributors</h4>
    <h5>This Cycle</h5>
    <div class="contributors-list">
      <div class="contributor-card">Contributor 1</div>
      <div class="contributor-card">Contributor 2</div>
    </div>
    <h5>First-Time</h5>
    <div class="contributors-list first-time">
      <div class="contributor-card">New Contributor 1</div>
    </div>
  </div>
  
  <div class="release-stats">
    <h4>📊 The Stats</h4>
    <div class="stat-container">
      <div class="stat-card">
        <div class="stat-emoji">🔀</div>
        <div class="stat-number">000</div>
        <div class="stat-label">PRs Merged</div>
      </div>
      <div class="stat-card">
        <div class="stat-emoji">✅</div>
        <div class="stat-number">000</div>
        <div class="stat-label">Issues Closed</div>
      </div>
      <div class="stat-card">
        <div class="stat-emoji">➕</div>
        <div class="stat-number">000</div>
        <div class="stat-label">Lines Added</div>
      </div>
      <div class="stat-card">
        <div class="stat-emoji">➖</div>
        <div class="stat-number">000</div>
        <div class="stat-label">Lines Removed</div>
      </div>
      <div class="stat-card">
        <div class="stat-emoji">💾</div>
        <div class="stat-number">000</div>
        <div class="stat-label">Commits</div>
      </div>
      <div class="stat-card">
        <div class="stat-emoji">📁</div>
        <div class="stat-number">000</div>
        <div class="stat-label">Files Changed</div>
      </div>
    </div>
  </div>
  
  <div class="release-section">
    <button class="btn btn-link" data-toggle="collapse" data-target="#features" style="color: #006400; font-size: 1.3rem; font-weight: bold; padding: 0; border: none; background: none; display: flex; align-items: center; width: 100%; justify-content: space-between;">🌟 Notable Features <i class="fas fa-chevron-down toggle-arrow" style="transition: transform 0.3s;"></i></button>
    <div id="features" class="collapse show">
    <div class="release-feature">
      <div class="feature-title">Lorem ipsum dolor sit amet <a href="#" class="github-link">Issue</a></div>
      <div class="feature-description">Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
    <div class="release-feature">
      <div class="feature-title">Ut enim ad minim veniam <a href="#" class="github-link">Issue</a></div>
      <div class="feature-description">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    </div>
    <div class="release-feature">
      <div class="feature-title">Duis aute irure dolor <a href="#" class="github-link">Issue</a></div>
      <div class="feature-description">In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
    </div>
    <div class="release-feature">
      <div class="feature-title">Excepteur sint occaecat <a href="#" class="github-link">Issue</a></div>
      <div class="feature-description">Cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    </div>
    </div>
  </div>
  
  <div class="release-section">
    <button class="btn btn-link" data-toggle="collapse" data-target="#breaking" style="color: #006400; font-size: 1.3rem; font-weight: bold; padding: 0; border: none; background: none; display: flex; align-items: center; width: 100%; justify-content: space-between;">⚠️ Breaking Changes <i class="fas fa-chevron-down toggle-arrow" style="transition: transform 0.3s;"></i></button>
    <div id="breaking" class="collapse show">
    <div class="release-breaking">
      <div class="breaking-title">Sed ut perspiciatis unde omnis <a href="#" class="github-link">Issue</a></div>
      <div class="breaking-description">Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</div>
    </div>
    <div class="release-breaking">
      <div class="breaking-title">Eaque ipsa quae ab illo <a href="#" class="github-link">Issue</a></div>
      <div class="breaking-description">Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim.</div>
    </div>
    </div>
  </div>
  
  <div class="release-section">
    <button class="btn btn-link" data-toggle="collapse" data-target="#bugs" style="color: #006400; font-size: 1.3rem; font-weight: bold; padding: 0; border: none; background: none; display: flex; align-items: center; width: 100%; justify-content: space-between;">🐛 Bug Fixes <i class="fas fa-chevron-down toggle-arrow" style="transition: transform 0.3s;"></i></button>
    <div id="bugs" class="collapse show">
    <div class="release-bugfix">
      <div class="bugfix-title">Nemo enim ipsam voluptatem <a href="#" class="github-link">Issue</a></div>
      <div class="bugfix-description">Quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.</div>
    </div>
    <div class="release-bugfix">
      <div class="bugfix-title">Neque porro quisquam est <a href="#" class="github-link">Issue</a></div>
      <div class="bugfix-description">Qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam.</div>
    </div>
    <div class="release-bugfix">
      <div class="bugfix-title">Eius modi tempora incidunt <a href="#" class="github-link">Issue</a></div>
      <div class="bugfix-description">Ut labore et dolore magnam aliquam quaerat voluptatem ut enim ad minima veniam.</div>
    </div>
    </div>
  </div>
  
  <div class="release-section">
    <button class="btn btn-link" data-toggle="collapse" data-target="#issues" style="color: #006400; font-size: 1.3rem; font-weight: bold; padding: 0; border: none; background: none; display: flex; align-items: center; width: 100%; justify-content: space-between;">🔧 Known Issues <i class="fas fa-chevron-down toggle-arrow" style="transition: transform 0.3s;"></i></button>
    <div id="issues" class="collapse show">
    <div class="release-issue">
      <div class="issue-title">Quis autem vel eum iure <a href="#" class="github-link">Issue</a></div>
      <div class="issue-description">Reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum.</div>
    </div>
    <div class="release-issue">
      <div class="issue-title">Qui dolorem eum fugiat quo <a href="#" class="github-link">Issue</a></div>
      <div class="issue-description">Voluptas nulla pariatur at vero eos et accusamus et iusto odio dignissimos ducimus.</div>
    </div>
    </div>
  </div>
  
  <div class="release-section">
    <div class="citation-box">
      <ul>
        <li>This is a foundational release focusing on project architecture</li>
        <li>Full Lisp integration features are still in development</li>
        <li>API is subject to breaking changes in future releases</li>
      </ul>
    </div>
  </div>
</div>