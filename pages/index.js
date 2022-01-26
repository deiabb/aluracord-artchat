import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

/*podemos usar argumentos dentro dessas funções, para elas receberem ali no outro componente um novo valor declarado lá. Aquela tag lá <Title> é uma children desse componente aqui, então aqui em cima, dentro do h1 podemos colocar {props.children}. É tratado como valor dinâmico*/

// function HomePage() {
//   return (
//     <div>
//       <Titulo tag='h2'>Bem vindo novamente!</Titulo>
//       <h2>Discord | Alura Matrix</h2>
//     </div>
    
//     )
//   }

// export default HomePage

export function Titulo(props) { 
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
      ${Tag}{
      color: ${appConfig.theme.colors.neutrals['500']};
      }
      `}</style>
    </>
    
  )
}

export default function PaginaInicial() {
  //const username = 'deiabb'; modo antigo 
  const [username, setUsername] = React.useState('deiabb');
  const roteamento = useRouter();

  return (
    <>
      {/* <GlobalStyle /> */}
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.neutrals['400'],
          backgroundImage: 'url(https://images.unsplash.com/photo-1553733322-5e506a6001b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.secondary['700'],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit = {function (event) {
              event.preventDefault();
              roteamento.push('/chat');
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', fontWeight: 700 ,color: appConfig.theme.colors.neutrals['100'] }}>
              {appConfig.name}
            </Text>

            <TextField
              required 
              minlength="3"
              value={username}
              onChange={function (event) {
                const valor = event.target.value;
                  setUsername(valor);
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals['900'],
                  mainColor: appConfig.theme.colors.neutrals['700'],
                  mainColorHighlight: appConfig.theme.colors.neutrals['500'],
                  backgroundColor: appConfig.theme.colors.neutrals['700'],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["400"],
                mainColor: appConfig.theme.colors.secondary['600'],
                mainColorLight: appConfig.theme.colors.primary['200'],
                mainColorStrong: appConfig.theme.colors.secondary['900'],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.primary['100'],
              border: '1px solid',
              borderColor: appConfig.theme.colors.primary['100'],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals['200'],
                backgroundColor: appConfig.theme.colors.primary['400'],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}