import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Spinner } from '@/components/icons'
import { ContactModel } from '@/components/Contact/ContactModel'
import { useTranslations } from 'next-intl' // Assuming ContactModel is in the same directory

const Contact = () => {
  const t = useTranslations('contact')
  const {
    handleSendEmail,
    handleVerifyCaptcha,
    emailInputValidation,
    buttonIsDisabled,
    showModal,
    sending,
    fullName,
    email,
    message,
    siteKey,
    theme,
  } = ContactModel()

  return (
    <div className="transform duration-500 pt-2 p-4 sm:p-4 pb-0 w-full sm:w-3/5 lg:w-8/12">
      <form onSubmit={handleSendEmail}>
        <div className="flex flex-col items-center justify-center gap-6 p-3 sm:p-5 md:p-7 bg-gray-300 dark:bg-gray-800 rounded-xl shadow-lg transition duration-500">
          {/* Name and Email Inputs */}
          <div className="relative flex flex-col sm:flex-row justify-between items-center gap-6 w-full">
            <input
              className="contact-input-style" // Replaced repetitive class with a custom class
              placeholder={t('name')}
              {...fullName.params}
              required
              name="name"
            />

            <div className="relative flex flex-col w-full">
              <input
                className="contact-input-style" // Replaced repetitive class with a custom class
                placeholder="Email"
                {...email.params}
                required
                name="email"
              />

              {emailInputValidation() ? null : (
                <label className="absolute -bottom-6 left-2 text-sm text-red-700 dark:text-red-400 font-medium">
                  {email.params.value.length > 0 && t('invalid-email')}
                </label>
              )}
            </div>
          </div>

          <textarea
            className="contact-input-style h-24 resize-y"
            placeholder={t('message')}
            {...message.params}
            required
            name="message"
            maxLength={500}
            minLength={50}
          />

          <div className="flex flex-col ml:flex-row ml:items-center justify-evenly ml:justify-between w-full">
            <div className="flex justify-end pt-1 w-full ml:w-auto ml:justify-start">
              {showModal ? (
                <p className="text-sm ml:text-md lg:text-base text-center text-green-700 dark:text-green-400 transform duration-500 font-semibold">
                  {'Thanks / Kiitos / Gracias'}
                </p>
              ) : (
                <label className="text-gray-600 dark:text-gray-400 text-sm ml:text-md lg:text-base text-center sm:text-left">
                  {message.params.value.length > 49 ? (
                    <span className="text-green-700 dark:text-green-400 font-semibold">{`${t(
                      'characters'
                    )}${message.params.value.length}/500 max`}</span>
                  ) : (
                    message.params.value.length > 0 && (
                      <span className="text-red-700 dark:text-red-400 font-medium">{`${t(
                        'characters'
                      )} ${message.params.value.length}/50 min`}</span>
                    )
                  )}
                </label>
              )}
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center ml:justify-end mt-4 md:mt-0">
              <div className="flex justify-center w-48 xs:w-full m-0">
                <ReCAPTCHA
                  className="scale-75 sm:scale-75 md:scale-80"
                  sitekey={siteKey}
                  onChange={handleVerifyCaptcha}
                  theme={theme}
                />
              </div>

              <div className="flex flex-col items-center ">
                {!showModal ? (
                  <button
                    disabled={buttonIsDisabled()}
                    className={
                      !buttonIsDisabled() || sending === true
                        ? 'contact-send-button-enabled'
                        : 'contact-send-button-disabled'
                    }
                    type="submit"
                  >
                    {!sending ? (
                      t('send')
                    ) : (
                      <div className="flex flex-row items-center gap-3">
                        <Spinner className="animate-spin h-5 w-5 text-current" />

                        <label>{t('sending')}</label>
                      </div>
                    )}
                  </button>
                ) : (
                  <div className="contact-sent-message-display">
                    {t('sent')}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 shadow-2xl text-center max-w-sm w-full">
            <p className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
              {t('sent')}!
            </p>

            <p className="text-lg text-gray-800 dark:text-gray-200">
              {t('message-sent')}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
