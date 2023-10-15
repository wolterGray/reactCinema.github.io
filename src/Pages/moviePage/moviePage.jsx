import React from "react";
import cl from "./moviePage.module.scss";
import Container from "../../components/container/Container";
import {BsPerson} from "react-icons/bs";
import Button from "../../components/button/Button";
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";

function MoviePage() {
  return (
    <div className={cl.wrapper}>
      <Container>
        <div className={cl.movie}>
          <h4 className={cl.title}>Movie name</h4>
          <div className={cl.movieChar}>
            <div className={cl.image}>
              <img src="/termi.jpg" alt="" />
            </div>
            <div className={cl.character}>
              <p className={cl.charItem}>Year: 2020</p>
              <p className={cl.charItem}>Country: Usa</p>
              <p className={cl.charItem}>
                Genre: <span className={cl.charClr}>Action</span>
              </p>
              <p className={cl.charItem}>Running time: 102min</p>
              <p className={cl.charItem}>
                Cast: <span className={cl.charClr}>Arnold Szwarcnegger</span>
              </p>
              <div className={cl.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                beatae consequatur alias. Eos, cum nostrum non debitis quo unde
                fugit praesentium. Ad tempora dolores laboriosam! Dolorem cumque
                culpa libero alias?
              </div>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                natus at, nemo vel, quis earum atque qui similique error ex,
                beatae officiis placeat amet cum esse eum minus reiciendis
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
      </Container>
    </div>
  );
}

export default MoviePage;
