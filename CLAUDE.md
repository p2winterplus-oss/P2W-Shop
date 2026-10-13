# P2W INTERPLUS — ขายสินค้า (Shop)

## Architecture รวม
ดู `C:\Users\witta\OneDrive\Claude AI Backup\P2W-ARCHITECTURE.md`

## โปรเจกต์นี้คืออะไร
หน้าขายสินค้าแบบ catalog (static) — แยก 5 หมวดสินค้าที่ลูกค้าคนละกลุ่มกัน ไม่รวมกันเพราะจะตีกัน เริ่มจาก catalog โชว์สินค้าก่อน ถ้าต้องการ e-commerce จริงค่อยเพิ่ม backend ใน Phase 3

- **Live URL**: https://p2winterplus.com/shop (รอซื้อโดเมน)
- **Repo**: https://github.com/p2winterplus-oss/P2W-Shop (ยังไม่ได้สร้าง)
- **Hosted**: GitHub Pages
- **Stack**: HTML + Tailwind CSS CDN + Vanilla JavaScript (single file per page)

## โครงสร้าง URL
```
/shop                    → landing P2W INTERPLUS (เลือก Page / Website / Marketplace)
/shop/store              → hub ร้าน Infinis Foods (เลือกหมวดสินค้า)
/shop/store/frozen       → อาหารแช่แข็ง
/shop/store/bakery       → อาหารแปรรูป ขนม เค้ก
/shop/store/pet          → อาหารสัตว์
/shop/store/general      → สินค้าทั่วไป
/shop/store/secondhand   → สินค้ามือสอง
```

## โครงสร้างไฟล์
```
P2W Shop\
  index.html                     → landing P2W INTERPLUS (3 หัวข้อ: Page / Website / Marketplace)
  logo.png                       → โลโก้ P2W INTERPLUS (ใช้ในหน้า landing)
  store\
    index.html                   → hub Infinis Foods (อธิบายหมวด + วิธีสั่งซื้อ + ข้อมูลบริษัท)
    assets\app.js                → shared component (header/footer/สินค้า) + ข้อมูลร้าน + ข้อมูลสินค้า
    assets\infinis-mark.png      → โลโก้ Infinis Foods (JF ทอง) / line-qr.jpg = QR LINE
    frozen\index.html            → อาหารแช่แข็ง (ธีมฟ้า sky)
    bakery\index.html            → ขนม เค้ก เบเกอรี่ (ธีมส้ม orange)
    pet\index.html               → อาหารสัตว์ (ธีมเขียว emerald)
    general\index.html           → สินค้าทั่วไป (ธีมม่วง indigo)
    secondhand\index.html        → สินค้ามือสอง (ธีมเหลือง amber)
```

> **Landing** (`index.html`): 3 หัวข้อ — Page (เพจ FB: pingstores/ShiftUp/Infinis), Website (→ `store/`), Marketplace (Shopee/Lazada: pingstores/p2winterplus/infinis — **ลิงก์ยังเป็น placeholder "เร็วๆ นี้"** รอใส่จริง)
> **แก้ข้อมูลสินค้า/ร้าน**: แก้ที่ `store\assets\app.js` ไฟล์เดียว (ตัวแปร `SITE` = ข้อมูลร้าน, `PRODUCTS` = สินค้าแต่ละหมวด) header/footer/การ์ดสินค้าทุกหน้าดึงจากที่นี่

## ลูกค้าแต่ละหมวด
| หมวด | กลุ่มลูกค้า |
|------|------------|
| frozen | แม่บ้าน, คนทำกับข้าว, ร้านอาหาร |
| bakery | คนซื้อขนม/ของว่าง, คนซื้อของฝาก |
| pet | เจ้าของสัตว์เลี้ยง |
| general | ลูกค้าทั่วไป |
| secondhand | คนมองหาสินค้ามือสองราคาประหยัด |

## Design System
- **Primary color**: Bronze `#C5A880`
- **Dark bg**: `#0D0D0C` / **Light bg**: `#F9F8F6`
- **Fonts**: Playfair Display (headings) + Prompt (body)
- **Style**: Luxury architectural fine-line
- **Dark/Light mode toggle**: ทุกหน้า (localStorage)

## Contact Info
- Phone: 088-788-8364
- Email: adm.p2winterplus@gmail.com
- Line OA: https://lin.ee/QJax26d

## Progress
### Done ✅
- สร้างเว็บ **multi-page** — หน้าแรก (hub) + 5 หน้าหมวด แยกโฟลเดอร์ตาม URL plan แต่ละหน้าธีมสีของตัวเอง
- shared component `assets/app.js` (header มีปุ่มหน้าแรก/footer/การ์ดสินค้า + ข้อมูลร้าน + ข้อมูลสินค้า)
- หน้าแรกอธิบายหมวด + วิธีสั่งซื้อ 3 ขั้น + ข้อมูลบริษัท (เพื่อความน่าเชื่อถือ)
- สร้าง repo GitHub: https://github.com/p2winterplus-oss/P2W-Shop
- Deploy GitHub Pages + Cloudflare Worker `p2w-shop` → **https://p2winterplus.com/shop** ✅ Live

### In Progress 🔄
-

### Next ❌
- แทนรูป placehold.co ด้วยรูปสินค้าจริง (แก้ที่ `assets/app.js` → `PRODUCTS`)
- แก้ชื่อ/ราคา/รหัสสินค้าให้ตรงของจริง

## หมายเหตุ implementation
- โครงสร้าง **multi-page**: หน้าแรก `index.html` เป็น hub, แต่ละหมวดแยกโฟลเดอร์ (`/frozen/`, `/bakery/`, `/pet/`, `/general/`, `/secondhand/`) → map กับ URL `/shop/<หมวด>/`
- header/footer/การ์ดสินค้า render จาก `assets/app.js` (Tailwind Play CDN สร้าง class จาก DOM ที่ inject ได้) — แก้ครั้งเดียวมีผลทุกหน้า
- ทุก link ใช้ relative path (`../frozen/` ฯลฯ) → ทำงานได้ทั้งบน github.io และ p2winterplus.com/shop
- git identity ของ repo (local): P2W Interplus / adm.p2winterplus@gmail.com
