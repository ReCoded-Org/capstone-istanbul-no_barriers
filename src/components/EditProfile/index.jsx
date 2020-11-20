import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const EditProfile = ({ setShowEditModal, showEditModal, info, setInfo }) => {
  const { t } = useTranslation();
  const [input, setInput] = useState(info);

  const handleInputChange = (event, idInput) => {
    setInput((state) => ({ ...state, [idInput]: event }));
  };

  const handleSubmit = () => {
    setInfo(input);
    setShowEditModal(false);
  };

  return (
    <Modal
      size="lg"
      show={showEditModal}
      onHide={() => setShowEditModal(false)}
      aria-labelledby="editProfileModal"
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="editProfileModal">
          {t("profile.editProfileModal.title")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>{t("profile.editProfileModal.name")}</Form.Label>
            <Form.Control
              id="name"
              type="text"
              value={input.name}
              placeholder={t("profile.editProfileModal.namePlaceholder")}
              onChange={(e) => handleInputChange(e.target.value, e.target.id)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{t("profile.email")}</Form.Label>
            <Form.Control
              id="email"
              type="text"
              value={input.email}
              placeholder={t("profile.editProfileModal.emailPlaceholder")}
              onChange={(e) => handleInputChange(e.target.value, e.target.id)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{t("profile.phone")}</Form.Label>
            <Form.Control
              id="phoneNum"
              type="tel"
              value={input.phoneNum}
              placeholder={t("profile.editProfileModal.phonePlaceholder")}
              onChange={(e) => handleInputChange(e.target.value, e.target.id)}
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              id="profilePic"
              value={input.profilePc}
              label={t("profile.editProfileModal.profileImage")}
              onChange={(e) => handleInputChange(e.target.value, e.target.id)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{t("profile.editProfileModal.bio")}</Form.Label>
            <Form.Control
              id="bio"
              as="textarea"
              rows={3}
              value={input.bio}
              placeholder={t("profile.editProfileModal.bioPlaceholder")}
              onChange={(e) => handleInputChange(e.target.value, e.target.id)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-danger"
          onClick={() => setShowEditModal(false)}
        >
          {t("profile.editProfileModal.close")}
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          {t("profile.editProfileModal.save")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfile;
