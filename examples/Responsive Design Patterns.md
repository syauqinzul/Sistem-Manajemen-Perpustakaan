Media Queries

/* Mobile First Approach */
/* Base styles for mobile */

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        grid-template-columns: 1fr 2fr;
    }
}

/* Large Desktop */
@media (min-width: 1440px) {
    .container {
        max-width: 1400px;
    }
}