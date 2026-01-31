# 📸 Upholstery Image Specifications & Sourcing Guide

## **Image Requirements for Location Pages**

### **Technical Specifications**

#### **File Formats**
- **Primary**: WebP (best compression, modern browsers)
- **Fallback**: JPEG (universal compatibility)
- **Quality**: 85-90% (balance of quality vs. file size)

#### **Dimensions**
```
Hero Images:        1200x800px (3:2 ratio)
Section Images:     800x600px  (4:3 ratio)  
Detail Shots:       600x600px  (1:1 ratio)
Thumbnail Cards:    400x300px  (4:3 ratio)
```

#### **File Size Targets**
- **Hero Images**: Under 200KB
- **Section Images**: Under 150KB  
- **Detail Shots**: Under 100KB
- **Thumbnails**: Under 50KB

### **Content Categories & Examples**

#### 1. **Climate-Appropriate Fabrics**
**Required Alt Text Pattern**: `"[Fabric type] upholstery fabric suitable for [city] [climate condition]"`

**Examples**:
- `"Solution-dyed acrylic outdoor fabric suitable for Tampa humidity"`
- `"UV-resistant performance textile for Miami sunroom upholstery"`
- `"Moisture-wicking fabric ideal for Orlando's humid climate"`

**Visual Requirements**:
- Show fabric in realistic room settings
- Include natural lighting to show true colors
- Display texture and weave clearly
- Show durability features (stain resistance, etc.)

#### 2. **Regional Architecture + Upholstery**
**Required Alt Text Pattern**: `"[Architecture style] home with [fabric type] upholstery in [city]"`

**Examples**:
- `"Modern Florida home with clean-line upholstery in contemporary fabrics"`
- `"Traditional Southern architecture with rich textured upholstery fabrics"`
- `"Coastal cottage featuring marine-grade upholstery materials"`

**Visual Requirements**:
- Show architectural context (windows, lighting, room style)
- Display how fabric complements the space
- Include multiple furniture pieces if possible
- Show color coordination with walls/decor

#### 3. **Before/After Transformations**
**Required Alt Text Pattern**: `"Before and after upholstery transformation showing [specific improvement]"`

**Examples**:
- `"Before and after chair reupholstery showing climate-appropriate fabric upgrade"`
- `"Sofa transformation from worn fabric to durable performance material"`
- `"Dining room chairs before and after reupholstery with stain-resistant fabric"`

**Visual Requirements**:
- Clear before/after comparison (split or side-by-side)
- Same lighting and angle for both shots
- Show improvement in style, comfort, or durability
- Include brief caption explaining the change

#### 4. **Fabric Detail Shots**
**Required Alt Text Pattern**: `"Close-up detail of [fabric type] showing [specific feature]"`

**Examples**:
- `"Close-up detail of solution-dyed acrylic showing UV-resistant properties"`
- `"Detailed view of performance fabric weave pattern and texture"`
- `"Stain-resistant fabric demonstration showing easy-clean surface"`

**Visual Requirements**:
- Macro photography showing texture clearly
- Good lighting to show true colors
- Include hand for scale if helpful
- Show unique properties (water beading, etc.)

### **Sourcing Strategy & Budget**

#### **Option 1: Professional Photography** ($1,500-3,000)
**Best for**: Custom content that perfectly matches brand

**Package Contents**:
- 20-30 hero-quality images
- Multiple fabric samples in room settings
- Before/after transformation series  
- Detail shots of fabric properties
- Regional architecture integration

**Timeline**: 2-3 weeks from brief to delivery

#### **Option 2: Fabric Vendor Images** ($0-500)
**Best for**: Product-specific content with professional quality

**Sources**:
- **Kravet**: High-res fabric images, room settings
- **United Fabrics**: Performance fabric demonstrations
- **Charlotte Fabrics**: Outdoor/marine applications
- **Local Suppliers**: Regional preferences, climate-specific

**Requirements**: License for commercial use, attribution if needed

#### **Option 3: Stock Photography** ($200-800)
**Best for**: Quick implementation, broad coverage

**Recommended Sources**:
- **Shutterstock**: Search "upholstery, furniture, interior design"
- **Getty Images**: High-quality interior/architecture photos
- **Adobe Stock**: Fabric textures, room settings
- **Unsplash/Pexels**: Free options (limited selection)

**Search Terms**:
- "upholstery fabric samples"
- "furniture reupholstery before after"
- "interior design climate appropriate"
- "fabric texture close up detail"

### **Implementation Workflow**

#### **Week 1: Planning & Sourcing**
1. **Define image list** (20-30 core images)
2. **Create photography brief** with specifications
3. **Source vendor partnerships** for fabric images
4. **Order stock images** for immediate gaps

#### **Week 2: Content Creation**
1. **Professional shoot** (if chosen)
2. **Collect vendor images** with proper licensing
3. **Download and organize** stock images
4. **Optimize all images** for web (WebP conversion)

#### **Week 3: Integration**
1. **Update city page template** with image components
2. **Add SEO-optimized alt text** for each image
3. **Test loading performance** across sample pages
4. **Deploy to production** with image optimization

### **Technical Implementation**

#### **Next.js Image Component Usage**
```typescript
import Image from 'next/image'

// Hero image example
<Image
  src={`/images/climates/${cityData.climate.zone}/hero.webp`}
  alt={`${cityData.climate.zone} climate upholstery fabric suitable for ${cityData.city}`}
  width={1200}
  height={800}
  priority
  className="rounded-lg shadow-lg"
/>

// Fabric detail example  
<Image
  src={`/images/fabrics/${cityData.climate.zone}/detail-1.webp`}
  alt={`Close-up detail of ${cityData.climate.zone} climate fabric showing durability features`}
  width={600}
  height={600}
  className="rounded-lg"
/>
```

#### **Responsive Image Sets**
```typescript
// Multiple sizes for different devices
<Image
  src="/images/transformations/living-room-1.webp"
  alt="Before and after living room upholstery transformation"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  width={800}
  height={600}
  className="object-cover rounded-lg"
/>
```

### **Directory Structure**
```
public/images/
├── climates/
│   ├── humid-subtropical/
│   │   ├── hero.webp
│   │   ├── fabric-samples/
│   │   └── room-examples/
│   └── humid-continental/
│       ├── hero.webp  
│       ├── fabric-samples/
│       └── room-examples/
├── transformations/
│   ├── before-after-1.webp
│   ├── before-after-2.webp
│   └── before-after-3.webp
├── architecture/
│   ├── florida-modern/
│   ├── southern-traditional/
│   └── coastal-casual/
└── fabric-details/
    ├── texture-closeups/
    ├── stain-resistance/
    └── uv-protection/
```

### **SEO Optimization**

#### **Image Alt Text Strategy**
- **Include location**: "Tampa upholstery fabric"
- **Include climate**: "humidity-resistant upholstery"  
- **Include benefit**: "stain-resistant dining chair fabric"
- **Include style**: "modern living room upholstery"

#### **Structured Data for Images**
```json
{
  "@type": "ImageObject",
  "url": "https://bestupholsteryorlando.com/images/climates/florida/hero.webp",
  "description": "Climate-appropriate upholstery fabric for Florida's humid subtropical climate",
  "keywords": "upholstery, fabric, Florida, humidity, UV-resistant"
}
```

### **Performance Monitoring**

#### **Page Speed Metrics to Track**
- **Largest Contentful Paint (LCP)**: Under 2.5 seconds
- **Cumulative Layout Shift (CLS)**: Under 0.1
- **First Input Delay (FID)**: Under 100 milliseconds
- **Total Image Size**: Under 2MB per page

#### **Testing Tools**
- **Google PageSpeed Insights**: Overall performance
- **GTmetrix**: Detailed image analysis
- **WebPageTest**: Multi-location testing
- **Chrome DevTools**: Network performance

---

## 🎯 **Result: Professional Upholstery Image System**

Every image will be:
- ✅ **Relevant to upholstery** and location context
- ✅ **SEO optimized** with descriptive alt text  
- ✅ **Performance optimized** with WebP format
- ✅ **Professionally sourced** with proper licensing
- ✅ **Contextually appropriate** for climate and style

**No random stock photos, no irrelevant filler content - only images that enhance the upholstery selection message.** ⚡