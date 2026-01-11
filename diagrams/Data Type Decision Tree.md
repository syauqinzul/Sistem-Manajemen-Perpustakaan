Q: Value never changes?
├── Yes → Use const
└── No → Q: Need reassignment?
    ├── Yes → Use let
    └── No → Use const

Q: What type of data?
├── Single value → Primitive (string, number, boolean)
├── Key-value pairs → Object
├── Ordered list → Array
├── Function → Function
└── Date/other → Special object