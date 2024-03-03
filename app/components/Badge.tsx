"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Badge() {
  return (
    <div className="z-10">
      <h1 className="text-3xl font-bold items-center text-center pt-12">
        Our visor glasses are suitable for these brands{" "}
      </h1>
      <Container>
        <Link href={"/Hero"}>
          <Wrap className="md:hover:scale-110">
            <Image
              src={"/hero.png"}
              alt={"image.alt"}
              width={100}
              height={100}
            />
          </Wrap>
        </Link>
        <Link href={"/Honda"}>
          {" "}
          <Wrap className="md:hover:scale-110">
            <Image
              src={"/honda.png"}
              alt={"image.alt"}
              width={100}
              height={100}
            />
          </Wrap>
        </Link>
        <Link href={"/TVS"}>
          <Wrap className="md:hover:scale-110">
            <Image
              src={"/tvs.jpg"}
              alt={"image.alt"}
              width={100}
              height={100}
            />
          </Wrap>
        </Link>
        <Link href={"/Yamaha"}>
          {" "}
          <Wrap className="md:hover:scale-110">
            <Image
              src={"/yamaha.png"}
              alt={"image.alt"}
              width={100}
              height={100}
            />
          </Wrap>
        </Link>
        <Link href={"/Bajaj"}>
          <Wrap className="md:hover:scale-110">
            <Image
              src={"/bajaj.jpeg"}
              alt={"image.alt"}
              width={100}
              height={100}
            />
          </Wrap>
        </Link>
        <Link href={"/Mahindra"}>
          <Wrap className="md:hover:scale-110">
            <Image
              src={"/mahindra.jpeg"}
              alt={"image.alt"}
              width={100}
              height={100}
            />
          </Wrap>
        </Link>
        <Link href={"/Suzuki"}>
          <Wrap className="md:hover:scale-110">
            <Image
              src={"/suzuki.jpeg"}
              alt={"image.alt"}
              width={100}
              height={100}
            />
          </Wrap>
        </Link>
        <Link href={"/KTM"}>
          <Wrap className="md:hover:scale-110">
            <Image
              src={"/ktm.jpeg"}
              alt={"image.alt"}
              width={100}
              height={100}
            />
          </Wrap>
        </Link>
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
    /* transform: scale(1.05); */

    video {
      opacity: 1;
    }
  }
`;
