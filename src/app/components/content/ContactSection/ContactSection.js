'use client';

import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import HoleSVG from './ContactSectionContent/svg/HoleSVG';
import { ScrollTrigger, Draggable } from 'gsap/all';
import { useStore } from 'zustand';
import mailStore from '../../../../../stores/mailStore';
import styles from './ContactSection.module.css';

gsap.registerPlugin(ScrollTrigger, Draggable, useGSAP);

export default function ContactSection({ isMobile }) {
  const emailRef = useRef();
  const containerRef = useRef();
  const instructionsRef = useRef();
  const svgContainerRef = useRef();
  const [state, setState] = useState({
    isHovered: false,
    isClicked: false,
    isDragging: false,
    isEntered: false,
    isDropped: false,
  });
  const formFieldsRef = useRef();
  const nameRef = useRef();
  const mailRef = useRef();
  const messageRef = useRef();

  // email stores
  const {
    isSent,
    name,
    email,
    message,
    setIsSent,
    setName,
    setEmail,
    setMessage,
  } = useStore(mailStore);

  useGSAP(
    () => {
      if (
        !emailRef.current ||
        !containerRef.current ||
        !svgContainerRef.current ||
        !formFieldsRef.current
      )
        return;

      const draggable = Draggable.create(emailRef.current, {
        type: 'x,y',
        bounds: containerRef.current,
        inertia: true,
        allowEventDefault: true,
        ignore: '.LowerContent, .LowerContent *',
        onDragStart: () => updateState({ isDragging: true }),
        onDragEnd: () => {
          setTimeout(() => updateState({ isDragging: false }), 0);
          checkIntersection();
          if ({ isEntered: true } && { isClicked: false }) {
            updateState({ isDropped: true });
          } else {
            updateState({ isDropped: false });
          }
        },
        onPress: () => updateState({ isClicked: true }),
        onRelease: function () {
          if (!this.isDragging) {
            updateState({ isClicked: false });
          }
        },
        onDrag: checkIntersection,
      })[0];

      function checkIntersection() {
        const emailBounds = emailRef.current.getBoundingClientRect();
        const holeBounds = svgContainerRef.current.getBoundingClientRect();

        const isIntersecting = !(
          emailBounds.right < holeBounds.left ||
          emailBounds.left > holeBounds.right ||
          emailBounds.bottom < holeBounds.top ||
          emailBounds.top > holeBounds.bottom
        );

        updateState({ isEntered: isIntersecting });
      }

      return () => {
        if (draggable) draggable.kill();
      };
    },
    { scope: containerRef }
  );

  const updateState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  useEffect(() => {
    let message = '';
    if (state.isEntered && state.isDragging) message = 'Drop me now!';
    else if (state.isDragging) message = 'Drop me above the hole!';
    else if (state.isClicked) message = 'Now drag me!';
    else if (state.isHovered) message = 'Fill in the form and grab it!';
    else if (state.isDropped) message = 'Wooooooooo!';

    const tl = gsap.timeline();
    if (
      state.isDropped &&
      state.isEntered &&
      !state.isClicked &&
      nameRef.current?.value !== '' &&
      emailRef.current?.value !== '' &&
      messageRef.current?.value !== ''
    ) {
      const tl = gsap.timeline();
      tl.to(emailRef.current, {
        y: 200,
        scale: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }

    if (instructionsRef.current) instructionsRef.current.innerHTML = message;
  }, [state]);

  useEffect(() => {
    if (state.isDropped) {
      const name = nameRef.current?.value;
      const email = mailRef.current?.value;
      const message = messageRef.current?.value;

      setName(name);
      setEmail(email);
      setMessage(message);
      setIsSent(true);

      handleSubmit(name, email, message);
    }
  }, [state.isDropped, setName, setEmail, setMessage, setIsSent]);

  const handleSubmit = async (name, email, message) => {
    if (!name || !email || !message) {
      alert('Please fill out all fields');
      return;
    }

    const sendMail = async () => {
      const formData = {
        to: email,
        subject: `Hello ${name}, thanks for reaching out!`,
        html: `
          <h1>Hey ${name}!</h1>
          <p>Thank you very much for contacting me. I will get back to you as soon as possible.</p>
         <p>I wish you a pleasant day. Best wishes, </p>
         <h4>Carlo</h4> 
         <br/>
         <br/>
         <br/>
          <p><strong>Your Message:</strong> ${message}</p>
          <p><strong>Email:</strong> ${email}</p>
          
        `,
      };

      try {
        const response = await fetch('/api/mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Email sent successfully');
          const responseData = await response.json();
          console.log('Server response:', responseData);
        } else {
          console.error('Failed to send email');
          const errorData = await response.text();
          console.error('Server error:', errorData);
        }
      } catch (error) {
        console.error('Error sending email', error);
      }
    };

    if (state.isDropped) {
      await sendMail();
    }
  };

  return (
    <section className={styles.Main} ref={containerRef}>
      <h1>I hope I caught your interests. </h1>
      <h3> If so, or if you have any other questions, drop me a line below.</h3>

      <div className={styles.ContentContainer}>
        <div
          className={styles.EmailContainer}
          ref={emailRef}
          onMouseEnter={() => updateState({ isHovered: true })}
          onMouseLeave={() =>
            updateState({ isHovered: false, isClicked: false })
          }
        >
          <div className={styles.Email}>
            <div className={styles.Instructions}>
              <h3 ref={instructionsRef}></h3>
            </div>
            <div className={styles.UpperContent}>
              <h3>Throw me into the hole!</h3>
              <p>I&apos;m really looking forward to hearing from you!</p>
            </div>
            <div ref={formFieldsRef}>
              <form className={styles.LowerContent}>
                <input type="text" placeholder="Your Name" ref={nameRef} />
                <input type="email" placeholder="Your Mail" ref={mailRef} />
                <textarea
                  placeholder="What's the meaning of life? (Hint: not 42)"
                  ref={messageRef}
                />
              </form>
            </div>
          </div>
        </div>
        <div className={styles.SVGContainer} ref={svgContainerRef}>
          <div>
            <HoleSVG />
          </div>
        </div>
      </div>
    </section>
  );
}
