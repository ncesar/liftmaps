import React, { useState } from 'react';
import { Backdrop, Fade, Button } from '@material-ui/core';
import { StyledSobreWrapper } from './styled';
import Instagram from './ig.png';
import YouTube from './yt.png';
import {
  StyledDonationOptionsWrapper,
  StyledDonateWrapper,
  StyledCloseWrapper,
  StyledModal,
  StyledHeader,
} from './styled';
import { XCircle as Close } from '@styled-icons/boxicons-regular/XCircle';
import ppay from './ppay.jpg';
import { GithubWithCircle as Github } from '@styled-icons/entypo-social/GithubWithCircle';

export const About = React.memo(() => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <StyledSobreWrapper>
        <Button
          type="button"
          onClick={handleOpen}
          variant="outlined"
          size="small"
        >
          Sobre
        </Button>
        <a
          href="https://instagram.com/cesar.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="Ícone do Instagram" />
        </a>
        <a
          href="https://youtube.com/ncesar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={YouTube} alt="Ícone do YouTube" />
        </a>
        <a
          href="https://github.com/ncesar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="icon" style={{ fill: '#888888' }} />
        </a>
      </StyledSobreWrapper>
      <StyledModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <StyledDonateWrapper elevation={3}>
            <StyledCloseWrapper onClick={handleClose}>
              <Close className="icon" />
            </StyledCloseWrapper>
            <StyledHeader>Sobre o app</StyledHeader>
            <p id="transition-modal-description">
              Esse app foi feito do zero por um estudante de Ciência da
              Computação de 22 anos, com foco em ajudar comércios locais
              afetados pelo COVID-19. Minha família tem um comércio pequeno que
              foi afetado então tudo dessa ideia foi feita com carinho e amor
              para essas pessoas.
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
            <StyledHeader>Desenvolvimento</StyledHeader>
            <p>
              Para desenvolver o app foram utilizada as principais tecnologias:
              ReactJS, NodeJS, MongoDB, Firebase Auth, Material UI e outras.
            </p>
            <StyledHeader>O autor</StyledHeader>
            <p>
              Sou natural de Recife, residindo em Blumenau, estudante de Ciência
              da Computação e trabalhando na Philips como Desenvolvedor, para
              saber mais visite meu blog:{' '}
              <a
                href="https://ncesar.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ncesar.com
              </a>
            </p>
          </StyledDonateWrapper>
        </Fade>
      </StyledModal>
    </div>
  );
});
