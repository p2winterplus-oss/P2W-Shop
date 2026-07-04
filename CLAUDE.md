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
- (ยังไม่ได้เริ่ม)

### In Progress 🔄
-

### Next ❌
- สร้าง index.html (hub)
- สร้าง frozen/index.html
- สร้าง snack/index.html
- สร้าง pet/index.html
- สร้าง general/index.html
- สร้าง secondhand/index.html
- สร้าง repo GitHub
- Deploy GitHub Pages
