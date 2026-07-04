/* =====================================================================
   P2W COMMERCE — Shared components & catalog data
   ใช้ร่วมกันทุกหน้า (หน้าแรก + หน้าหมวดสินค้า)
   แก้ข้อมูลร้าน/สินค้าได้ที่ไฟล์นี้ไฟล์เดียว
   ===================================================================== */

const SITE = {
  brandTop: 'Infinis Foods',
  brandSub: 'BY P2W INTERPLUS',
  company: 'P2W INTERPLUS CO., LTD.',
  phone: '088-788-8364',
  email: 'p2w.interplus@gmail.com',
  address: '49/306 ซ.นิมิตใหม่ 40 ถ.นิมิตใหม่ แขวงสามวาตะวันออก เขตคลองสามวา กรุงเทพฯ 10510',
  line: 'https://lin.ee/wnizCXu',
  lineName: 'Line Official',
  categories: [
    { slug: 'frozen',     label: 'อาหารแช่แข็ง', en: 'FROZEN FOOD',     icon: 'snowflake',   desc: 'เนื้อสัตว์ อาหารทะเล และวัตถุดิบแช่แข็งคุณภาพ เก็บความสดได้ยาวนาน พร้อมปรุง' },
    { slug: 'bakery',     label: 'ขนม เค้ก เบเกอรี่', en: 'BAKERY & SWEETS', icon: 'cake',    desc: 'ขนม เค้ก เบเกอรี่ และอาหารแปรรูป อบสดใหม่ คัดวัตถุดิบอย่างดี' },
    { slug: 'pet',        label: 'อาหารสัตว์',   en: 'PET FOOD & CARE', icon: 'bone',        desc: 'อาหารและของใช้สำหรับสัตว์เลี้ยง ดูแลน้อง ๆ อย่างครบครัน' },
    { slug: 'general',    label: 'สินค้าทั่วไป', en: 'GENERAL GOODS',   icon: 'package',     desc: 'ของใช้ในบ้านและไลฟ์สไตล์ คุณภาพดี ราคาคุ้มค่า' },
    { slug: 'secondhand', label: 'สินค้ามือสอง', en: 'SECOND-HAND',     icon: 'recycle',     desc: 'สินค้ามือสองสภาพดี คัดคุณภาพ ระบุสภาพชัดเจนทุกชิ้น' },
  ],
};

/* ธีมสีของแต่ละหมวด (ใช้ class เต็มเพื่อให้ Tailwind สร้าง style ได้ถูกต้อง) */
const THEMES = {
  frozen:     { text: 'text-sky-600',     bg: 'bg-sky-600',     hover: 'hover:bg-sky-700',     soft: 'bg-sky-50',     softText: 'text-sky-700',     border: 'border-sky-100',    grad: 'from-sky-600 to-blue-500',        icon: 'snowflake' },
  bakery:     { text: 'text-orange-600',  bg: 'bg-orange-500',  hover: 'hover:bg-orange-600',  soft: 'bg-orange-50',  softText: 'text-orange-700',  border: 'border-orange-100', grad: 'from-orange-500 to-amber-500',    icon: 'cake' },
  pet:        { text: 'text-emerald-600', bg: 'bg-emerald-600', hover: 'hover:bg-emerald-700', soft: 'bg-emerald-50', softText: 'text-emerald-700', border: 'border-emerald-100',grad: 'from-emerald-600 to-teal-500',    icon: 'bone' },
  general:    { text: 'text-indigo-600',  bg: 'bg-indigo-600',  hover: 'hover:bg-indigo-700',  soft: 'bg-indigo-50',  softText: 'text-indigo-700',  border: 'border-indigo-100', grad: 'from-indigo-600 to-violet-500',   icon: 'package' },
  secondhand: { text: 'text-amber-600',   bg: 'bg-amber-500',   hover: 'hover:bg-amber-600',   soft: 'bg-amber-50',   softText: 'text-amber-700',   border: 'border-amber-200',  grad: 'from-amber-500 to-yellow-500',    icon: 'recycle' },
};

/* รูปตัวอย่าง (placeholder) — แทนด้วยรูปสินค้าจริงภายหลัง */
const ph = (t) => `https://placehold.co/500x500/f1f5f9/64748b?text=${t}`;

/* ข้อมูลสินค้าแต่ละหมวด — แก้ชื่อ/ราคา/รหัส/รูป ได้ที่นี่ */
const PRODUCTS = {
  frozen: [
    { code: 'FZ-001', name: 'เนื้อวากิว A4 สไลซ์พรีเมียม (แพ็ค 250g)', desc: 'เหมาะสำหรับชาบูและปิ้งย่าง ลายหินอ่อนสวยงาม', price: '890', img: ph('Wagyu+A4') },
    { code: 'FZ-002', name: 'ปลาแซลมอนนอร์เวย์ หั่นชิ้นแช่แข็ง (500g)', desc: 'สดใหม่ แพ็คสุญญากาศอย่างดี รักษารสชาติ', price: '450', img: ph('Salmon') },
    { code: 'FZ-003', name: 'กุ้งขาวแกะเปลือกแช่แข็ง (500g)', desc: 'เนื้อแน่น สะอาด พร้อมปรุงได้ทันที', price: '320', img: ph('Shrimp') },
    { code: 'FZ-004', name: 'ไก่บ้านตัดแต่งแช่แข็ง (1kg)', desc: 'คัดคุณภาพ สะอาด แช่แข็งรักษาความสด', price: '180', img: ph('Chicken') },
  ],
  bakery: [
    { code: 'BK-015', name: 'ดาร์กช็อกโกแลตบราวนี่พรีเมียม (กล่อง 6 ชิ้น)', desc: 'เนื้อหนึบ เข้มข้น หวานน้อย อร่อยเต็มคำ', price: '280', img: ph('Brownie') },
    { code: 'BK-022', name: 'ครัวซองต์เนยสดฝรั่งเศส (แพ็ค 4 ชิ้น)', desc: 'หอมเนยแท้ กรอบนอกนุ่มใน อบใหม่ทุกวัน', price: '320', img: ph('Croissant') },
    { code: 'BK-031', name: 'เค้กส้มโฮมเมด (1 ปอนด์)', desc: 'เนื้อนุ่ม หอมส้มแท้ ไม่แต่งกลิ่นสังเคราะห์', price: '350', img: ph('Orange+Cake') },
    { code: 'BK-040', name: 'คุกกี้ธัญพืชอบใหม่ (กระปุก)', desc: 'กรอบ อร่อย มีธัญพืชเต็มคำ ทานเพลิน', price: '150', img: ph('Cookies') },
  ],
  pet: [
    { code: 'PT-008', name: 'อาหารสุนัขสูตร Grain Free (กระสอบ 10kg)', desc: 'โปรตีนสูง สำหรับสุนัขโต บำรุงกระดูกและข้อต่อ', price: '1,250', img: ph('Dog+Food') },
    { code: 'PT-012', name: 'ขนมแมวเลีย รสทูน่าผสมแซลมอน (แพ็ค 20 ซอง)', desc: 'อร่อย ทานง่าย บำรุงขนให้นุ่มสลวย', price: '150', img: ph('Cat+Snack') },
    { code: 'PT-018', name: 'ทรายแมวภูเขาไฟ จับตัวเป็นก้อน (10L)', desc: 'ดูดซับดี เก็บกลิ่นเยี่ยม ฝุ่นน้อย', price: '290', img: ph('Cat+Litter') },
    { code: 'PT-021', name: 'อาหารเปียกสุนัขพรีเมียม (แพ็ค 12 กระป๋อง)', desc: 'เนื้อแน่น คุณค่าครบ น้องทานง่าย', price: '360', img: ph('Wet+Food') },
  ],
  general: [
    { code: 'GN-104', name: 'แก้วเก็บความเย็น สแตนเลส 304 (30oz)', desc: 'เก็บความเย็นได้นานกว่า 12 ชม. ไม่มีหยดน้ำเกาะ', price: '390', img: ph('Tumbler') },
    { code: 'GN-112', name: 'กระดาษทิชชู่เช็ดหน้า หนา 3 ชั้น (แพ็ค 5 ห่อ)', desc: 'นุ่ม อ่อนโยน ไม่เป็นขุย ปลอดภัยต่อผิว', price: '85', img: ph('Facial+Tissue') },
    { code: 'GN-120', name: 'กล่องเก็บของอเนกประสงค์ฝาล็อก (20L)', desc: 'แข็งแรง ซ้อนได้ จัดบ้านเป็นระเบียบ', price: '250', img: ph('Storage+Box') },
    { code: 'GN-131', name: 'โคมไฟ LED ตั้งโต๊ะถนอมสายตา ปรับแสงได้', desc: 'แสงนวลสบายตา ปรับได้ 3 ระดับ ประหยัดไฟ', price: '450', img: ph('LED+Lamp') },
  ],
  secondhand: [
    { code: 'SH-003', name: 'กล้องดิจิตอลวินเทจ (สภาพ 90%)', desc: 'ใช้งานได้ปกติ มีรอยตามการใช้งาน พร้อมแบตเตอรี่', price: '2,500', img: ph('Camera'), used: true },
    { code: 'SH-018', name: 'เก้าอี้สำนักงานเพื่อสุขภาพ (สภาพ 85%)', desc: 'เบาะแน่น ขาเหล็กแข็งแรง ปรับระดับได้ปกติ', price: '900', img: ph('Office+Chair'), used: true },
    { code: 'SH-025', name: 'จักรยานพับได้ 20 นิ้ว (สภาพ 80%)', desc: 'พับเก็บง่าย เกียร์ทำงานปกติ เหมาะปั่นในเมือง', price: '2,200', img: ph('Folding+Bike'), used: true },
    { code: 'SH-032', name: 'ลำโพงบลูทูธพกพา (สภาพ 90%)', desc: 'เสียงดี แบตอึด เชื่อมต่อไว พร้อมสายชาร์จ', price: '650', img: ph('BT+Speaker'), used: true },
  ],
};

/* ---------- ค่าคงที่ ---------- */
const LINE_GREEN = 'bg-[#06C755] hover:bg-[#05b34c]';

/* ---------- ตัวช่วยสร้าง HTML ---------- */
function catHref(base, slug) { return `${base}${slug}/`; }

function lineBtn(extra, label) {
  return `<a href="${SITE.line}" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 ${LINE_GREEN} text-white font-semibold rounded-full transition-colors ${extra}">
    <i data-lucide="message-circle" class="w-5 h-5"></i><span>${label}</span></a>`;
}

function headerHTML(base, active) {
  const homeHref = base === '' ? '#top' : base;
  const howHref  = base === '' ? '#how-to-order' : `${base}#how-to-order`;
  const isHome   = active === null;

  const navItem = (href, label, on) =>
    `<a href="${href}" class="text-sm transition-colors ${on ? 'font-semibold text-slate-900' : 'text-slate-600 hover:text-slate-900'}">${label}</a>`;

  const catLinks = SITE.categories.map(c =>
    navItem(catHref(base, c.slug), c.label, c.slug === active)).join('');

  const mobileLinks = [
    `<a href="${homeHref}" class="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-700"><i data-lucide="home" class="w-4 h-4"></i>หน้าแรก</a>`,
    ...SITE.categories.map(c => {
      const t = THEMES[c.slug];
      return `<a href="${catHref(base, c.slug)}" class="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-slate-100 ${c.slug === active ? 'font-semibold text-slate-900' : 'text-slate-700'}"><span class="w-7 h-7 rounded-lg ${t.soft} ${t.text} flex items-center justify-center"><i data-lucide="${c.icon}" class="w-4 h-4"></i></span>${c.label}</a>`;
    }),
    `<a href="${howHref}" class="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-slate-100 text-slate-700"><i data-lucide="list-checks" class="w-4 h-4"></i>วิธีสั่งซื้อ</a>`,
  ].join('');

  return `
  <!-- แถบข้อมูลด้านบน -->
  <div class="hidden sm:block bg-slate-900 text-slate-300 text-xs">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 h-9 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <span class="inline-flex items-center gap-1.5"><i data-lucide="phone" class="w-3.5 h-3.5"></i>${SITE.phone}</span>
        <span class="inline-flex items-center gap-1.5 text-emerald-400"><i data-lucide="badge-check" class="w-3.5 h-3.5"></i>ร้านค้าอย่างเป็นทางการ</span>
        <span class="hidden md:inline-flex items-center gap-1.5"><i data-lucide="truck" class="w-3.5 h-3.5"></i>จัดส่งทั่วประเทศ</span>
      </div>
      <a href="${SITE.line}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 hover:text-white transition-colors"><i data-lucide="message-circle" class="w-3.5 h-3.5"></i>LINE OA พร้อมตอบ</a>
    </div>
  </div>

  <!-- แถบหลัก -->
  <div class="bg-white/95 backdrop-blur border-b border-slate-200">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 h-16 md:h-[68px] flex items-center justify-between gap-4">
      <a href="${homeHref}" class="flex items-center gap-3 shrink-0">
        <img src="${base}assets/infinis-mark.png" alt="Infinis Foods" class="h-10 md:h-11 w-auto">
        <span class="flex flex-col leading-none border-l border-slate-200 pl-3">
          <span class="text-base md:text-lg font-bold tracking-wide text-slate-900">${SITE.brandTop}</span>
          <span class="hidden sm:block text-[10px] text-slate-400 tracking-wider mt-1">ร้านค้าออนไลน์อย่างเป็นทางการ</span>
        </span>
      </a>

      <nav class="hidden lg:flex items-center gap-6">
        <a href="${homeHref}" class="inline-flex items-center gap-1.5 text-sm transition-colors ${isHome ? 'font-semibold text-slate-900' : 'text-slate-600 hover:text-slate-900'}"><i data-lucide="home" class="w-4 h-4"></i>หน้าแรก</a>
        ${catLinks}
        ${navItem(howHref, 'วิธีสั่งซื้อ', false)}
      </nav>

      <div class="flex items-center gap-2">
        ${lineBtn('hidden sm:inline-flex px-5 py-2.5 text-sm shadow-sm', 'แอด LINE')}
        <button id="px-burger" aria-label="เมนู" class="lg:hidden w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100"><i data-lucide="menu" class="w-5 h-5"></i></button>
      </div>
    </div>

    <!-- เมนูมือถือ -->
    <div id="px-mobile" class="lg:hidden hidden border-t border-slate-200 bg-white">
      <div class="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
        ${mobileLinks}
        <div class="pt-2">${lineBtn('w-full py-3', 'แอด LINE สั่งซื้อ')}</div>
      </div>
    </div>
  </div>`;
}

function footerHTML(base) {
  const homeHref = base === '' ? '#top' : base;
  const catLinks = SITE.categories.map(c =>
    `<a href="${catHref(base, c.slug)}" class="block text-slate-400 hover:text-white transition-colors">${c.label}</a>`).join('');

  return `
  <div class="bg-slate-900 text-slate-300">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
      <div class="md:col-span-1">
        <a href="${homeHref}" class="flex items-center gap-3 mb-4">
          <img src="${base}assets/infinis-mark.png" alt="Infinis Foods" class="h-10 w-auto">
          <span class="flex flex-col leading-none border-l border-white/20 pl-3">
            <span class="text-lg font-bold tracking-wide text-white">${SITE.brandTop}</span>
            <span class="text-[10px] text-slate-400 tracking-wider mt-1">${SITE.brandSub}</span>
          </span>
        </a>
        <p class="text-sm text-slate-400 leading-relaxed mb-4">ร้านค้าออนไลน์อย่างเป็นทางการของ ${SITE.company} รวมสินค้าคุณภาพหลากหมวด สั่งง่ายผ่าน LINE จัดส่งทั่วประเทศ</p>
        ${lineBtn('px-5 py-2.5 text-sm', 'แอด LINE สั่งซื้อ')}
      </div>

      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-wide">หมวดสินค้า</h4>
        <div class="space-y-2.5 text-sm">${catLinks}</div>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-wide">ติดต่อเรา</h4>
        <ul class="space-y-3 text-sm text-slate-400">
          <li class="flex items-start gap-2"><i data-lucide="phone" class="w-4 h-4 mt-0.5 shrink-0"></i><span>${SITE.phone}</span></li>
          <li class="flex items-start gap-2"><i data-lucide="mail" class="w-4 h-4 mt-0.5 shrink-0"></i><span>${SITE.email}</span></li>
          <li class="flex items-start gap-2"><i data-lucide="message-circle" class="w-4 h-4 mt-0.5 shrink-0"></i><a href="${SITE.line}" target="_blank" rel="noopener" class="hover:text-white transition-colors">${SITE.lineName}</a></li>
          <li class="flex items-start gap-2"><i data-lucide="map-pin" class="w-4 h-4 mt-0.5 shrink-0"></i><span>${SITE.address}</span></li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-wide">บริการของเรา</h4>
        <ul class="space-y-3 text-sm text-slate-400">
          <li class="flex items-center gap-2"><i data-lucide="badge-check" class="w-4 h-4 text-emerald-400"></i>ร้านค้าอย่างเป็นทางการ</li>
          <li class="flex items-center gap-2"><i data-lucide="truck" class="w-4 h-4 text-emerald-400"></i>จัดส่งทั่วประเทศ</li>
          <li class="flex items-center gap-2"><i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i>ชำระเงินปลอดภัย</li>
          <li class="flex items-center gap-2"><i data-lucide="headset" class="w-4 h-4 text-emerald-400"></i>แอดมินตอบไว</li>
        </ul>
      </div>
    </div>

    <div class="border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <p>&copy; 2026 ${SITE.company} สงวนลิขสิทธิ์</p>
        <p class="text-slate-400">${SITE.brandTop}</p>
      </div>
    </div>
  </div>`;
}

function categoryCard(c, base) {
  const t = THEMES[c.slug];
  return `
  <a href="${catHref(base, c.slug)}" class="group block bg-white rounded-2xl border ${t.border} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
    <div class="h-1.5 bg-gradient-to-r ${t.grad}"></div>
    <div class="p-6">
      <div class="w-14 h-14 rounded-2xl ${t.soft} ${t.text} flex items-center justify-center mb-4"><i data-lucide="${c.icon}" class="w-7 h-7"></i></div>
      <h3 class="text-lg font-bold text-slate-900">${c.label}</h3>
      <p class="text-[11px] font-semibold ${t.text} tracking-widest mb-2">${c.en}</p>
      <p class="text-sm text-slate-500 leading-relaxed">${c.desc}</p>
      <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${t.text}">ดูสินค้าในหมวดนี้ <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover:translate-x-1"></i></span>
    </div>
  </a>`;
}

function productCard(p, t) {
  const badge = p.used
    ? `<span class="absolute top-3 right-3 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded tracking-wide">USED</span>` : '';
  return `
  <div class="group bg-white rounded-2xl border ${t.border} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1">
    <div class="relative aspect-square overflow-hidden bg-slate-100">
      <span class="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur ${t.softText} text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm border ${t.border}">${p.code}</span>
      ${badge}
      <img src="${p.img}" alt="${p.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
    </div>
    <div class="p-4 flex flex-col flex-grow">
      <h3 class="font-semibold text-slate-900 text-sm md:text-base leading-snug line-clamp-2">${p.name}</h3>
      <p class="text-xs text-slate-500 mt-1 line-clamp-2 flex-grow">${p.desc}</p>
      <div class="mt-3 pt-3 flex items-center justify-between border-t border-slate-100">
        <span class="text-slate-900 font-bold text-lg">฿${p.price}</span>
        <a href="${SITE.line}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 ${LINE_GREEN} text-white text-xs font-semibold pl-2.5 pr-3 py-2 rounded-full transition-colors shadow-sm" title="สั่งซื้อผ่าน LINE"><i data-lucide="message-circle" class="w-4 h-4"></i>สั่งซื้อ</a>
      </div>
    </div>
  </div>`;
}

function otherCategoryChip(c, base) {
  const t = THEMES[c.slug];
  return `
  <a href="${catHref(base, c.slug)}" class="inline-flex items-center gap-2 bg-white border ${t.border} rounded-full pl-2 pr-4 py-2 shadow-sm hover:shadow-md transition-all">
    <span class="w-8 h-8 rounded-full ${t.soft} ${t.text} flex items-center justify-center"><i data-lucide="${c.icon}" class="w-4 h-4"></i></span>
    <span class="text-sm font-medium text-slate-700">${c.label}</span>
  </a>`;
}

/* ---------- API ---------- */
const PxSite = {
  base: '',
  active: null,

  init(opts) {
    opts = opts || {};
    this.base = opts.base || '';
    this.active = (opts.active === undefined) ? null : opts.active;
    const h = document.getElementById('site-header');
    const f = document.getElementById('site-footer');
    if (h) h.innerHTML = headerHTML(this.base, this.active);
    if (f) f.innerHTML = footerHTML(this.base);
    this._bindMobile();
    this._icons();
  },

  renderCategories(id) {
    const el = document.getElementById(id || 'category-grid');
    if (!el) return;
    el.innerHTML = SITE.categories.map(c => categoryCard(c, this.base)).join('');
    this._icons();
  },

  renderProducts(slug, id) {
    const el = document.getElementById(id || 'product-grid');
    if (!el) return;
    el.innerHTML = (PRODUCTS[slug] || []).map(p => productCard(p, THEMES[slug])).join('');
    this._icons();
  },

  renderOtherCategories(currentSlug, id) {
    const el = document.getElementById(id || 'other-cats');
    if (!el) return;
    el.innerHTML = SITE.categories.filter(c => c.slug !== currentSlug)
      .map(c => otherCategoryChip(c, this.base)).join('');
    this._icons();
  },

  _bindMobile() {
    const btn = document.getElementById('px-burger');
    const menu = document.getElementById('px-mobile');
    if (btn && menu) btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  },

  _icons() {
    if (window.lucide) window.lucide.createIcons();
  },
};

window.SITE = SITE;
window.PxSite = PxSite;
