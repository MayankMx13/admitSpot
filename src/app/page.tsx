"use client";

import ContactModal from "./ContactModel";
import React from "react";
import { useState } from "react";
import styles from "./styles/mobile.module.scss";
import { validateForm } from "./validation";

import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BiMessage } from "react-icons/bi";
import { TbMailForward } from "react-icons/tb";

interface FormData {
  email: string;
  fullname: string;
  phone: string;
  country: string;
  message: string;
}

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [formData, setFormData] = useState<FormData>({
    email: "",
    fullname: "",
    phone: "",
    country: "",
    message: "",
  });

  const [error, setErrors] = useState<{ [key: string]: string }>({});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted successfully:", formData);
  };

  return (
    <div className={styles.contactPage}>
      <div>
        <div className={styles.top}></div>
        <div className={styles.heading}>
          <h1>
            <FaArrowLeft className={styles.back} />
            Contact Us
          </h1>
        </div>
        <div className={styles.main}>
          <div className={styles.upper}>
            <div className={styles.description}>
              <p>
                Resolve your Education and Immigration Queries with our experts
              </p>
              <p className={styles.line}>
                Reach out to us to inquire about various services offered at
                AdmitSpot
              </p>
            </div>
            <div className={styles.cardContainer}>
              <div className={styles.card} onClick={handleOpenModal}>
                <Image
                  src="/phone_col.png"
                  alt="not able to show"
                  width={40}
                  height={40}
                  quality={100}
                  priority
                />
                <h4>Call</h4>
                <h5>+1-905-783-7708</h5>
                <span className={styles.handles}>
                  <FiPhone className={styles.handle} />
                  <BiMessage className={styles.handle} />
                  <FaWhatsapp className={styles.handleL} />
                </span>
              </div>

              <div className={styles.card1}>
                <Image
                  src="/mail_colored.png"
                  alt="not able to show"
                  width={49.25}
                  height={40}
                  quality={100}
                  priority
                />
                <h4>E-mail</h4>
                <h5>info@admitspot.com</h5>
                <span className={styles.handles}>
                  <TbMailForward />
                </span>
              </div>
              <div className={styles.card}>
                <Image
                  src="/whatsapp_colo.png"
                  alt="not able to show"
                  width={40}
                  height={40}
                  quality={100}
                  priority
                />
                <h4>Whatsapp</h4>
                <h5>+1-905-783-7708</h5>
              </div>
            </div>
          </div>
          <div className={styles.banner}>
            <div className={styles.msg}>
              <div className={styles.imageContainer}>
                <Image
                  src="/img1.png"
                  alt=""
                  height={207.16}
                  width={298}
                  quality={100}
                />
              </div>
              <div className={styles.content}>
                <h2>Virtual Office</h2>
                <span className={styles.msp}>
                  Visit our Virtual Office from the comfort of your home and
                  simplify your study abroad journey with us.
                </span>
                <span className={styles.dsp}>
                  Schedule a session with one of our Experts.
                </span>
                <ul>
                  <li>
                    <Image
                      src="/tick.png"
                      alt=""
                      height={25}
                      width={25}
                      quality={100}
                    />
                    Free consultation up to 30 mins
                  </li>
                  <li>
                    <Image
                      src="/tick.png"
                      alt=""
                      height={25}
                      width={25}
                      quality={100}
                    />
                    Join From anywhere
                  </li>
                  <li>
                    <Image
                      src="/tick.png"
                      alt=""
                      height={25}
                      width={25}
                      quality={100}
                    />
                    Get all your queries answered
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.right}>
              <FaArrowLeft className={styles.vector} />
            </div>
          </div>

          <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />

          <div className={styles.bottom}>
            <div className={styles.callback_form}>
              <h2>Request a callback from us</h2>
              <form action="" onSubmit={handleSubmit}>
                <input
                  value={formData.email}
                  onChange={handleOnChange}
                  type="email"
                  name="email"
                  placeholder="Email*"
                />
                {error.email && <p className={styles.errors}>{error.email}</p>}

                <input
                  value={formData.fullname}
                  onChange={handleOnChange}
                  type="text"
                  name="fullname"
                  placeholder="Full Name*"
                />
                {error.fullname && (
                  <p className={styles.errors}>{error.fullname}</p>
                )}

                <input
                  value={formData.phone}
                  onChange={handleOnChange}
                  type="tel"
                  name="phone"
                  placeholder="Phone number*"
                />
                {error.phone && <p className={styles.errors}>{error.phone}</p>}

                <input
                  value={formData.country}
                  onChange={handleOnChange}
                  type="text"
                  name="country"
                  placeholder="Country of Residence"
                />
                {error.country && (
                  <p className={styles.errors}>{error.country}</p>
                )}

                <input
                  value={formData.message}
                  onChange={handleOnChange}
                  type="text"
                  name="message"
                  placeholder="How can we serve you"
                />
                {error.message && (
                  <p className={styles.errors}>{error.message}</p>
                )}

                <button type="submit"></button>
              </form>
            </div>
            <div className={styles.locationCards}>
              <div className={styles.location}>
                <h2>Ontario Office</h2>
                <span>Mon-Fri 9:30am - 6pm</span>
                <p>
                  Suite1500, 4 Robert Speck Pkwy, Mississauga, Ontario, Canada,
                  L4Z 1S1
                </p>
                <div className={styles.detail}>
                  <span>
                    <FaPhoneAlt />
                    +1-905-783-7708
                  </span>
                  <span>
                    <IoMdMail />
                    info@admitspot.com
                  </span>
                </div>
                <Image src="/map.png" alt="" height={67.6} width={354.85} />
              </div>
              <div className={styles.location}>
                <h2>New Brunswick Office </h2>
                <span>Mon-Fri 9:30am - 6pm</span>
                <p>
                  Suite 406, 82 Westmorland Street, Fredericton, New Brunswick,
                  Canada, E3B 3L3
                </p>
                <div className={styles.detail}>
                  <span>
                    <FaPhoneAlt />
                    +1-506-999-7708
                  </span>
                  <span>
                    <IoMdMail />
                    info@admitspot.com
                  </span>
                </div>
                <Image src="/map.png" alt="" height={67.6} width={354.85} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.banner}>
            <Image
              className={styles.bannerLarge}
              src="/banner.png"
              alt="Description"
              layout="responsive"
              width={1280}
              height={212}
              quality={100}
            />
            <Image
              className={styles.bannerSmall}
              src="/banner_small.png"
              alt="Description"
              width={1280}
              height={212}
              quality={100}
            />
          </div>

          <div className={styles.links}>
            <div className={styles.left}>
              <Image
                src="/logo.png"
                alt="Description"
                width={143}
                height={30}
                quality={100}
              />

              <p>© 2023 AdmitSpot, Inc. All rights reserved.</p>
              <div className={styles.social}>
                <FaLinkedinIn className={styles.logos} />
                <FaInstagram className={styles.logos} />
                <FaWhatsapp className={styles.logos} />
                <FaFacebookF className={styles.logos} />
                <FaYoutube className={styles.logos} />
                <FaTiktok className={styles.logos} />
              </div>
              <div>
                <FaLocationDot className={styles.util} />
                Ontario, Canada <span>Get Directions</span>
                <FaExternalLinkAlt className={styles.redirect} />
              </div>
              <div>
                <FaLocationDot className={styles.util} />
                New Brunswick, Canada <span>Get Directions</span>
                <FaExternalLinkAlt className={styles.redirect} />
              </div>
              <div>
                <FaPhoneAlt className={styles.util} />
                +1-9057837708
              </div>
              <div>
                <IoMdMail className={styles.util} />
                info@admitspot.com
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.top_right}>
                <div className={styles.header}>
                  <span>Company</span>
                  <span>About us</span>
                  <span>Contact us</span>
                </div>
                <div className={styles.header}>
                  <span>Solutions</span>
                  <span>Students</span>
                  <span>Universities</span>
                  <span>Employers</span>
                </div>
                <div className={styles.header}>
                  <span>Support</span>
                  <span>Immigration services</span>
                  <span>Blogs</span>
                  <span>Virtual offices</span>
                </div>
                <div className={styles.header}>
                  <span>Legal</span>
                  <span>Terms & Conditions</span>
                  <span>Privacy policy</span>
                  <span>Cookies policy</span>
                </div>
              </div>
              <div className={styles.bottom_right}>
                <div className={styles.social}>
                  <FaLinkedinIn className={styles.logos} />
                  <FaInstagram className={styles.logos} />
                  <FaWhatsapp className={styles.logos} />
                  <FaFacebookF className={styles.logos} />
                  <FaYoutube className={styles.logos} />
                  <FaTiktok className={styles.logos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
