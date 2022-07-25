import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

import { closeModal, ModalsEnum } from "../../store/modals/modalsSlice";
import { RootStateType } from "../../store/rootStore";
import { H16, H20 } from "../../ui/Typography";
import { NewButton } from "../NewButton";

export const LoginModal = () => {
  const { modal, text } = useSelector((state: RootStateType) => state.modals);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal());
  const open = modal === ModalsEnum.WRONG_DATA;
  return (
    <Modal open={open} onClose={handleClose}>
      <div className={"flex items-center justify-center h-full"}>
        <div className={" bg-white rounded-8  max-w-[600px] w-full"}>
          <div className={"border-b-1 border-gray"}>
            <H20 className={"p-20 block "}>Ошибка</H20>
          </div>
          <div className={"border-b-1 border-gray"}>
            <H16 className={"p-20 block "}>{text}</H16>
          </div>
          <div className={"flex justify-end p-20 "}>
            <NewButton onClick={handleClose} buttonType={"gray"}>
              Закрыть
            </NewButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};
