import React, { useState } from 'react';
import { Backdrop, Fade } from '@material-ui/core';
import {
  StyledDonateWrapper,
  StyledModal,
  StyledCloseWrapper,
  StyledHeader,
} from './styled';
import { XCircle as Close } from '@styled-icons/boxicons-regular/XCircle';

export const WelcomeModal = React.memo(({ welcomeModal }) => {
  const [closeOnClick, setCloseOnClick] = useState(welcomeModal);
  return (
    <StyledModal
      open={closeOnClick}
      onClose={() => setCloseOnClick(false)}
      aria-labelledby="Boas vindas modal"
      aria-describedby="Boas vindas modal"
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
            Olá, seja bem-vindo{' '}
            <span role="img" aria-label="Carinha feliz">
              😁
            </span>
          </StyledHeader>
          <p id="transition-modal-description">
            O LiftMaps foi uma solução gratuita com foco em ajudar pequenos
            comerciantes que foram afetados pelo COVID-19. <br />
            <span style={{ fontSize: 10, textDecoration: 'line-through' }}>
              Para usar o APP é muito simples, primeiro de tudo,{' '}
              <strong>aceite compartilhar sua localização com o app</strong> ou
              clique no ícone que fica no canto inferior direito para ativar a
              localização em tempo real, e depois faça seu cadastro após fechar
              essa tela de aviso, clicando no botão que se encontra no topo
              chamado de <strong>Cadastrar</strong>. <br />
              <br />
              Após isso, faça o login no botão ao lado do Cadastrar de nome{' '}
              <strong>Logar</strong>, com suas credenciais já cadastradas.{' '}
              <br />
              Com o login feito, procure no mapa o local que você deseja
              adicionar e clique duas vezes. Depois de clicar duas vezes, uma
              janela irá abrir pedindo os dados desse estabelecimento. <br />{' '}
              Preencha e aguarde até 1 dia útil que ele será adicionado ao banco
              de dados do site.
            </span>
            <br />
            Obrigado a todos que utilizaram e que me ajudaram, não vejo mais
            sentido em continuar com o servidor rodando. O site continuará
            visualmente funcionando para servir como um projeto que ajudou
            várias pessoas.
          </p>
          <p>
            Para mais opções, envie um email para{' '}
            <a href="mailto:oi@ncesar.com?Subject=Olá" target="_top">
              oi@ncesar.com
            </a>{' '}
            ou clique no botão de Sobre na esquerda da página.
          </p>
        </StyledDonateWrapper>
      </Fade>
    </StyledModal>
  );
});
