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
/shop              → hub เลือกหมวดสินค้า
/shop/frozen       → อาหารแช่แข็ง
/shop/snack        → อาหารแปรรูป ขนม เค้ก
/shop/pet          → อาหารสัตว์
/shop/general      → สินค้าทั่วไป
/shop/secondhand   → สินค้ามือสอง
```

## โครงสร้างไฟล์
```
P2W Shop\
  index.html             → hub (เลือกหมวด)
  frozen\index.html      → อาหารแช่แข็ง
  snack\index.html       → อาหารแปรรูป ขนม เค้ก
  pet\index.html         → อาหารสัตว์
  general\index.html     → สินค้าทั่วไป
  secondhand\index.html  → สินค้ามือสอง
```

## ลูกค้าแต่ละหมวด
| หมวด | กลุ่มลูกค้า |
|------|------------|
| frozen | แม่บ้าน, คนทำกับข้าว, ร้านอาหาร |
| snack | คนซื้อขนม/ของว่าง, คนซื้อของฝาก |
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
- Email: p2w.interplus@gmail.com
- Line OA: https://lin.ee/QJax26d

## Progress
### Done ✅
- สร้าง index.html — single-page catalog รวม 5 หมวด (frozen/bakery/pet/general/secondhand) พร้อมปุ่ม LINE OA ทุกจุด
- สร้าง repo GitHub: https://github.com/p2winterplus-oss/P2W-Shop
- Deploy GitHub Pages สำเร็จ → https://p2winterplus-oss.github.io/P2W-Shop/

### In Progress 🔄
-

### Next ❌
- แทนรูป placehold.co ด้วยรูปสินค้าจริง
- แก้ชื่อ/ราคา/รหัสสินค้าให้ตรงของจริง
- ตั้ง redirect/proxy p2winterplus.com/shop → GitHub Pages (รอเว็บหลักพร้อม)

## หมายเหตุ implementation
- ตอนนี้ทำเป็น **single-page** (index.html หน้าเดียว โชว์ทั้ง 5 หมวดเป็น section + anchor link) ยังไม่ได้แยกเป็นโฟลเดอร์ย่อยตาม URL plan เดิม
- git identity ของ repo (local): P2W Interplus / p2w.interplus@gmail.com
