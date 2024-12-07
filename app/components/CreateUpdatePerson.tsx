import Modal from "antd/es/modal/Modal";
import { PersonRequest } from "../services/Persons";

interface Props {
    mode: Mode;
    values: Person[];
    isModalOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: PersonRequest) => void;
    handeUpdate: (id: number, request: PersonRequest) => void;
}

export enum Mode {
    Create,
    Edit
}

export const CreateUpdatePerson = ({
    mode,
    values,
    isModalOpen, 
    handleCancel,
    handleCreate,
    handeUpdate} : Props) => {
        return (
            <Modal title={mode===Mode.Create ? "Добавить сотрудника" : "Редактировать"} open={isModalOpen} cancelText={"Отмена"}>
                <div>
                    
                </div>
            </Modal>
        )
}