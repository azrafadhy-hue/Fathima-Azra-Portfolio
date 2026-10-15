document.addEventListener('DOMContentLoaded', () => {
  const projectSection = document.querySelector('#projects');
  const cvSection = document.querySelector('#cv');

  const style = document.createElement('style');
  style.textContent = `
    .project-showcase { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:18px; }
    .project-pro { overflow:hidden; border:1px solid #465576; border-radius:10px; background:rgba(18,27,45,.9); box-shadow:0 16px 40px rgba(0,0,0,.2); }
    .project-pro img, .project-pro video, .human-video { width:100%; aspect-ratio:1.7; object-fit:cover; object-position:top; display:block; background:#080d17; }
    .project-pro-body { padding:20px; }
    .project-pro-title { display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:9px; }
    .project-pro-title h3 { margin:0; font-size:20px; }
    .project-type { color:#c3b7ff; font-size:12px; font-weight:800; letter-spacing:1px; text-transform:uppercase; }
    .project-pro p { margin:0 0 15px; color:#c1cada; font-size:14px; }
    .project-details { display:grid; grid-template-columns:1fr 1fr; gap:9px 14px; color:#cbd4e3; font-size:13px; margin:0 0 17px; }
    .project-details span { display:flex; gap:8px; align-items:flex-start; }
    .project-details i { color:#a997ff; font-style:normal; }
    .project-actions { display:flex; flex-wrap:wrap; gap:9px; }
    .project-actions a, .project-actions button { border:1px solid #6e5ce0; border-radius:6px; background:#7c66f2; color:#fff; padding:9px 12px; font:700 13px Inter,Arial,sans-serif; cursor:pointer; }
    .project-actions .secondary { background:transparent; border-color:#4c5d7b; color:#dce5f6; }
    .human-feature { grid-column:1 / -1; display:grid; grid-template-columns:1.15fr .85fr; border:1px solid #4c5b7b; border-radius:10px; overflow:hidden; background:rgba(19,28,48,.92); }
    .human-copy { padding:25px; }
    .human-copy h3 { margin:7px 0 9px; font-size:23px; }
    .human-copy p { color:#c1cada; font-size:14px; line-height:1.65; }
    .cv-panel { display:grid; grid-template-columns:minmax(220px,.75fr) 1.25fr; gap:30px; align-items:center; border:1px solid #465576; border-radius:10px; background:rgba(18,27,45,.9); padding:25px; }
    .cv-preview { width:100%; min-height:260px; border:1px solid #51617d; border-radius:7px; background:#fff; }
    .cv-panel h3 { font-size:26px; margin:0 0 8px; }
    .cv-panel p { color:#c2cada; max-width:520px; }
    .portfolio-gallery { width:min(1080px,calc(100% - 24px)); padding:0; border:1px solid #566887; border-radius:10px; color:#f7f8ff; background:#0c1220; }
    .portfolio-gallery::backdrop { background:rgba(0,0,0,.82); }
    .portfolio-gallery-head { display:flex; align-items:center; justify-content:space-between; gap:18px; padding:15px 18px; border-bottom:1px solid #33435f; }
    .portfolio-gallery-close { border:0; background:transparent; color:#fff; font-size:28px; line-height:1; cursor:pointer; }
    .portfolio-gallery-stage { display:grid; place-items:center; min-height:320px; padding:16px; background:#070b13; }
    .portfolio-gallery-stage img { display:block; max-width:100%; max-height:68vh; object-fit:contain; border:1px solid #34445f; }
    .portfolio-gallery-controls { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:15px 18px; }
    .portfolio-gallery-controls button { border:1px solid #6e5ce0; border-radius:6px; background:#7c66f2; color:#fff; padding:9px 13px; font:700 13px Inter,Arial,sans-serif; cursor:pointer; }
    .portfolio-gallery-controls button:disabled { opacity:.42; cursor:not-allowed; }
    .portfolio-gallery-count { color:#c9d1df; font-size:13px; }
    @media (max-width:760px) {
      .hero { gap:28px!important; }
      .visual { padding-bottom:0!important; }
      .portrait { height:auto!important; width:100%!important; object-fit:contain!important; object-position:center!important; }
      .panel { position:relative!important; left:auto!important; right:auto!important; bottom:auto!important; margin-top:14px!important; border-radius:10px!important; }
      .project-showcase, .human-feature, .cv-panel { grid-template-columns:1fr; }
      .project-details { grid-template-columns:1fr; }
      .cv-preview { min-height:330px; }
    }
  `;
  document.head.append(style);

  if (projectSection) {
    projectSection.innerHTML = `
      <div class="wrap section-shell">
        <p class="eyebrow">Selected Work</p><h2>Projects and real-world learning.</h2>
        <div class="project-showcase">
          <article class="project-pro"><video controls muted preload="metadata" src="watch-demo.mp4"></video><div class="project-pro-body"><div class="project-pro-title"><h3>ChronoElite</h3><span class="project-type">Watch E-Commerce</span></div><p>A full-stack ecommerce platform built for browsing watches, managing orders, and supporting customer and admin workflows.</p><div class="project-details"><span><i>⌘</i>MERN Stack</span><span><i>▣</i>MongoDB & MySQL</span><span><i>✓</i>Customer & admin access</span><span><i>⚙</i>Orders & inventory</span></div><div class="project-actions"><button data-gallery="watch">View UI Gallery</button><button class="secondary" data-video>Watch Video</button></div></div></article>
          <article class="project-pro"><img src="learnhub-01.png" alt="LearnHub interface"><div class="project-pro-body"><div class="project-pro-title"><h3>LearnHub</h3><span class="project-type">E-Learning</span></div><p>A course marketplace experience with discoverable learning content, enrollment flow, and student progress features.</p><div class="project-details"><span><i>⌘</i>HTML, CSS & JavaScript</span><span><i>▣</i>Course marketplace</span><span><i>✓</i>Enrollment flow</span><span><i>⚙</i>Responsive UI</span></div><div class="project-actions"><button data-gallery="learnhub">View UI Gallery</button></div></div></article>
          <article class="project-pro"><img src="glowcart-01.png" alt="GlowCart interface"><div class="project-pro-body"><div class="project-pro-title"><h3>GlowCart</h3><span class="project-type">Cosmetics Store</span></div><p>A polished cosmetics shopping experience with product discovery, cart flow, order handling, and administrative controls.</p><div class="project-details"><span><i>⌘</i>E-Commerce UI</span><span><i>▣</i>Product discovery</span><span><i>✓</i>Shopping flow</span><span><i>⚙</i>Admin controls</span></div><div class="project-actions"><button data-gallery="glowcart">View UI Gallery</button></div></div></article>
          <article class="human-feature"><iframe class="human-video" src="https://www.youtube-nocookie.com/embed/7A3arj43a34" title="Human Value Project video" loading="lazy" allowfullscreen></iframe><div class="human-copy"><span class="project-type">Team Project</span><h3>Human Value Project</h3><p>An HNDIT team project at SLIATE, delivered through coordinated planning, task allocation, communication, and shared project delivery.</p><div class="project-details"><span><i>♙</i>Team leadership</span><span><i>✓</i>Project coordination</span><span><i>⌘</i>HNDIT programme</span><span><i>◉</i>Community value</span></div><div class="project-actions"><a href="https://youtu.be/7A3arj43a34?si=X-6luCmScF0_81kD" target="_blank" rel="noopener">Open YouTube Video</a><a class="secondary" href="https://m.facebook.com/story.php?story_fbid=pfbid0qYuMQPtPCBNisQXuYsQ4ZJUDcDqiYj9FcHaHNtYR4Hk1jWSSj3Z6kyBsFDgPPXxWl&id=100064206064013&mibextid=wwXIfr" target="_blank" rel="noopener">View Facebook Post</a></div></div></article>
        </div>
      </div>`;
  }

  if (cvSection) {
    cvSection.innerHTML = `<div class="wrap section-shell"><p class="eyebrow">Curriculum Vitae</p><h2>My CV / Resume</h2><div class="cv-panel"><iframe class="cv-preview" src="Fathima-Azra-CV.pdf#view=FitH" title="Fathima Azra CV preview"></iframe><div><h3>Professional CV</h3><p>View my CV directly in the portfolio or download a copy for recruitment, internship, and web development opportunities.</p><div class="project-actions"><a href="Fathima-Azra-CV.pdf" target="_blank">View CV</a><a class="secondary" href="Fathima-Azra-CV.pdf" download>Download CV</a></div></div></div></div>`;
  }

  const galleryDialog = document.createElement('dialog');
  galleryDialog.className = 'portfolio-gallery';
  galleryDialog.innerHTML = `
    <div class="portfolio-gallery-head"><strong id="portfolio-gallery-title">Project UI Gallery</strong><button class="portfolio-gallery-close" type="button" aria-label="Close gallery">&times;</button></div>
    <div class="portfolio-gallery-stage"><img id="portfolio-gallery-image" alt="Project interface screenshot"></div>
    <div class="portfolio-gallery-controls"><button type="button" id="portfolio-gallery-prev">Previous</button><span class="portfolio-gallery-count" id="portfolio-gallery-count"></span><button type="button" id="portfolio-gallery-next">Next</button></div>`;
  document.body.append(galleryDialog);

  const galleryImages = { watch:14, learnhub:9, glowcart:13 };
  const galleryImage = galleryDialog.querySelector('#portfolio-gallery-image');
  const galleryTitle = galleryDialog.querySelector('#portfolio-gallery-title');
  const galleryCount = galleryDialog.querySelector('#portfolio-gallery-count');
  const previous = galleryDialog.querySelector('#portfolio-gallery-prev');
  const next = galleryDialog.querySelector('#portfolio-gallery-next');
  let activeProject = '';
  let activeIndex = 0;

  function renderGallery() {
    const total = galleryImages[activeProject];
    galleryImage.src = `${activeProject}-${String(activeIndex + 1).padStart(2, '0')}.png`;
    galleryCount.textContent = `${activeIndex + 1} of ${total}`;
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === total - 1;
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('[data-gallery]');
    if (!button || !galleryImages[button.dataset.gallery]) return;
    activeProject = button.dataset.gallery;
    activeIndex = 0;
    galleryTitle.textContent = `${button.closest('article').querySelector('h3').textContent} - UI Screenshots`;
    renderGallery();
    galleryDialog.showModal();
  });

  previous.addEventListener('click', () => { if (activeIndex > 0) { activeIndex -= 1; renderGallery(); } });
  next.addEventListener('click', () => { if (activeIndex < galleryImages[activeProject] - 1) { activeIndex += 1; renderGallery(); } });
  galleryDialog.querySelector('.portfolio-gallery-close').addEventListener('click', () => galleryDialog.close());
  galleryDialog.addEventListener('click', event => { if (event.target === galleryDialog) galleryDialog.close(); });
  document.addEventListener('keydown', event => {
    if (!galleryDialog.open) return;
    if (event.key === 'ArrowLeft') previous.click();
    if (event.key === 'ArrowRight') next.click();
  });
});
