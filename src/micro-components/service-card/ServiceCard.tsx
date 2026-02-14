import Image from "next/image";
import {
  StyledCardDescription,
  StyledCardImg,
  StyledCardTitle,
  StyledInfoCard,
  StyledInfoCardContainer,
} from "./serviceCard.styled";

const ServiceCard = () => {
  const shipping = "/icons/shipping.svg";
  const support = "/icons/support.svg";
  const returnBox = "/icons/return-box.svg";
  const payment = "/icons/secure-payment.svg";
  return (
    <>
      <StyledInfoCardContainer>
        <StyledInfoCard>
          <StyledCardImg>
            <Image src={shipping} alt="shipping" width={50} height={50} />
          </StyledCardImg>
          <StyledCardTitle>Free shipping</StyledCardTitle>
          <StyledCardDescription>
            Fast and reliable delivery with no extra cost on all eligible
            orders.
          </StyledCardDescription>
        </StyledInfoCard>
        <StyledInfoCard>
          <StyledCardImg>
            <Image src={support} alt="support" width={50} height={50} />
          </StyledCardImg>
          <StyledCardTitle>24x7 Support</StyledCardTitle>
          <StyledCardDescription>
            Our support team is available around the clock to assist you
            anytime.
          </StyledCardDescription>
        </StyledInfoCard>
        <StyledInfoCard>
          <StyledCardImg>
            <Image
              src={returnBox}
              alt="product return"
              width={50}
              height={50}
            />
          </StyledCardImg>
          <StyledCardTitle>Easy to return</StyledCardTitle>
          <StyledCardDescription>
            Hassle-free returns with a simple and quick refund process.
          </StyledCardDescription>
        </StyledInfoCard>
        <StyledInfoCard>
          <StyledCardImg>
            <Image src={payment} alt="secure payment" width={50} height={50} />
          </StyledCardImg>
          <StyledCardTitle>Secure payment</StyledCardTitle>
          <StyledCardDescription>
            Safe, secure and reliable payments with trusted gateways.
          </StyledCardDescription>
        </StyledInfoCard>
      </StyledInfoCardContainer>
    </>
  );
};
export default ServiceCard;
