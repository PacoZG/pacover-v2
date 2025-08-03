'use client'

import emailjs from '@emailjs/browser'
import React, { useState } from 'react'
import { getTheme } from '@/utils/localdb'
import { useField } from '@/hooks/InputHooks'

type EmailValidation = () => boolean
type HandleSendEmail = (event: React.FormEvent<HTMLFormElement>) => void
type DisableButton = () => boolean

export const ContactModel = () => {
  const [disabled, setDisabled] = useState<boolean>(true)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [sending, setSending] = useState<boolean>(false)

  const fullName = useField('text')
  const email = useField('email')
  const message = useField('text')
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
  const theme = getTheme()

  const buttonIsDisabled: DisableButton = () => {
    if (!disabled && message.params.value.length > 49) {
      return false
    }
    return true
  }

  const handleVerifyCaptcha = () => {
    setDisabled(!disabled)
  }

  const handleSendEmail: HandleSendEmail = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    setSending(true)
    if (
      emailInputValidation() &&
      fullName.params.value.length >= 4 &&
      message.params.value.length >= 50
    ) {
      emailjs
        .sendForm(
          'service_6ked5rp',
          'template_rruy7ci',
          event.target as HTMLFormElement,
          'ayNQSJVuw3mKwJnpn'
        )
        .then(
          result => {
            console.log(result.text)
            setShowModal(true)
            setSending(false)
          },
          error => {
            console.log(error.text)
          }
        )
      fullName.reset()
      email.reset()
      message.reset()
      setTimeout(() => {
        setShowModal(false)
      }, 7000)
    }
  }

  const emailInputValidation: EmailValidation = () => {
    const emailPattern =
      /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    if (
      emailPattern.test(email.params.value) &&
      email.params.value.length > 11
    ) {
      return true
    }
    return false
  }

  return {
    handleSendEmail,
    emailInputValidation,
    handleVerifyCaptcha,
    buttonIsDisabled,
    disabled,
    showModal,
    sending,
    fullName,
    email,
    message,
    siteKey,
    theme,
  }
}
