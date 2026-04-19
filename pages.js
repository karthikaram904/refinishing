/* ===========================
   REGRAIN STUDIO — pages.js
   Inner page scripts
   =========================== */

// ========================
// SERVICE DATA
// ========================
const serviceData = {
  colour: {
    tag: 'Colour Transformation',
    title: 'Colour <span class="text-accent">Transformation</span>',
    desc: 'Give any piece a dramatic new look with our expert colour consultation and application service.',
    price: '₹800',
    turnaround: '5–7 working days',
    warranty: '6 months',
    heroMeta: [
      { icon: 'fas fa-clock', text: '5–7 Days' },
      { icon: 'fas fa-star', text: 'Most Popular' },
      { icon: 'fas fa-leaf', text: 'Eco-Friendly Paints' }
    ],
    longDesc: `<p>Our Colour Transformation service is where most furniture journeys begin. You arrive with a piece that's structurally sound but visually tired — and you leave with a statement that turns heads.</p>
      <p style="margin-top:0.8rem;">Our colour consultant works with you through the client dashboard to build a palette, create digital mockups, and refine until the vision is exactly right. Only then do our painters touch the wood.</p>
      <p style="margin-top:0.8rem;">We use exclusively <strong>low-VOC, eco-certified paints</strong> — chalk finish, mineral, or lacquer depending on the look and use you need. Every piece receives proper preparation including sanding, de-greasing, and priming before a single stroke of colour is applied.</p>`,
    process: [
      { num: '01', title: 'Consultation & Mockup', desc: 'You share your vision; we translate it into 3 colour mockup options for you to approve through the dashboard.' },
      { num: '02', title: 'Surface Preparation', desc: 'We sand, clean, and prime every surface. Good prep is 70% of a great finish.' },
      { num: '03', title: 'Colour Application', desc: 'Multiple thin coats applied with professional spraying or brushing — no drips, no brush marks.' },
      { num: '04', title: 'Top Coat & Finishing', desc: 'A protective matte, satin, or gloss top coat is applied for durability and sheen.' },
      { num: '05', title: 'Quality Check & Delivery', desc: 'Final inspection, before-after photography, and careful delivery to your door.' }
    ],
    includes: ['3 colour mockup options', 'Full surface prep & prime', 'Professional paint application', 'Protective top coat', 'Hardware wipe-down', 'Before & after photos', '6-month warranty'],
    testimonials: [
      { stars: 5, text: 'My dresser looks like it was made yesterday — the sage green they mixed is exactly.', author: 'Priya K.', location: 'Chennai', initials: 'PK' },
      { stars: 5, text: 'The mockup was perfect and the real thing matched it completely. Extraordinary service.', author: 'Anand R.', location: 'Bangalore', initials: 'AR' }
    ],
    others: ['full-refinishing', 'structural', 'upholstery', 'premium']
  },
  refinish: {
    tag: 'Full Refinishing',
    title: 'Full <span class="text-accent">Refinishing</span>',
    desc: 'Complete strip-down and rebuild of your furniture surface. From bare wood to flawless finish.',
    price: '₹1,400',
    turnaround: '7–10 working days',
    warranty: '6 months',
    heroMeta: [
      { icon: 'fas fa-clock', text: '7–10 Days' },
      { icon: 'fas fa-tools', text: 'Full Strip & Rebuild' },
      { icon: 'fas fa-shield-alt', text: '6-Month Warranty' }
    ],
    longDesc: `<p>Full Refinishing is the complete reset. Every layer of old paint, varnish, or stain is removed — by chemical stripping or mechanical sanding — leaving bare, raw wood. From there, we rebuild a flawless surface from scratch.</p>
      <p style="margin-top:0.8rem;">This service is ideal for pieces with multiple old paint layers, damaged or cracked finishes, or furniture you want in a completely different style than its current state.</p>
      <p style="margin-top:0.8rem;">Unlike a simple colour change, full refinishing allows us to change the <strong>texture, depth, and character</strong> of the surface — from a rough-grain country feel to a mirror-smooth lacquer finish.</p>`,
    process: [
      { num: '01', title: 'Inspection & Quote', desc: 'We assess the current finish, wood type, and required prep work before confirming a price.' },
      { num: '02', title: 'Strip & Sand', desc: 'All existing finish is removed — chemically or by sanding — back to bare wood.' },
      { num: '03', title: 'Repair & Fill', desc: 'Any scratches, holes, or imperfections in the bare wood are filled and sanded smooth.' },
      { num: '04', title: 'Stain or Prime', desc: 'Depending on the desired finish — a stain for natural wood looks, or a primer for painted finishes.' },
      { num: '05', title: 'Finish & Protect', desc: 'Multiple coats of your chosen finish are applied, sanded between coats, and sealed.' }
    ],
    includes: ['Full strip to bare wood', '3 colour/finish mockups', 'Wood filler & crack repair', 'Stain or primer coat', 'Full finish application', 'Hardware refresh', 'Dashboard tracking', '6-month warranty'],
    testimonials: [
      { stars: 5, text: 'They stripped 50 years of varnish off my grandmother\'s dresser. The teak underneath is stunning.', author: 'Meena S.', location: 'Chennai', initials: 'MS' },
      { stars: 5, text: 'Completely transformed a battered sideboard. You\'d never know it was the same piece.', author: 'Karthik V.', location: 'Coimbatore', initials: 'KV' }
    ],
    others: ['colour', 'structural', 'upholstery', 'premium']
  },
  structural: {
    tag: 'Structural Restoration',
    title: 'Structural <span class="text-accent">Restoration</span>',
    desc: 'Fix the bones first. Joints, veneers, drawers, and frames — fully repaired before any refinishing begins.',
    price: '₹600',
    turnaround: '7–12 working days',
    warranty: '24 months',
    heroMeta: [
      { icon: 'fas fa-hammer', text: 'Full Carpentry' },
      { icon: 'fas fa-clock', text: '7–12 Days' },
      { icon: 'fas fa-shield-alt', text: '24-Month Warranty' }
    ],
    longDesc: `<p>Great finishing starts with great structure. Our structural restoration service addresses everything underneath the surface — the joints, the frames, the veneers, the drawers, and the hardware mechanisms that make furniture functional.</p>
      <p style="margin-top:0.8rem;">Structural work is often done as a precursor to refinishing, but can also be carried out independently if your piece simply needs mechanical repair without a visual change.</p>
      <p style="margin-top:0.8rem;">Our carpenter Senthil Kumar has over 15 years of joinery experience and takes pride in making repairs that are both <strong>structurally invisible and long-lasting</strong>. We use traditional woodworking techniques — proper mortise-and-tenon re-gluing, hand-cut veneers, and solid wood patching — not fillers and shortcuts.</p>`,
    process: [
      { num: '01', title: 'Structural Inspection', desc: 'Every joint, surface, and mechanical component is assessed and photographed.' },
      { num: '02', title: 'Disassembly', desc: 'Where needed, the piece is carefully disassembled to access joints and hidden damage.' },
      { num: '03', title: 'Repair', desc: 'Joints re-glued, veneers patched, frames reinforced, drawers rebuilt, runners replaced.' },
      { num: '04', title: 'Reassembly & Test', desc: 'The piece is put back together and rigorously tested for stability and function.' },
      { num: '05', title: 'Optional Refinishing', desc: 'Structural work can be combined with any refinishing package for a complete transformation.' }
    ],
    includes: ['Full structural inspection', 'Joint re-gluing & clamping', 'Veneer patching or replacement', 'Drawer & runner repair', 'Frame realignment', 'Hardware mechanism servicing', 'Structural photo documentation', '24-month structural warranty'],
    testimonials: [
      { stars: 5, text: 'My 1960s teak sideboard had 3 broken joints and a split top. Came back rock solid.', author: 'Ravi M.', location: 'Chennai', initials: 'RM' },
      { stars: 5, text: 'They fixed 6 dining chairs that were all wobbly and misaligned. Perfect now.', author: 'Lakshmi P.', location: 'Madurai', initials: 'LP' }
    ],
    others: ['colour', 'refinish', 'upholstery', 'premium']
  },
  upholstery: {
    tag: 'Upholstery Revival',
    title: 'Upholstery <span class="text-accent">Revival</span>',
    desc: 'Fabric, foam, piping, and tufting — complete upholstery service by our specialist Divya Rajan.',
    price: '₹1,200',
    turnaround: '7–10 working days',
    warranty: '6 months',
    heroMeta: [
      { icon: 'fas fa-couch', text: 'All Padded Furniture' },
      { icon: 'fas fa-clock', text: '7–10 Days' },
      { icon: 'fas fa-th', text: 'Custom Fabric Sourcing' }
    ],
    longDesc: `<p>Upholstery is where comfort meets design. Our specialist Divya Rajan has been transforming padded furniture for over a decade — from simple chair seat recovers to full button-tufted chesterfield re-covers in bespoke fabrics.</p>
      <p style="margin-top:0.8rem;">We source fabric from trusted suppliers across India — velvet, linen, bouclé, leather, rattan — or work with fabric you provide. Every piece of foam and padding is assessed and replaced if needed, not just covered over.</p>
      <p style="margin-top:0.8rem;">Upholstery is frequently combined with our refinishing services to create a fully coordinated look where <strong>frame and fabric tell a single, coherent story</strong>.</p>`,
    process: [
      { num: '01', title: 'Fabric Consultation', desc: 'You choose from our curated fabric library, or we source to your specification.' },
      { num: '02', title: 'Disassembly', desc: 'All old fabric, foam, and webbing is removed. The frame is inspected and repaired if needed.' },
      { num: '03', title: 'Foam & Padding', desc: 'New high-density foam is cut and fitted. Springs and webbing are replaced or reinforced.' },
      { num: '04', title: 'Fabric Application', desc: 'Fabric is cut, fitted, and hand-stitched or stapled. Piping, buttons, or tufting added as required.' },
      { num: '05', title: 'Finishing', desc: 'All seams inspected, trimming applied, and the completed piece photographed.' }
    ],
    includes: ['Fabric consultation & selection', 'Old fabric & foam removal', 'New foam & padding', 'Professional fabric fitting', 'Piping & trim options', 'Button tufting available', 'Custom fabric sourcing', '6-month workmanship warranty'],
    testimonials: [
      { stars: 5, text: 'My grandmother\'s armchair now has deep emerald velvet. It\'s the centrepiece of our living room.', author: 'Sara L.', location: 'Mumbai', initials: 'SL' },
      { stars: 5, text: '4 dining chairs re-covered in navy linen with piping. Looks completely bespoke.', author: 'Deepa N.', location: 'Chennai', initials: 'DN' }
    ],
    others: ['colour', 'refinish', 'structural', 'premium']
  },
  premium: {
    tag: 'Premium Restoration',
    title: 'Premium <span class="text-accent">Restoration</span>',
    desc: 'The complete package — structural, refinishing, upholstery, priority service, and free pickup & delivery.',
    price: '₹3,500',
    turnaround: '5–7 working days (priority)',
    warranty: '12 months',
    heroMeta: [
      { icon: 'fas fa-crown', text: 'White-Glove Service' },
      { icon: 'fas fa-clock', text: '5–7 Days (Priority)' },
      { icon: 'fas fa-truck', text: 'Free Pickup & Delivery' }
    ],
    longDesc: `<p>Premium Restoration is for pieces that deserve the absolute best. It's the complete package — every service we offer, combined, with dedicated project management, unlimited mockup revisions, and priority queue placement.</p>
      <p style="margin-top:0.8rem;">A dedicated project lead oversees every stage of your piece's transformation and communicates with you directly through the dashboard. You'll see progress photos at each stage and have unlimited opportunity to provide feedback before we proceed.</p>
      <p style="margin-top:0.8rem;">Premium projects receive free home collection and white-glove delivery anywhere within Chennai, and a full 12-month warranty on all workmanship. For heirlooms, antiques, or statement pieces, <strong>this is the service we're most proud of</strong>.</p>`,
    process: [
      { num: '01', title: 'Home Collection', desc: 'We collect the piece from your home. No need to arrange transport.' },
      { num: '02', title: 'Full Assessment', desc: 'Comprehensive inspection — structural, surface, upholstery — with a detailed photo report.' },
      { num: '03', title: 'Structural Work', desc: 'All repairs and reinforcements completed before surface work begins.' },
      { num: '04', title: 'Refinishing', desc: 'Full strip (if needed) and rebuild of the surface finish. Unlimited mockup rounds.' },
      { num: '05', title: 'Upholstery', desc: 'If applicable — complete re-upholstery with your chosen fabric.' },
      { num: '06', title: 'White-Glove Delivery', desc: 'Wrapped, transported carefully, and placed in position in your home.' }
    ],
    includes: ['Free home pickup & delivery', 'Full structural restoration', 'Complete refinishing', 'Upholstery (if applicable)', 'Unlimited mockup revisions', 'Dedicated project manager', 'Priority 5–7 day turnaround', 'Dashboard with photo updates', '12-month full warranty'],
    testimonials: [
      { stars: 5, text: 'They collected, restored, and delivered a 1930s dresser. It\'s genuinely the most beautiful thing in our home.', author: 'Priya K.', location: 'Chennai', initials: 'PK' },
      { stars: 5, text: 'Worth every rupee. The unlimited mockup rounds meant it was exactly right before they even started.', author: 'Vijay S.', location: 'Chennai', initials: 'VS' }
    ],
    others: ['colour', 'refinish', 'structural', 'upholstery']
  }
};

const serviceNames = {
  colour: 'Colour Transformation',
  refinish: 'Full Refinishing',
  structural: 'Structural Restoration',
  upholstery: 'Upholstery Revival',
  premium: 'Premium Restoration'
};

// ========================
// SERVICE DETAIL INIT
// ========================
function initServiceDetail() {
  const params = new URLSearchParams(window.location.search);
  const key = params.get('s') || 'colour';
  const data = serviceData[key] || serviceData.colour;

  // Breadcrumb & title
  document.getElementById('sdBreadcrumb').textContent = serviceNames[key] || 'Service';
  document.getElementById('sdTag').textContent = data.tag;
  document.getElementById('sdTitle').innerHTML = data.title;
  document.getElementById('sdDesc').textContent = data.desc;
  document.getElementById('sdPrice').textContent = data.price;
  document.getElementById('sdTurnaround').textContent = data.turnaround;
  document.getElementById('sdWarranty').textContent = data.warranty;

  // Hero meta
  const metaEl = document.getElementById('sdMeta');
  metaEl.innerHTML = data.heroMeta.map(m => `<span><i class="${m.icon}"></i> ${m.text}</span>`).join('');

  // Description
  document.getElementById('sdDescText').innerHTML = data.longDesc;

  // Process
  const procList = document.getElementById('sdProcessList');
  procList.innerHTML = data.process.map(p => `
    <div class="sd-process-item">
      <div class="sd-step-num">${p.num}</div>
      <div><h6>${p.title}</h6><p>${p.desc}</p></div>
    </div>`).join('');

  // Includes
  const incList = document.getElementById('sdIncludesList');
  incList.innerHTML = data.includes.map(i => `<li><i class="fas fa-check-circle"></i> ${i}</li>`).join('');

  // Testimonials
  const testEl = document.getElementById('sdTestimonials');
  testEl.innerHTML = data.testimonials.map(t => `
    <div class="col-md-6">
      <div class="sd-testimonial-card">
        <div class="stars">${'★'.repeat(t.stars)}</div>
        <p>"${t.text}"</p>
        <div class="sd-tc-author">
          <div class="sd-tc-avatar">${t.initials}</div>
          <div><strong>${t.author}</strong><span>${t.location}</span></div>
        </div>
      </div>
    </div>`).join('');

  // Other services
  const othersEl = document.getElementById('sdOtherServices');
  othersEl.innerHTML = data.others.map(k => `
    <a href="service-detail.html?s=${k}" class="sd-other-link">
      ${serviceNames[k]} <i class="fas fa-arrow-right"></i>
    </a>`).join('');

  // Related tags
  document.querySelectorAll('[id^="relTag"]').forEach(el => { el.textContent = data.tag; });

  // BA Slider
  const range = document.getElementById('baRange');
  const afterOverlay = document.querySelector('.sd-after-overlay');
  if (range && afterOverlay) {
    range.addEventListener('input', function() {
      afterOverlay.style.width = this.value + '%';
    });
  }
}

// ========================
// PRICING TOGGLE
// ========================
function initPricingToggle() {
  const toggleBtns = document.querySelectorAll('.pt-btn');
  const priceEls = document.querySelectorAll('.pc-num');
  if (!toggleBtns.length) return;

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;
      priceEls.forEach(el => {
        const val = parseInt(mode === 'multi' ? el.dataset.multi : el.dataset.single);
        el.textContent = '₹' + val.toLocaleString('en-IN');
      });
    });
  });
}

// ========================
// CONTACT FORM
// ========================
function initContactForm() {
  const tabs = document.querySelectorAll('.ctt-btn');
  const dynamicLabel = document.getElementById('dynamicLabel');
  const dynamicSelect = document.getElementById('dynamicSelect');
  const furnitureField = document.getElementById('furnitureField');
  const visitField = document.getElementById('visitField');
  if (!tabs.length) return;

  const typeOptions = {
    general: { label: 'Subject', opts: ['General Question','Service Enquiry','Pricing Information','Feedback','Partnership'] },
    quote: { label: 'Furniture Type', opts: ['Chair / Stool','Coffee Table','Dining Table','Dresser / Chest','Wardrobe / Cabinet','Other'] },
    visit: { label: 'Preferred Time', opts: ['Morning (9–12)','Afternoon (12–4)','Evening (4–7)'] }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const type = tab.dataset.type;
      const cfg = typeOptions[type];
      if (dynamicLabel) dynamicLabel.textContent = cfg.label;
      if (dynamicSelect) dynamicSelect.innerHTML = cfg.opts.map(o => `<option>${o}</option>`).join('');
      if (furnitureField) furnitureField.style.display = type === 'quote' ? '' : 'none';
      if (visitField) visitField.style.display = type === 'visit' ? '' : 'none';
    });
  });

  // Submit
  const submitBtn = document.getElementById('contactSubmitBtn');
  const formBody = document.getElementById('contactFormBody');
  const successEl = document.getElementById('contactSuccess');
  const resetBtn = document.getElementById('contactReset');

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const btnText = document.getElementById('contactBtnText');
      btnText.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Sending...';
      submitBtn.disabled = true;
      setTimeout(() => {
        if (formBody) formBody.style.display = 'none';
        if (successEl) successEl.style.display = '';
      }, 1400);
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (formBody) formBody.style.display = '';
      if (successEl) successEl.style.display = 'none';
      if (submitBtn) { submitBtn.disabled = false; document.getElementById('contactBtnText').innerHTML = 'Send Message <i class="fas fa-paper-plane ms-2"></i>'; }
    });
  }
}

// ========================
// PRICING CALCULATOR (extended)
// ========================
function initPricingCalcExtended() {
  const condSelect = document.getElementById('conditionSelect');
  if (!condSelect) return;
  const calcPriceEl = document.getElementById('calcPrice');
  function calc() {
    const base = parseFloat(document.getElementById('furnitureType')?.value || 0);
    const mult = parseFloat(document.getElementById('serviceType')?.value || 1);
    const finish = parseFloat(document.getElementById('finishType')?.value || 0);
    const cond = parseFloat(condSelect.value || 0);
    const total = base > 0 ? Math.round((base * mult) + finish + cond) : 0;
    if (calcPriceEl) calcPriceEl.textContent = total > 0 ? '₹' + total.toLocaleString('en-IN') : '₹0';
  }
  ['furnitureType','serviceType','finishType'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', calc);
  });
  condSelect.addEventListener('change', calc);
}

// ========================
// FAQ ACCORDION
// ========================
function initFAQ() {
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.dataset.open === 'true';
      // Close all
      document.querySelectorAll('.faq-btn').forEach(b => {
        b.dataset.open = 'false';
        b.nextElementSibling?.classList.remove('open');
      });
      // Toggle clicked
      if (!isOpen) {
        btn.dataset.open = 'true';
        btn.nextElementSibling?.classList.add('open');
      }
    });
  });
}

// ========================
// PORTFOLIO FILTER (pages)
// ========================
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');
  if (!filterBtns.length) return;
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        const show = filter === 'all' || item.dataset.cat === filter;
        item.style.display = show ? '' : 'none';
        if (show) { item.style.opacity = '0'; item.style.transform = 'translateY(12px)'; requestAnimationFrame(() => { item.style.transition = 'opacity 0.3s, transform 0.3s'; item.style.opacity = '1'; item.style.transform = 'translateY(0)'; }); }
      });
    });
  });

  // Load more
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      loadMoreBtn.innerHTML = '<i class="fas fa-check me-2"></i> All projects loaded';
      loadMoreBtn.disabled = true;
    });
  }
}

// ========================
// INIT ALL
// ========================
document.addEventListener('DOMContentLoaded', () => {
  initServiceDetail();
  initPricingToggle();
  initContactForm();
  initPricingCalcExtended();
  initFAQ();
  initPortfolioFilter();
});
