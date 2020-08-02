import React from "react";
import { connect } from "react-redux";

import UsersAtivos from "./teste2";
import { changeUserStatus } from "../../store/actions/usersActions";
import "./teste.css";

const TesteRedux = (props) => {
  return (
    <>
      <h2>Method 1 - max-height animation</h2>
      <div className="ex1">
        <label for="item-1">Toggle Div</label>
        <input type="checkbox" name="one" id="item-1" />
        <div className="hide">
          <p>
            Equation billions upon billions! Courage of our questions
            decipherment, take root and flourish, cosmic ocean paroxysm of
            global death. Light years inconspicuous motes of rock and gas from
            which we spring something incredible is waiting to be known, muse
            about!
          </p>
          <p>
            Equation billions upon billions! Courage of our questions
            decipherment, take root and flourish, cosmic ocean paroxysm of
            global death. Light years inconspicuous motes of rock and gas from
            which we spring something incredible is waiting to be known, muse
            about!
          </p>
        </div>
        <p className="follow">Following content</p>
      </div>
      {/* <input type="checkbox" name="toggle" id="toggle" />
      <label for="toggle"></label>

      <div className="container">
        <h1>Pure CSS3 Slide Down Toggle Demo</h1>
        <h2> Click the Open button to see hidden mesage.</h2>
      </div>

      <div className="message">
        <h1> hello, I'm a hidden message. You found it.</h1>
        <h2>Now Click the Heart button in the bottom to support CSS3</h2>
      </div> */}
      {/* <div className="toggle">
        <input
          type="checkbox"
          value="selected"
          id="someID"
          className="toggle__input"
        />
        <label for="someID" className="toggle__label">
          show me{" "}
          <span className="toggle__more">more</span><span className="toggle__less">
            less
          </span>{" "}
          stuff{" "}
        </label>
        <div className="toggle__content">
          {" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            sequi quidem officia quis, repellendus voluptas voluptatibus in
            adipisci magnam consectetur, reprehenderit laborum ducimus ipsum
            dolores dicta vero. Laudantium inventore, reprehenderit!
          </p>{" "}
        </div>
      </div> */}
    </>
  );
};

const mapStateProps = (state) => ({
  users: state.usersReducer,
});

const mapDispatchToProps = (dispatch) => ({
  changeUserStatus: (user) => dispatch(changeUserStatus(user)),
});

export default connect(mapStateProps, mapDispatchToProps)(TesteRedux);
