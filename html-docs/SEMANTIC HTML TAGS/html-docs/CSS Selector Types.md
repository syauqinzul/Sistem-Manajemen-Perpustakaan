/* Type Selector */
body { ... }
h1 { ... }

/* Class Selector */
.book-item { ... }
.btn { ... }

/* ID Selector */
#bookForm { ... }
#bookList { ... }

/* Descendant Selector */
.book-list li { ... }

/* Child Selector */
.form-section > h2 { ... }

/* Attribute Selector */
input[type="text"] { ... }
input[required] { ... }

/* Pseudo-classes */
.btn:hover { ... }
input:focus { ... }
.book-item:first-child { ... }

/* Pseudo-elements */
.stat-value::before { ... }
.book-title::after { ... }

Best Practice Units:

/* Layout */
.container {
    max-width: 1200px;      /* Fixed max */
    width: 90%;             /* Fluid */
    padding: 2rem;          /* Scalable */
}

/* Typography */
body {
    font-size: 16px;        /* Base */
}

h1 {
    font-size: 2.5rem;      /* 40px */
}

.subtitle {
    font-size: 1.2em;       /* Relative to parent */
}

/* Spacing */
.margin {
    margin: 20px;           /* Fixed */
    margin: 1.25rem;        /* Relative to root */
    margin: 5%;             /* Fluid */
}

Color Systems

/* Named Colors */
color: red;
background-color: white;

/* HEX Colors */
color: #2c3e50;            /* 6-digit HEX */
color: #3498db;
color: #fff;               /* 3-digit shorthand */

/* RGB/RGBA */
color: rgb(44, 62, 80);
color: rgba(52, 152, 219, 0.8);  /* With alpha */

/* HSL/HSLA */
color: hsl(210, 29%, 24%);
color: hsla(204, 70%, 53%, 0.8);

Color Psychology in Project:

#2c3e50 (Dark blue): Professional, trustworthy (header)

#3498db (Blue): Action, confidence (primary buttons)

#2ecc71 (Green): Success, positive (success actions)

#e74c3c (Red): Danger, attention (delete actions)

#f5f5f5 (Light gray): Neutral background


### File: `css-docs/02-layout-systems.md`
```markdown
# 📐 CSS LAYOUT SYSTEMS

## 1. CSS Grid Layout

### Basic Grid
```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
}

Penjelasan:

display: grid: Aktifkan Grid layout

grid-template-columns: Definisikan columns

1fr 2fr: Fraction units (1:2 ratio)

gap: Spasi antara grid items

Grid Areas:

.container {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    grid-template-columns: 1fr 3fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Responsive Grid */

.statistics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

Penjelasan:

repeat(): Ulangi pattern

auto-fit: Auto-adjust columns number

minmax(150px, 1fr): Minimum 150px, maximum 1fr