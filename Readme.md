## Diferença entre Testes Unitários e Testes End-to-End  

Os **testes unitários** são responsáveis por testar somente o funcionamento de um componente de forma isolada, para isso usa de **mocks** para simular o restante da aplicação.  

Já os **testes end-to-end (E2E)** são responsáveis por testar todo o fluxo do aplicativo, simulando até o toque do usuário e a inserção de texto nos inputs.  

---

## Configuração do Jest  

Para instalar o **Jest**, foi utilizada a configuração padrão do Expo ([documentação oficial](https://docs.expo.dev/develop/unit-testing/)), em conjunto com a adição nos seguintes arquivos:  

### `package.json`:  

```json
"jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native/.*|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg|firebase|@firebase/.*))"
    ]
  }
```

---

## Executando os Testes  

Para rodar os testes unitários com **Jest**, utilize o comando:  

```sh
npm test
```

Para rodar os testes **end-to-end (E2E)** com **Maestro**, utilize:  

```sh
maestro test test.yaml
```

ou  

```sh
maestro test githubutton-test.yaml
```
