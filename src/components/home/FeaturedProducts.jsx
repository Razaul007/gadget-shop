import ProductCard from "../ProductCard";


const FeaturedProducts = () => {
    return (
        <div className="lg:flex items-center justify-between my-5 p-4 lg:gap-8">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
};

export default FeaturedProducts;