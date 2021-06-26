import React, { useState } from 'react';
import colors from '../../styles/global/colors';
import { Title } from '../../styles/global/general';
import { ContainerButtons, ButtonLarge } from '../../styles/pages/profile/profile';

const Languages = () => {
    const [language, setLanguage] = useState("pt_BR");
    const en_US = {
        'pt_BR': 'Brazilian Portuguese',
        'es_ES': 'Spanish',
        'en_US': 'English',
        'languages': 'Languages'
    }
    const pt_BR = {
        'pt_BR': 'Português do Brasil',
        'es_ES': 'Espanhol',
        'en_US': 'Inglês',
        'languages': 'Línguas'
    }
    const es_ES = {
        'pt_BR': 'Portugués Brasileño',
        'es_ES': 'Español',
        'en_US': 'Inglés',
        'languages': 'Idiomas'
    }
    const i18n = (key, lang) => {
        switch (lang) {
            case 'en_US':
                return en_US[key]
            case 'es_ES':
                return es_ES[key]
            default:
                return pt_BR[key]
        }
    }

    return (
        <ContainerButtons>
            <Title style={{ marginTop: 50, marginBottom: 50, textAlign: "center" }}>{i18n('languages', language)}</Title>
            <ButtonLarge onPress={() => setLanguage("pt_BR")} active={language === "pt_BR"}>
                <Title style={{ textAlign: "center", color: language === "pt_BR" ? colors.white : colors.shadow }}>{i18n('pt_BR', language)}</Title>
            </ButtonLarge>
            <ButtonLarge onPress={() => setLanguage("en_US")} active={language === "en_US"}>
                <Title style={{ textAlign: "center", color: language === "en_US" ? colors.white : colors.shadow }}>{i18n('en_US', language)}</Title>
            </ButtonLarge>
            <ButtonLarge onPress={() => setLanguage("es_ES")} active={language === "es_ES"}>
                <Title style={{ textAlign: "center", color: language === "es_ES" ? colors.white : colors.shadow }}>{i18n('es_ES', language)}</Title>
            </ButtonLarge>
        </ContainerButtons>
    );
}

export default Languages;