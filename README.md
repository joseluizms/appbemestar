Tecnologias:

React Native: Uma estrutura de desenvolvimento de aplicativos móveis que permite criar aplicativos nativos para Android e iOS usando JavaScript e React.

AsyncStorage: Uma API de armazenamento assíncrono no React Native que permite armazenar dados no dispositivo do usuário.

React Navigation: Uma biblioteca popular para gerenciamento de navegação em aplicativos React Native.

FontAwesome: Uma biblioteca de ícones que fornece ícones vetoriais personalizáveis.

Progress: Uma biblioteca que oferece componentes de barra de progresso para React Native.

Estrutura do Projeto:

O projeto é dividido em duas telas principais:

Tela de Login: Esta tela permite que o usuário insira seu e-mail e senha para fazer login no aplicativo.

Tela de Tarefas (Tasks): Esta tela apresenta uma lista de tarefas que o usuário pode iniciar e acompanhar. Cada tarefa possui um ícone, um botão "Iniciar", um botão "Pausar" e um botão "Parar". Quando uma tarefa é iniciada, uma barra de progresso é exibida para mostrar o progresso da tarefa. O progresso da tarefa é salvo localmente usando AsyncStorage.

Tela de Perfil: Esta tela exibe o perfil do usuário, incluindo uma imagem de perfil, o título "PERFIL" e o progresso das tarefas em forma de barras de progresso. O progresso é carregado do AsyncStorage.

Bibliotecas Externas:

Para o armazenamento local dos dados do usuário e do progresso das tarefas, a biblioteca AsyncStorage foi utilizada.

Para a navegação entre as telas, o React Navigation foi empregado.

A biblioteca FontAwesome fornece os ícones usados no aplicativo.

A biblioteca Progress é usada para exibir as barras de progresso das tarefas.

Além disso, estilos foram aplicados às telas e componentes usando a API StyleSheet do React Native para garantir que o aplicativo tenha uma aparência agradável e seja responsivo em dispositivos móveis.
