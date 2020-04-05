import React, { useState } from 'react';
import { Backdrop, Fade } from '@material-ui/core';
import { StyledDonateWrapper } from './styled';
import {
  StyledModal,
  StyledCloseWrapper,
  StyledDonationOptionsWrapper,
  StyledHeader,
} from './styled';
import { XCircle as Close } from '@styled-icons/boxicons-regular/XCircle';
import ppay from './ppay.jpg';

export const DonateModal = React.memo(({ donateModal }) => {
  const [closeOnClick, setCloseOnClick] = useState(donateModal);
  return (
    <StyledModal
      open={closeOnClick}
      onClose={() => setCloseOnClick(false)}
      aria-labelledby="Doação modal"
      aria-describedby="Doação modal"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={closeOnClick}>
        <StyledDonateWrapper elevation={3}>
          <StyledCloseWrapper onClick={() => setCloseOnClick(false)}>
            <Close className="icon" />
          </StyledCloseWrapper>
          <StyledHeader>
            Olá, parece que você gostou do app{' '}
            <span role="img" aria-label="Carinha feliz">
              😁
            </span>
          </StyledHeader>
          <p id="transition-modal-description">
            Muito obrigado por estar utilizando e testando o LiftMaps. Esse app
            foi feito do zero por um estudante de Ciência da Computação de 22
            anos, com foco em ajudar comércios locais afetados pelo COVID-19.
            Minha família tem um comércio pequeno que foi afetado então tudo
            dessa ideia foi feita com carinho e amor para essas pessoas.
          </p>
          <p>
            Infelizmente, pagar a hospedagem, domínio e banco de armazenamento
            de dados desse aplicativo não é barato, então se você quiser me
            ajudar, eu tenho alguns canais de doação, recebendo{' '}
            <span className="underline">qualquer valor.</span>
          </p>
          <StyledDonationOptionsWrapper>
            <a
              href="http://www.picpay.com/convite?@ZL8LF6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ppay} alt="Ícone Picpay" />
              cesar.n(clique para criar uma conta)
            </a>
          </StyledDonationOptionsWrapper>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="TKL84S8X23NVW"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Faça doações com o botão do PayPal"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypal.com/pt_BR/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
          <p>
            Para mais opções, envie um email para{' '}
            <a href="mailto:oi@ncesar.com?Subject=Olá" target="_top">
              oi@ncesar.com
            </a>
          </p>
        </StyledDonateWrapper>
      </Fade>
    </StyledModal>
  );
});
