# AppPlanta

Repositório do Projeto "app-planta" - Trabalho de Conclusão de Curso - IFMS TEC INFO CB.

1. [Requisitos](#1-requisitos)
2. [Instalação](#2-instalação)
3. [Acesso](#3-acesso)

## 1. Requisitos

- Node.js >= 10.16.0


## 2. Instalação

**2.1.** Instalar o pacote global do Cordova e Ionic:

    npm install -g cordova ionic


**2.2.** Instalar dependências com NPM:

    npm install

**2.3.** Adicionar a plataforma Android e instalar plugins necessários:

    ionic cordova platform add android

## 3. Execução

**3.1.** Executar o projeto em modo teste:

    ionic serve

**3.2.** Compilar o aplicativo Android (APK) e executar em modo debug em um dispositivo:

    ionic cordova build android
    adb devices
    ionic cordova run android

> Aplicativo (APK) disponvível na pasta platforms/android/app/build/outputs/apk/debug

**3.3.** Compilar o aplicativo Android (APK) e executar em modo debug em um dispositivo:

    ionic cordova build android
    adb devices
    ionic cordova run android

> Aplicativo (APK) disponvível na pasta platforms/android/app/build/outputs/apk/debug