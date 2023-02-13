import { sizesPictureFullScreenOnMobile } from 'App/theme';
import { ContactForm } from 'components/ContactForm';
import { Picture } from 'components/shared';
import { LevelContextProvider } from 'features/chat';
import { ContainerPhotoLeft } from '../Solutions';
import {
  CallbackContentStyled,
  SectionNoBottomPadding,
} from './Callback.styled';

import jpg from 'assets/images/form/contact.jpg';
import webp from 'assets/images/form/contact.webp';
import jpg2 from 'assets/images/form/contact@2x.jpg';
import webp2 from 'assets/images/form/contact@2x.webp';

export const Callback = () => (
  <SectionNoBottomPadding>
    <LevelContextProvider>
      <ContainerPhotoLeft $padding="0">
        <Picture
          alt="Man makes a phone call on a smartphone while looking at a laptop screen"
          jpg={jpg}
          jpg2={jpg2}
          sizes={sizesPictureFullScreenOnMobile}
          w="670w"
          w2="1340w"
          webp={webp}
          webp2={webp2}
        />

        <CallbackContentStyled>
          <ContactForm />
        </CallbackContentStyled>
      </ContainerPhotoLeft>
    </LevelContextProvider>
  </SectionNoBottomPadding>
);
