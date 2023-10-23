import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/" className="text"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>WarTech</h3>
              <p style={{color:"white"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div style={{color:"white"}}>
                  <FaDiscord className="icons" />
                </div>
                <div style={{color:"white"}}>
                  <FaInstagram className="icons" />
                </div>
                <div style={{color:"white"}}>
                  
                    <FaYoutube className="icons" />
                
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p style={{color:"white"}}>@{new Date().getFullYear()} WarTech. All Rights Reserved</p>
              <div>
                <p style={{color:"white"}}>PRIVACY POLICY</p>
                <p style={{color:"white"}}>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.sm}) {
    .contact-short {
      max-width: 60vw;
      margin: 2rem auto;
      transform: translateY(0%);
      text-align: center;
      padding: 2rem 3rem;

      .grid div:last-child {
        justify-self: center;
        width: 12.5rem;
        .text{
            font-size:1rem;
            text-align: center;
        }
      }
    }

    footer {
      padding: 6rem 0 6rem 0;
      h3{
        margin-left: 1rem;
      }
      p{
        margin-left: 1rem;
      }
      .footer-subscribe{
        h3{
            margin-right: 0.5rem;
        }
        input{
            width: 13rem;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4rem auto;
      transform: translateY(0%);
      text-align: center;
      padding: 2rem 3rem;
      .grid div:last-child {
        justify-self: center;
        width: 12.5rem;
        .text{
            font-size:1rem;
            text-align: center;
        }
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
      h3{
        margin-left: 1rem;
      }
      p{
        margin-left: 1rem;
      }
      .footer-subscribe{
        h3{
            margin-right: 0.5rem;
        }
        input{
            width: 13rem;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
