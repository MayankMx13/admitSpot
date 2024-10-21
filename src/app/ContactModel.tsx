import React from "react";
import styles from "./styles/contactmodel.module.scss";
import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.bar}></div>

        <div className={styles.detail}>
          <Image
            src="/phone_col.png"
            alt="not able to show"
            width={40}
            height={40}
            quality={100}
            priority
          />
          Call +1-905-783-7708
        </div>
        <div className={styles.detail}>
          <Image
            src="/whatsapp_colo.png"
            alt="not able to show"
            width={40}
            height={40}
            quality={100}
            priority
          />
          Whatsapp +1-905-783-7708
        </div>
        <div className={`${styles.detail} ${styles.mail}`}>
          <Image
            src="/mail_colored.png"
            alt="not able to show"
            width={49.25}
            height={40}
            quality={100}
            priority
          />
          Message +1-905-783-7708
        </div>
        <div className={styles.detail}>
          <MdOutlineContentCopy className={styles.copy} />
          Copy number
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
