import { useState } from "react";

const useModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState("");
    const [modalMessage, setModalMessage] = useState("");

    function toggleModal() {
        setModalVisible(!modalVisible);
    }

    return {
        modalVisible,
        toggleModal,
        modalType,
        setModalType,
        modalMessage,
        setModalMessage,
    };
};

export default useModal;
