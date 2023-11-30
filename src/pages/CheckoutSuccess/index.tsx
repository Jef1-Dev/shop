import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import Success from '../../assets/success.svg';
import { Container, DeliveryInfo, Header, IconMoneyPlaceholder, IconPinPlaceholder, IconTimePlaceholder, Info, InfoContainer } from './styles';

export function CheckoutSuccess() {
  return (
    <Container>
      <Header>Uhu! Pedido confirmado</Header>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      
    </Container >
  )
}