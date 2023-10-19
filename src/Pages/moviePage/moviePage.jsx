import React, {useEffect} from "react";
import cl from "./moviePage.module.scss";
import Container from "../../components/container/Container";
import {BsPerson} from "react-icons/bs";
import Button from "../../components/button/Button";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import {CustomContext} from "../../utils/Context";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

function MoviePage() {
  let navigate = useNavigate();
  const {moviePageData} = React.useContext(CustomContext);

  useEffect(() => {
    const scroll = window.scrollTo(0, 0);
    
  }, []);

  return (
    <div className={cl.wrapper}>
      <Container>
        {moviePageData.length > 0 && moviePageData.map((movie) => (
          <div key={movie.href} className={cl.movie}>
            <div className={cl.topElement} onClick={() => navigate(-1)}>
              <AiOutlineArrowLeft className={cl.arrowIcn} />
              <h4 className={cl.title}>
                {movie.title} ({movie.year})
              </h4>
            </div>
            <div className={cl.movieChar}>
              <div className={cl.image}>
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                />
              </div>
              <div className={cl.character}>
                <p className={cl.charItem}>
                  Country:{" "}
                  <span>
                    {movie.production_countries?.map((i) => i.name + ", ")}
                  </span>{" "}
                </p>
                <p className={cl.charItem}>
                  Release date: <span>{movie.year}</span>{" "}
                </p>
                
                
                <p className={cl.charItem}>
                  Genre: <span className={cl.charClr}>{movie.genres?.map(i => i + ', ')}</span>
                </p>
                <div className={cl.description}>{movie.extract
}</div>
                <div className={cl.watch}>
                  <Button>Treiler</Button>
                  <Button>Watch</Button>
                </div>
              </div>
            </div>
            <div className={cl.reviews}>
              <div className={cl.title}>Reviews</div>
              <div className={cl.user}>
                <div className={cl.userInfo}>
                  <BsPerson className={cl.personIcn} />
                  <div className={cl.info}>
                    <div className={cl.name}>Jonny Depp</div>
                    <div className={cl.date}>16.08.2023</div>
                  </div>
                </div>
                <div className={cl.comment}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Autem natus at, nemo vel, quis earum atque qui similique error
                  ex, beatae officiis placeat amet cum esse eum minus reiciendis
                  delectus.
                </div>
                <div className={cl.vote}>
                  <div className={cl.thumbsUp}>
                    <FaThumbsUp />
                    <p className={cl.count}>5</p>
                  </div>
                  <div className={cl.thumbsDown}>
                    <p className={cl.count}>10</p>
                    <FaThumbsDown />
                  </div>
                </div>
                <div className={cl.addField}>
                  <textarea
                    placeholder="Your comment text here"
                    rows="10"
                    type="text"
                  />
                  <Button>Send</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default MoviePage;
