import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState({
    header: "Modal",
    children: <></>,
  });
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Navbar />
      <Outlet context={[setModal, setModalVisible]} />
      <Footer setModal={setModal} setModalVisible={setModalVisible} />

      <Modal
        header={modal.header}
        visible={modalVisible}
        setVisible={setModalVisible}
      >
        {modal.children}
      </Modal>
    </>
  );
}

export default App;
