import { useState } from "react";
import { api } from "../../services/api";

const DeleteAnnouncementModal = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await api.delete(`announcements/${id}`);
      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button className="normalButton" onClick={() => setIsOpen(true)}>
        Excluir Anúncio
      </button>
      {isOpen && (
        <div className="modalWrapper">
          <div className="modalContent">
            <h4>Tem certeza que deseja excluir este anúncio?</h4>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="id" value={id} />
              <div className="createCancel">
                <button type="submit">Confirmar Exclusão</button>
                <button onClick={() => setIsOpen(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteAnnouncementModal;