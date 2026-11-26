import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
    name: string;
    label: string;
    description: string;
    image: string;
    slug: string;
}

const CategoryCard =({ name, label, description, image, slug } : CategoryCardProps) => {
    return (
        <a href={`/shop/${slug}`} className="category-card">
            <div className="category-image-wrapper">
                <img src={image} alt={name} className="category-image" />
                <div className="category-image-overlay"></div>
            </div>

            <div className="category-content">
                <div className="category-top">
                    <span className="category-label">
                        {label}
                    </span>

                    <ArrowUpRight size={17} className="category-arrow" />
                </div>

                <h3 className="category-title">
                    {name}
                </h3>

                <p className="category-description">
                    {description}
                </p>

                <span className="browse-gear">
                    BROWSE GEAR <span>›</span>
                </span>
            </div>
        </a>
    )
}

export default CategoryCard