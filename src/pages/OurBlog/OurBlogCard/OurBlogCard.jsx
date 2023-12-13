import { useNavigate } from 'react-router-dom';
import './OurBlogCard.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const OurBlogCard = ({ img, heading, article, numberOfBlog }) => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/blog${numberOfBlog}`)
    }

    return (
        <div onClick={handleNavigate} className="w-100">
            <LazyLoadImage
                src={img}
                className=" rounded-2 img-fluid mb-3"
            />
            <h1 style={{ fontFamily: 'battambang' }} className="text-white fw-bold fs-4">{heading}</h1>
            <article className="text-white ourWorkCardArticle">{article}</article>
        </div>
    );
};

export default OurBlogCard;