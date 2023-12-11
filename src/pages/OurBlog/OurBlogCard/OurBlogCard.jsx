import { useNavigate } from 'react-router-dom';
import './OurBlogCard.css'

const OurBlogCard = ({ img, heading, article, numberOfBlog }) => {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/blog${numberOfBlog}`)
    }

    return (
        <div onClick={handleNavigate} className="w-100">
            <img src={img} className=" rounded-2 img-fluid mb-3" />
            <h1 style={{ fontFamily: 'battambang' }} className="text-white fw-bold fs-4">{heading}</h1>
            <article className="text-white ourWorkCardArticle">{article}</article>
        </div>
    );
};

export default OurBlogCard;