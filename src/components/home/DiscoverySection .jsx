const DiscoverySection = ({ id, title, description, link }) => {
    return (
        <div className="flex flex-col md:flex-row items-start py-5 md:py-10 gap-x-10 gap-y-3 border-t">
            <h3 className="font-offbit opacity-85">
                {String(id).padStart(2, "0")}
            </h3>
            <div className="flex flex-col gap-5 items-start">
                <h4 className="font-outfit">{title}</h4>
                <p className="font-outfit font-light">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <span className="font-bold font-outfit hover:underline">
                        Explore <sup className="font-normal">↗</sup>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default DiscoverySection;
