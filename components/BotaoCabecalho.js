import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons'
import { Platform } from 'react-native';
import cores from '../cores/cores';

const BotaoCabecalho = (props) => {
    return (
        <HeaderButton 
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'white' : cores.primary }
        />

    );
};

export default BotaoCabecalho;