document
└── html (lang="id")
    ├── head
    │   ├── meta charset
    │   ├── meta viewport
    │   ├── title
    │   └── link stylesheet
    └── body
        ├── header
        │   ├── h1
        │   └── p.subtitle
        ├── div.container
        │   ├── section.form-section
        │   │   ├── h2
        │   │   ├── form#bookForm
        │   │   │   ├── div.form-group
        │   │   │   │   ├── label[for="title"]
        │   │   │   │   └── input#title
        │   │   │   └── button[type="submit"]
        │   │   └── div.buttons
        │   └── section.display-section
        │       ├── h2
        │       ├── div.statistics
        │       └── ul#bookList
        ├── section.code-explanation
        └── footer


DOM Traversal Methods:

// Parent to child
document.getElementById('bookForm').children
document.querySelector('.form-group').firstElementChild

// Child to parent  
document.getElementById('title').parentElement
document.querySelector('input').closest('.form-group')

// Siblings
document.querySelector('h2').nextElementSibling
document.querySelector('.btn').previousElementSibling

DOM Manipulation Flow:

User Action → JavaScript → DOM Update → Browser Render
    ↓           ↓              ↓            ↓
Click button → Event → Create element → Visual change


---

## 🎯 COMMIT 3: Dokumentasi CSS

### File: `css-docs/01-css-fundamentals.md`
```markdown
# 🎨 CSS FUNDAMENTALS

## File: `style.css`

### 1. CSS Reset & Box Model
```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

Penjelasan:

Box-sizing:

border-box: Width includes padding + border

content-box: Width excludes padding + border (default)

Visual Box Model:

content-box:                    border-box:
┌──────────────────────┐       ┌──────────────────────┐
│     Content 200px    │       │   Total 200px        │
│                      │       │                      │
│                      │       │ Content 160px        │
└──────────────────────┘       │ + Padding 20px each  │
Width: 200px (content only)    │ + Border 10px each   │
                               └──────────────────────┘
                               Width: 200px (total)


Reset Styles:

margin: 0: Hapus default browser margin

padding: 0: Hapus default browser padding

Universal reset untuk konsistensi