import React from 'react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Stack } from 'expo-router';
import MenuButton from '../components/MenuButton';

export default function Layout() {
  return (
    <ActionSheetProvider>
        <Stack>
          {/* A tela de login */}
          <Stack.Screen name="index" options={{ title: 'Login' }} />

          {/* A tela com o menu de ação */}
          <Stack.Screen
            name="list"
            options={{
              title: 'Listagem',
              headerRight: () => <MenuButton context="list"/>,
            }}
          />

          {/* A tela "Sobre" */}
          <Stack.Screen 
          name="about" 
          options={{
            title: 'Sobre',
            headerRight: () => <MenuButton context="about"/>,
          }}
          />
        </Stack>
    </ActionSheetProvider>
  );
}


