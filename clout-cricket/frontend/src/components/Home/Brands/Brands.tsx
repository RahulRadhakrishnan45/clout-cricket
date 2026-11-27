import './Brand.css'

interface Brand {
    name: string;
    logo: string;
}

const brands: Brand[] = [
    {
        name: "SS",
        logo: "/images/brands/ss.png"
    },
    {
        name: "GRAY-NICOLLS",
        logo: "/images/brands/Gray nicols.png"
    },
    {
        name: "ADIDAS",
        logo: "/images/brands/adidas.jpg"
    },
    {
        name: "ASICS",
        logo: "/images/brands/asics.png"
    },
    {
        name: "DSC",
        logo: "/images/brands/DSC.avif"
    },
    {
        name: "GM",
        logo: "/images/brands/GM.jpg"
    },
    {
        name: "KOKABURA",
        logo: "/images/brands/kokabura.png"
    },
    {
        name: "MRF",
        logo: "/images/brands/MRF.avif"
    },
    {
        name: "NEW-BALANCE",
        logo: "/images/brands/NB.png"
    },
    {
        name: "PUMA",
        logo: "/images/brands/puma.jpg"
    },
    {
        name: "VERSANT",
        logo: "/images/brands/versant.png"
    },
    {
        name: "WILLOU-CRICKET",
        logo: "/images/brands/wilou.png"
    }
]

const Brands = () => {
    return (
        <section className="brands-section">
            <div className="page-container">

            <div className="brands-header">

                <div className="brands-heading">
                    <span className="brands-label">
                        ● AUTHORIZED PARTNER GUILD // FEATURED BRANDS
                    </span>

                    <h2>
                        CURATED FROM THE WORLD'S FINEST MAKERS
                    </h2>
                </div>

                <p className="brands-description">
                    Clout Cricket is an authorized specialist curator and
                    partner depot. We do not manufacture mass equipment;
                    we hand-select, inspect, and retail authentic hardware
                    directly from elite global cricket brands.
                </p>
            </div>

            <div className="brands-marquee">

                <div className="brands-track">
                    {[...brands, ...brands].map((brand,index) => (
                        <div className="brand-item" key={`${brand.name}-${index}`}>
                            <img src={brand.logo} alt={brand.name} />
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </section>
    )
}

export default Brands