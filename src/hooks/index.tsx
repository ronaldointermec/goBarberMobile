import React from 'react';
import {Text} from 'react-native';
import {AuthProvider} from './auth';

interface AppProviderContext {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderContext> = ({
  children,
}: AppProviderContext) => <AuthProvider>{children}</AuthProvider>;
export {AppProvider};
