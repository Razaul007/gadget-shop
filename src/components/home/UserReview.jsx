import Review from "./Review";


const UserReview = () => {
    return (
        <div className="lg:flex items-center justify-between my-5 p-4 lg:gap-8">
            <Review/>
            <Review/>
            <Review/>
            <Review/>
        </div>
    );
};

export default UserReview;