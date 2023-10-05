import React from "react";
import Logo from "../../images/logo.svg";
import { Button, Img } from "components";


const header = () => {
  return (
    <div className="flex flex-wrap -mx-15px py-25px">
      <div className="w-[326px] px-15px">
        <a href="javascript;">
        <Img src={Logo} />
        </a>
      </div>
      <div className="w-[calc(100%_-_326px] px-15px">
        <div className="">
          <ul>
            <li>
              <a href="javarcfript:;">Home</a>
            </li>
            <li>
              <a href="javarcfript:;">Property</a>
            </li>
            <li>
              <a href="javarcfript:;">About</a>
            </li>
            <li>
              <a href="javarcfript:;">Post Property</a>
            </li>
            <li>
              <a href="javarcfript:;">Blog</a>
            </li>
            <li>
              <a href="javarcfript:;">Contact</a>
            </li>
          </ul>
          <div className="">
            <ul>
              <li><a href="javascript:;"></a>Sign in</li>
              <li><Button className="btn" href="javascript:;"></Button>Sign Up</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
