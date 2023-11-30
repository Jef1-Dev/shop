import CoffeeShop from '../../../assets/CoffeeShop.svg'
import BackgroundHero from '../../../assets/BackgroundHero.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Description, DescriptionsIconCart, DescriptionsIconCoffee, DescriptionsIconPackage, DescriptionsIconTimer, DescriptionText, HeroContainer, HeroImageContainer, HeroSubtitle, HeroTitle, HeroTitleContainer } from './styles'

export function Hero() {
  return (
    <HeroContainer background={BackgroundHero}>
      <div>
        <HeroTitleContainer>
          <HeroTitle>Cake Shop</HeroTitle>
          <HeroSubtitle>
            Recebe seu café onde estiver, a qualquer hora
          </HeroSubtitle>
        </HeroTitleContainer>
      </div>
    </HeroContainer>
  )
}