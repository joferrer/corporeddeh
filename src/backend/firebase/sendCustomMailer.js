import { addDoc, collection } from 'firebase/firestore/lite'
import { FireBaseDB } from './firebaseConfig'

const db = FireBaseDB

const successSendMail = {
  message: {
    subject: 'Correo recibido',
    text: 'Su correo ha sido recibido correctamente, nos pondremos en contacto con usted lo antes posible',
    html: '<p>Su correo ha sido recibido correctamente, nos pondremos en contacto con usted lo antes posible</p>'
  }

}

const corporationEmail = 'ferrerjeison7@gmail.com'

export const sendCustomMailer = async (email, subject, message) => {
  try {
    console.log(email, subject, message)
    const collectionRef = collection(db, 'email')
    const emailContent = {
      to: corporationEmail,
      message: {
        subject,
        text: message,
        html: `<p>${message}</p>`
      }

    }
    console.log(emailContent)
    const resp = await addDoc(collectionRef, emailContent)
    console.log(resp)

    const resp2 = await addDoc(collectionRef, { to: email, ...successSendMail })

    console.log(resp2)
    return {
      status: 'success',
      message: 'Correo enviado correctamente'
    }
  } catch (error) {
    return {
      status: 'error',
      message: 'No se pudo enviar el correo'
    }
  }
}
