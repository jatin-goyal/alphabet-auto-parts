"use client";
import React from "react";
import styled from "styled-components";

export default function Badge() {
  return (
    <div>
      <h1 className="text-3xl font-bold items-center text-center pt-12">
        Our visor glasses are suitable for these brands{" "}
      </h1>
      <Container>
        <Wrap>
          <img
            src={
              "https://logos-world.net/wp-content/uploads/2020/12/Hero-Logo.png"
            }
            alt={"image.alt"}
          />
        </Wrap>
        <Wrap>
          <img
            src={
              "https://logos-world.net/wp-content/uploads/2021/03/Honda-Logo.png"
            }
            alt={"image.alt"}
          />
        </Wrap>
        <Wrap>
          <img
            src={
              "https://static.vecteezy.com/system/resources/previews/020/336/393/original/tvs-logo-tvs-icon-transparent-png-free-vector.jpg"
            }
            alt={"image.alt"}
          />
        </Wrap>
        <Wrap>
          <img
            src={
              "https://logos-world.net/wp-content/uploads/2020/10/Yamaha-Logo.png"
            }
            alt={"image.alt"}
          />
        </Wrap>
        <Wrap>
          <img
            src={
              "https://1000logos.net/wp-content/uploads/2020/06/Bajaj-Logo.png"
            }
            alt={"image.alt"}
          />
        </Wrap>
        <Wrap>
          <img
            src={
              "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/kininb6m4imxda6ppnxu"
            }
            alt={"image.alt"}
          />
        </Wrap>
        <Wrap>
          <img
            src={"https://www.carlogos.org/logo/Suzuki-logo-1920x1080.png"}
            alt={"image.alt"}
          />
        </Wrap>{" "}
        <Wrap>
          <img
            src={
              "https://static.vecteezy.com/system/resources/previews/020/190/489/original/ktm-logo-ktm-icon-free-free-vector.jpg"
            }
            alt={"image.alt"}
          />
        </Wrap>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 0px 60px 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0px 20px 26px;
  }
`;

const Wrap = styled.div`
  background-color: #ffffff;
  padding-top: 55%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 70%) 0px 30px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    position: absolute;
    opacity: 1;
    inset: 0px;
    display: block;
    object-fit: cover;
    height: 100%;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 70%) 0px 30px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 3px solid rgba(249, 249, 249, 0.8);
    transform: scale(1.05);

    video {
      opacity: 1;
    }
  }
`;
