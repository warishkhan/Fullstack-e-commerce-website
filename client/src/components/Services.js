import React from "react";
import { styled } from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="services-container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>
          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>
          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .services-container {
    width: min(100%, 950px);
    margin: 8rem auto;
  }

  .services-1,
  .services-3 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: min(100%, 300px);
    height: 18rem;
    text-align: center;
    border-radius: 5px;
    font-size: 1.5rem;
    background-color: ${({ theme }) => theme.colors.bg};
  }
  .icon {
    font-size: 2.5rem;
    color: purple;
    background-color: #fff;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    text-align: center;
    padding: 3px;
  }
  .services-2 {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
    width: min(100%, 300px);
    background-color: #fff;
    font-size: 1.5rem;
    .services-colum-2 {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.bg};
      width: min(100%, 300px);
      height: 8rem;
      border-radius: 5px;
      div{
        display: flex;
        align-items: center;
      justify-content: center;
      }
    }
  }
  @media only screen and (max-width:${({theme}) => theme.media.mobile}){
    .services-1,
  .services-3{
    width: min(100%, 450px);
  }
    .services-2 {
        width: min(100%, 450px);
        .services-colum-2{
            width: min(100%, 450px);
        }
    }
  }
`;

export default Services;
