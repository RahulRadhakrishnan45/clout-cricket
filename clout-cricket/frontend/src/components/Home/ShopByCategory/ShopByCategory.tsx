import CategoryCard from "./CategoryCard";
import "./ShopByCategory.css"

interface Category {
    id: number;
    name: string;
    label: string;
    description: string;
    image: string;
    slug: string;
}

const categories: Category[] = [
    {
        id: 1,
        name: "CRICKET BATS",
        label: "CORE DIVISON",
        description: "Premium bats crafted for professional performance and precision.",
        image: "/images/categories/Bat.webp",
        slug: "cricket-bats"
    },
    {
        id: 2, 
        name: "BATTING PADS & ARMOURS",
        label: "IMPACT GUARD",
        description: "Lightweight protection with superior comfort and impact resistance.",
        image: "/images/categories/pad.webp",
        slug: "batting-pads",
    },
    {
        id: 3,
        name: "BATTING GLOVES",
        label: "TACTILE GRIP",
        description: "Premium batting gloves designed for superior grip and protection.",
        image: "/images/categories/glove.webp",
        slug: "batting-gloves",
    },
    {
        id: 4, 
        name: "SPIKES & FOOTWEAR",
        label: "TRACTION TECH",
        description: "Performance cricket footwear designed for stability and traction.",
        image: "images/categories/footwear.webp",
        slug: "cricket-footwear",
    },
    {
        id: 5,
        name: "HELMETS & VISORS",
        label: "BALLISTIC HEADWEAR",
        description:  "Advanced head protection engineered for confidence at the crease.",
        image: "images/categories/helmet.webp",
        slug: "helmets",
    },
    {
        id: 6,
        name: "KIT BAGS & DUFFELS",
        label: "TACTICAL TRANSIT",
        description:  "Durable cricket bags with spacious compartments for your gear.",
        image: "images/categories/kitbag.webp",
        slug: "kit-bags",
    },
];

const ShopByCategory = () => {
    return (
        <section className="shop-category-section">
            <div className="page-container">
            <div className="shop-category-header">
                <div className="shop-category-heading">
                    <span className="section-eyebrow">
                        HARDWARE DIVISIONS
                    </span>

                    <h2>SHOP BY CATEGORY</h2>
                </div>

                <p className="shop-category-intro">
                    Every piece engineered with structural cohesion.
                     Built for maximum velocity, unyielding protection,
                     and exact ergonomic balance.
                </p>
            </div>

            <div className="category-grid">

                {categories.map((category) => (
                    <CategoryCard key={category.id} {...category} />
                ))}
            </div>
            </div>
        </section>
    )
}

export default ShopByCategory