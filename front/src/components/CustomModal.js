import React from 'react';
import { ModalBox, ContainerModal, Button, ContainerButton } from '../styles/components/customModal';
import colors from '../styles/global/colors';
import { Title, Text } from '../styles/global/general'

const CustomModal = ({
    isOpen,
    onClosed,
    title = "Deseja mesmo excluir?",
    confirm
}) => {
    return (
        <ModalBox 
            close={onClosed}
            isOpen={isOpen}
            onClosed={onClosed}
            keyboardTopOffset={0}>
            <ContainerModal>
                <Title>{title}</Title>
                <ContainerButton>
                    <Button onPress={()=>onClosed()}><Text color={colors.shadow} fontWeight="bold">Cancelar</Text></Button>
                    <Button onPress={()=>confirm()} backgroundColor={colors.green}><Text color={colors.white} fontWeight="bold">Confirmar</Text></Button>
                </ContainerButton>
            </ContainerModal>
        </ModalBox>
    );
}

export default CustomModal;