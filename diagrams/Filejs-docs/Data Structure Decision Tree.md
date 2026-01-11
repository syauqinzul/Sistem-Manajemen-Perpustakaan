Q: Need ordered list?
├── Yes → Use Array
└── No → Q: Need key-value pairs?
    ├── Yes → Q: Keys are strings?
    │   ├── Yes → Use Object
    │   └── No → Use Map
    └── No → Q: Need unique values?
        ├── Yes → Use Set
        └── No → Use appropriate primitive