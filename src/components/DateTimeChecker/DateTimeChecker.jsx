import React from "react";
import DateTimeForm from "./DateTimeForm";
import Heading from "./Heading";
import {
    isValidDate,
    dayInMonth,
    isValidDateFormat,
} from "../../utils/dateTime.util";
import MessageModal from "../MessageModal/MessageModal";
import useModal from "../../hook/useModal";
export default function DateTimeChecker() {
    const {
        modalVisible,
        toggleModal,
        modalType,
        setModalType,
        modalMessage,
        setModalMessage,
    } = useModal();
    const showMessage = (type, message) => {
        toggleModal();
        setModalType(type);
        setModalMessage(message);
    };
    const handleCheckDate = (rawDate) => {
        try {
            const resDate = isValidDate(rawDate);
            showMessage("info", resDate.message);
        } catch (err) {
            showMessage("error", err);
        }
    };
    return (
        <>
            <MessageModal
                isOpen={modalVisible}
                toggleModal={toggleModal}
                message={modalMessage}
                type={modalType}
            ></MessageModal>
            <div className="w-full md:w-1/2 min-h-1/2 max-w-[500px] bg-slate-50 p-5 rounded-sm">
                <Heading></Heading>
                <DateTimeForm handleCheckDate={handleCheckDate}></DateTimeForm>
            </div>
        </>
    );
}
